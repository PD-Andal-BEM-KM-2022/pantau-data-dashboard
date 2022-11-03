# save this as app.py
import requests
from flask import Flask, request, render_template, url_for, jsonify
import re
from datetime import date, timedelta
import pandas as pd
import community
import pandas as pd
import networkx as nx
import ast
import os
from collections import Counter
import csv
import matplotlib.pyplot as plt
from sklearn import model_selection
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn import svm
from sklearn.metrics import accuracy_score
import ssl
import json

try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    pass
else:
    ssl._create_default_https_context = _create_unverified_https_context
import nltk

nltk.download("stopwords")
from nltk.corpus import stopwords
from nltk.probability import FreqDist
from nltk.tokenize import word_tokenize, TweetTokenizer
from nltk.corpus import stopwords
from collections import Counter
import regex as re
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from wordcloud import WordCloud

app = Flask(__name__)
PATH = os.getcwd()

alay_dict = pd.read_csv(
    PATH + "/riset-digital/dataset/new_kamusalay.csv", encoding="latin-1", header=None
)
alay_dict = alay_dict.rename(columns={0: "original", 1: "replacement"})
stopwords_id = stopwords.words("indonesian")
stopwords_en = stopwords.words("english")

tt = TweetTokenizer()

model = 0


def tokenize_tweet(text):
    return " ".join(tt.tokenize(text))


def remove_unnecessary_char(text):
    text = re.sub("\[USERNAME\]", " ", text)
    text = re.sub("\[URL\]", " ", text)
    text = re.sub("\[SENSITIVE-NO\]", " ", text)
    text = re.sub("  +", " ", text)
    return text


def preprocess_tweet(text):
    text = re.sub("\n", " ", text)  # Remove every '\n'
    text = re.sub("rt ", " ", text)  # Remove every retweet symbol
    text = re.sub("^(\@\w+ ?)+", " ", text)
    text = re.sub(r"\@\w+", " ", text)  # Remove every username
    text = re.sub(
        "((www\.[^\s]+)|(https?://[^\s]+)|(http?://[^\s]+))", " ", text
    )  # Remove every URL
    text = re.sub("/", " ", text)
    text = re.sub(r"[^\w\s]", "", text)
    text = re.sub("  +", " ", text)  # Remove extra spaces
    return text


alay_dict_map = dict(zip(alay_dict["original"], alay_dict["replacement"]))
alay_dict_map.update(
    {  # add some specific dictionary here
        # "pks"   : "pencegahan kekerasan seksual",
        # "p-ks"  : "pencegahan kekerasan seksual",
        # "pkl"    : "pedagang kaki lima"
        "jogja": "yogyakarta",
        "jogya": "yogyakarta",
    }
)


def normalize_alay(text):
    return " ".join(
        [
            alay_dict_map[word] if word in alay_dict_map else word
            for word in text.split(" ")
        ]
    )
    return " ".join(
        [
            alay_dict_map[word] if word in alay_dict_map else word
            for word in text.split(" ")
        ]
    )


def remove_nonaplhanumeric(text):
    text = re.sub("[^0-9a-zA-Z]+", " ", text)
    return text


def remove_stopword(text):
    text = " ".join(["" if word in stopwords_id else word for word in text.split(" ")])
    text = " ".join(["" if word in stopwords_en else word for word in text.split(" ")])
    text = re.sub("  +", " ", text)
    text = text.strip()
    return text


def preprocess(text, alay=False, tweet=False):
    if tweet:
        text = preprocess_tweet(text)
    text = remove_unnecessary_char(text)
    text = text.lower()
    text = tokenize_tweet(text)
    if alay:
        text = normalize_alay(text)
    return text


def remove_duplicate(list1, list2):
    set_1 = set(list1)
    set_2 = set(list2)

    list_2_items_not_in_list_1 = list(set_2 - set_1)
    combined_list = list1 + list_2_items_not_in_list_1

    return combined_list


# Cleaning the tweets
def clean_tweet(text):
    df_clean = pd.DataFrame()
    df_clean["tweet"] = text
    # p.set_options(p.OPT.MENTION, p.OPT.EMOJI, p.OPT.HASHTAG, p.OPT.RESERVED, p.OPT.SMILEY, p.OPT.URL)
    # clean_text = [p.clean(a) for a in text.apply(str)]
    # # print(clean_text[:10])
    # df_clean['clean'] = clean_text
    # df_clean["sliced_text"] = [s[r[0]:r[1]] for s,r in zip(df_clean["full_text"], df_clean["display_text_range"])]
    clean_text = (
        df_clean["tweet"]
        .apply(str)
        .apply(
            preprocess,
            args=(
                True,
                True,
            ),
        )
    )
    # df_clean['clean'] = clean_text.replace("[^a-zA-Z#]", " ")
    # df_clean['no_stopword_text'] = clean_text.apply(remove_nonaplhanumeric).apply(remove_stopword)
    df_clean["clean_text"] = clean_text.apply(remove_nonaplhanumeric).apply(
        remove_stopword
    )

    # return(df_clean[['clean', 'no_stopword_text']])
    return df_clean["clean_text"]


