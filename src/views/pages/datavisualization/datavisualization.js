import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'
import axios from 'axios'


import LineChart from 'src/components/LineChart/linechart'

import dataWadasLineChart from 'src/assets/json/wadas/wadas_LineChart.json'

import topLiked from 'src/assets/json/wadas/wadas_MostLiked.json'
import topReplied from 'src/assets/json/wadas/wadas_MostReplied.json'
import topRetweet from 'src/assets/json/wadas/wadas_MostRetweeted.json'
import BarChart from 'src/components/BarChart/barchart'
import { DataContext } from 'src/Context/DataContext'
import WordCloud from 'src/components/WordCloud/wordcloud'
import SNA from 'src/components/SNA/sna'

const DataVisualization = () => {

  const { getData } = useContext(DataContext)

  const data = JSON.parse(localStorage.getItem('data'))


  // const callbacks = {
  //   getWordColor: (word) => (word.value > 50 ? 'blue' : 'red'),
  //   onWordClick: console.log,
  //   onWordMouseOver: console.log,
  //   getWordTooltip: (word) => `${word.text} (${word.value}) [${word.value > 50 ? 'good' : 'bad'}]`,
  // }



  // useEffect(() => {

  //     fetchData()
      

  // }, [])



  




  const slides = document.getElementsByClassName('datavis')

  // // Next/previous controls
  function prev() {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains('flex')) {
        slides[i].classList.replace('flex', 'none')
        var j = i
        if (j - 1 < 0) {
          j = 0
          slides[3].classList.replace('none', 'flex')
          break
        } else {
          slides[j - 1].classList.replace('none', 'flex')
          break
        }
      }
    }
  }
  function next() {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains('flex')) {
        slides[i].classList.replace('flex', 'none')
        var j = i
        if (j + 1 > 3) {
          j = 0
          slides[0].classList.replace('none', 'flex')
          break
        } else {
          slides[j + 1].classList.replace('none', 'flex')
          break
        }
      }
    }
  }
  // function show(n){
  //     slides[n].classList.add("flex")
  // }

  return (
    <Container>
      <div>
        <CRow>
          <CCol xs={12}>
            <CCard className="datascrapby22 shadow-lg p-3 mb-5 bg-body rounded">
              <CCardHeader className="cardHeader">
                <strong>Data Visualization</strong>
              </CCardHeader>
              <CCardBody>
                {
                  getData ? (
                    <>
                      {/* <div className="datavis line-chart flex">
                        <h1>Time Series with Line Chart</h1>
                        <LineChart jsonData={dataWadasLineChart} />
                      </div> */}
                      <div className="datavis sna flex">
                        <h1>Social Network Analysis</h1>
                        <SNA />
                      </div>
                      <div className="datavis word-cloud none">
                        <h1>Word Cloud</h1>
                        <WordCloud />
                        {/* <img src={imgWordCloud} /> */}
                      </div>
                      <div className="datavis bar-chart none">
                        <h1>Emotional Analysis with Bar Chart</h1>
                        <BarChart />
                        {/* <BarChart data_emotions={data_emotions}/> */}
                      </div>
                      <div className="datavis top5 none">
                          <div className="top top-retweet">
                            <h1>Top 5 Retweet</h1>
                            {data.most_retweet.map((item, index) => {
                              return (
                                <div className='item' key={index}>
                                  <a href={item[0]}>Tweet</a>
                                  <p>Emotions : {item[1]}</p>
                                </div>
                              )
                            })}
                          </div>
                      </div>
                    </>
                  ) : (
                    <div className="loading">
                      <h1>Loading...</h1>
                    </div>
                  )
                }
                <div className="btnArrow">
                  <a onClick={prev}>
                    <i className="arrow left"></i>
                  </a>
                  <a onClick={next}>
                    <i className="arrow right"></i>
                  </a>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    </Container>
  )
}

export default DataVisualization

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

  .datavis {
    display: none;
    flex-direction: column;
  }

  .flex {
    display: flex;
  }

  .none {
    display: none;
  }

  .datascrapby22 {
    border-radius: 0 !important;
    border: none !important;
    font-family: 'Poppins', sans-serif;
    color: #10294c;
  }

  .col-sm-10 {
    padding-left: 0 !important;
  }

  .line-chart,
  .bar-chart {
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .sna {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
  }

  .sna h1{
    text-align: center;
    border-bottom: 3px solid #10294c;
    padding-bottom: 5px;
  }

  .line-chart h1 {
    border-bottom: 3px solid #10294c;
    padding-bottom: 5px;
  }

  .bar-chart h1 {
    border-bottom: 3px solid #10294c;
    padding-bottom: 5px;
  }

  .word-cloud h1 {
    text-align: center;
  }


  .top{
    display: flex;
    flex-direction: column;
    height: auto;
  }

  .top h1{
    text-align: center;
  }

  .top .item{
    display: flex;
    margin: 10px 0;
    align-items: center;
  }

  .top .item a{
    text-decoration: none;
    color: #10294c;
    font-weight: 600;
    background-color: #e7421e;
    padding: 5px;
    border-radius: 5px;
  }

  .top .item a:hover{
    background-color: #10294c;
    color: #e7421e;
  }

  .top .item p{
    margin-left: 10px;
    margin-bottom: 0;
  }


  .btnArrow {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
  }
  .btnArrow a {
    cursor: pointer;
  }

  .btnArrow a:nth-child(1) {
    background-color: #e7421e;
    display: inline;
    margin-left: 10px;
    padding: 10px 10px 10px 15px;
  }
  .btnArrow a:nth-child(2) {
    background-color: #e7421e;
    display: inline;
    margin-left: 10px;
    padding: 10px 15px 10px 10px;
  }

  .arrow {
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
  }

  .right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  .left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
`
