import React, { useContext, useEffect, useMemo, useState } from 'react'

import { DataContext } from 'src/Context/DataContext'
import ReactWordcloud from 'react-wordcloud'

// import 'tippy.js/dist/tippy.css'
// import 'tippy.js/animations/scale.css'



const WordCloud = () => {

  const callbacks = {
    getWordColor: word => word.value > 50 ? "blue" : "red",
    onWordClick: console.log,
    onWordMouseOver: console.log,
    getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
  }

  

  const data = JSON.parse(window.localStorage.getItem("data"))
  const [words, setWords] = useState([])
  const [empty, setEmpty] = useState(false)

  

  // const size = [800, 600]
  // const options = {
  //   fontFamily: 'Poppins',
  //   fontSizes: [16, 48],
  //   rotations: 2,
  //   rotationAngles: [-90, 0],
  //   enableOptimizations: true,
  // }

  const size = useMemo(() => {
    return [800, 500];
  }, []); // add dependencies to useMemo where appropriate
  const options = useMemo(() => {
    return {
      fontFamily: 'Poppins',
      fontSizes: [16, 48],
      rotations: 2,
      rotationAngles: [-90, 0],
      enableOptimizations: true,
    }
  }, []); // add dependencies to useMemo where appropriate

  useEffect(() => {
    getWords()
  }, [])

  function getWords(){
    const wordcloud =  data.hashtag_wordcloud
    if(wordcloud !== undefined){
      let tempWords = wordcloud.split(' ')
      let wordCounts = []
      for (let i = 0; i < tempWords.length; i++) {
        let word = tempWords[i]
        let isWordIn = wordCounts.find((wc) => wc.text === word)
        if (isWordIn) {
          wordCounts.find((wc) => wc.text === word).value += 1
        } else {
          wordCounts.push({ text: word, value: 1 })
        }
      }
      setWords(wordCounts)
    }
    else if ( wordcloud === ""){
      setEmpty(true)
    }
    
  }

  // function fetchWordCloud(){
  //   if(wordcloud !== undefined){
  //     let tempWords = wordcloud.split(' ')
  //     let wordCounts = []
  //     for (let i = 0; i < tempWords.length; i++) {
  //       let word = tempWords[i]
  //       let isWordIn = wordCounts.find((wc) => wc.text === word)
  //       if (isWordIn) {
  //         wordCounts.find((wc) => wc.text === word).value += 1
  //       } else {
  //         wordCounts.push({ text: word, value: 1 })
  //       }
  //     }
  //     setWords(wordCounts)
  //   }
  //   else{
  //     fetchWordCloud()
  //   }


  // }


  return (
    <>
    {empty === true ?
    (<h1>Tidak ada Wordclod</h1>)
    :
    <ReactWordcloud options={options} size={size} words={words} maxWords={100} />
    }
    </>
  )
}

export default WordCloud