def scrap(keyword, since, until):
    global model

    # ACC_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1CJi2jAKog-cgxvIJeTkxKSUri2qm9fUJpkMQr1xqEXk/export?format=csv&gid=0'
    # response = requests.get(ACC_SHEET_URL)
    # open("list_accounts.csv", "wb").write(response.content)
    account_df = pd.read_csv(
        PATH + "/list_accounts.csv", header=None, names=["account"]
    )
    account_df = account_df["account"].values.tolist()

    PROJECT_NAME = "data"
    since_date = since
    until_date = until

    data_df = pd.DataFrame()

    for account in account_df:
        text_query = f"{keyword} from:{account} include:nativeretweets"
        os.system(
            'snscrape --jsonl twitter-search "{} since:{} until:{}"> {}_scrap.json'.format(
                text_query, since_date, until_date, PROJECT_NAME
            )
        )
        new_data_df = pd.read_json(f"{PROJECT_NAME}_scrap.json", lines=True)
        data_df = pd.concat([data_df, new_data_df])

    if data_df.empty:
        return False
    else:
        mask = data_df.content.str.contains("RT @")
        data_df1 = data_df[mask]
        data_df2 = data_df[~mask]

        data_df2["clean_text"] = clean_tweet(data_df2["content"])

        # Create Model
        # if model == 0:
        #     create_model()
        #     model = 1

        loaded_tfidf = pickle.load(open(PATH + "/emot_tfidf.pickle", "rb"))
        loaded_model = pickle.load(open(PATH + "/emot_tf-idf_model.sav", "rb"))

        # load dataset
        test_data = data_df2

        # some preprocessing and setup
        test_data["clean_text"].fillna("0", inplace=True)
        X_tfidf = loaded_tfidf.transform(test_data["clean_text"])  # TF-IDF

        # Proses Pengujian
        predictions_SVM = loaded_model.predict(X_tfidf)
        test_data["prediction"] = predictions_SVM

        most_tweet = (
            test_data[["url", "prediction", "likeCount", "retweetCount"]]
            .sort_values("retweetCount", ascending=False)
            .head(10)
        )
        redundant_word = [
            "yogyakarta",
            "jogja",
            "sleman",
            "bantul",
            "gunungkidul",
            "kulonprogo",
            "beritajogja",
            "diy",
            "indonesia",
            "jogjaistimewa",
            "JogjaIstimewa",
            "2022",
            "september",
            "kota",
            "daerah",
            "via",
        ]
        word_list = " ".join(test_data["clean_text"]).split()
        for word in redundant_word:
            word_list = list(filter(lambda a: a != word, word_list))
        for word in word_list:
            if word.isnumeric():
                word_list.remove(word)

        word_count = Counter(word_list).most_common(10)
        frequency = pd.DataFrame(word_count, columns=["Word", "Frequency"]).to_json(
            orient="columns"
        )
        frequency_word = list(json.loads(frequency)["Word"].values())
        frequency_freq = list(json.loads(frequency)["Frequency"].values())

        hashtag = pd.notnull(test_data["hashtags"])
        ht_data = test_data[hashtag]
        if ht_data.empty:
            ht_data["hashtags"] = []
        else:
            ht_data["hashtags"] = ht_data["hashtags"].str.join(" ")

        ht_text = " ".join(ht_data["hashtags"])
        ht_list = ht_text.split()
        for ht in redundant_word:
            ht_list = list(filter(lambda a: a != ht, ht_list))
        ht_text = " ".join(ht_list)

        tweet_count = len(data_df2.index)
        emotions_values = test_data["prediction"].value_counts()
        emotions_percentage = []
        for index_emot in range(5):
            if index_emot > len(test_data["prediction"].value_counts()) - 1:
                emotions_percentage.append(0)
            else:
                val = emotions_values[index_emot] / tweet_count * 100
                emotions_percentage.append(round(val, 1))
        quot_df = data_df1

        src_list = []
        for index, row in quot_df.iterrows():
            src_user = row["retweetedTweet"]["user"]["username"]
            src_list.append(src_user)

        tgt_list = []
        for index, row in quot_df.iterrows():
            tgt_user = row["user"]["username"]
            tgt_list.append(tgt_user)

        network_df = pd.DataFrame()
        network_df["source"] = src_list
        network_df["target"] = tgt_list

        sna_data = {}
        sna_data["nodes"] = []
        sna_data["edges"] = []

        list_accounts = remove_duplicate(src_list, tgt_list)
        for account in list_accounts:
            sna_data["nodes"].append({"id": account})
        for i in range(0, len(src_list)):
            sna_data["edges"].append({"from": src_list[i], "to": tgt_list[i]})

        # sna_json = json.dumps(sna_data).encode("utf-8")
        # open(PATH + "/static/sna.json", "wb").write(sna_json)

        output_data = {}
        output_data["most_retweet"] = most_tweet.values.tolist()
        output_data["frequency_word"] = frequency_word
        output_data["frequency_freq"] = frequency_freq
        output_data["hashtag_wordcloud"] = ht_text
        output_data["emotions"] = emotions_percentage
        output_data["tweet_count"] = tweet_count
        output_data["sna"] = sna_data

        return output_data


@app.route("/api/", methods=["GET", "POST"])
def index():  # put application's code here
    # If request method is POST, here

    if request.method == "POST":
        form_data = request.get_json(force=True)
        title = form_data["getProjectTitle"]
        keyword = form_data["getTextQuery"]
        if len(keyword) == 0:
            keyword = ""
        since = form_data["startDate"]
        since = since.split("/")
        since = since[2] + "-" + since[0] + "-" + since[1]

        until = form_data["endDate"]
        until = until.split("/")
        until = until[2] + "-" + until[0] + "-" + until[1]

        output_data = scrap(keyword, since, until)
        output_data["title"] = title
        response = jsonify(output_data)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
    # If request method is GET, here
    else:
        keyword = ""
        today = date.today()
        until = today.strftime("%Y-%m-%d")
        since = today - timedelta(days=7)
        output_data = scrap(keyword, since, until)
        # return render_template(
        #     "index.html",
        #     output_data=output_data,
        #     keyword="Tidak Ada",
        #     since=since,
        #     until=until,
        # )
        response = jsonify(output_data)
        # Enable Access-Control-Allow-Origin
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response


if __name__ == "__main__":
    app.run(host='0.0.0.0')
