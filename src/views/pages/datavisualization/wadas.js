import { CCard, CCardBody, CCardHeader, CCarousel, CCarouselItem, CCol, CImage, CRow } from '@coreui/react'
import React from 'react'
import styled from 'styled-components'

import Linechart from 'src/assets/images/dashboard/linechart.png'
import Wodrcloud from 'src/assets/images/dashboard/wordcloud.png'
import Top5 from 'src/assets/images/dashboard/top5.png'
import CarouselVis from 'src/components/Carousel/carousel'

import LineChart from 'src/components/LineChart/linechart'
import WodrCloud from 'src/components/WordCloud/wordcloud'
import imgWordCloud from 'src/assets/wordcloud/WadasWordCloud.png'

import dataWadasLineChart from 'src/assets/json/wadas/wadas_LineChart.json'
import dataWadasWordCloud from 'src/assets/json/wadas/wadas_WordCloud.json'

import topLiked from 'src/assets/json/wadas/wadas_MostLiked.json'
import topReplied from 'src/assets/json/wadas/wadas_MostReplied.json'
import topRetweet from 'src/assets/json/wadas/wadas_MostRetweeted.json'



const Wadas = () =>{

    const slides = document.getElementsByClassName("datavis");

    // // Next/previous controls
    function prev() {
        for( var i = 0; i < slides.length; i++){
            if(slides[i].classList.contains("flex")){
                slides[i].classList.replace("flex", "none")
                var j = i
                if(j-1 < 0){
                    j = 0;
                    slides[2].classList.replace("none", "flex")
                    break;
                }
                else{
                    slides[j-1].classList.replace("none", "flex")
                    break;
                }
            }
        }
    }
    function next() {
        for( var i = 0; i < slides.length; i++){
            if(slides[i].classList.contains("flex")){
                slides[i].classList.replace("flex", "none")
                var j = i
                if(j+1 > 2){
                    j = 0;
                    slides[0].classList.replace("none", "flex")
                    break;
                }
                else{
                    slides[j+1].classList.replace("none", "flex")
                    break;
                }
            }
        }
    }

    // function show(n){
    //     slides[n].classList.add("flex")
    // }
    
    return(
        <Container>
            <div>
                <CRow>
                    <CCol xs={12}>
                        <CCard className="datascrapby shadow-lg p-3 mb-5 bg-body rounded">
                            <CCardHeader className='cardHeader'>
                                <strong>Wadas</strong>
                            </CCardHeader>
                            <CCardBody>
                                <div className='datavis line-chart flex'>
                                    <h1>Line Chart</h1>
                                    <LineChart jsonData={dataWadasLineChart}  />
                                </div>
                                <div className='datavis word-cloud none'>
                                    <h1>Word Cloud</h1>
                                    <img src={imgWordCloud} />
                                </div>
                                <div className='datavis top5 none'>
                                    <div className='top3'>
                                        <div className='top top-likes'>
                                            <h1>Top 5 Liked</h1>
                                            {
                                                topLiked.map((item, index)=>{
                                                    return(
                                                        <div key={index}>
                                                            <h5>@{item.user_twitter}</h5>
                                                            <p>{item.content}</p>
                                                        </div>
                                                    )
                                                })
                                            }    
                                        </div>
                                        <div className='top top-retweet'>
                                            <h1>Top 5 Retweet</h1>
                                            {
                                                topRetweet.map((item, index)=>{
                                                    return(
                                                        <div key={index}>
                                                            <h5>@{item.user_twitter}</h5>
                                                            <p>{item.content}</p>
                                                        </div>
                                                    )
                                                })
                                            }    
                                        </div>
                                        <div className='top top-replied'>
                                            <h1>Top 5 Replied</h1>
                                            {
                                                topReplied.map((item, index)=>{
                                                    return(
                                                        <div key={index}>
                                                            <h5>@{item.user_twitter}</h5>
                                                            <p>{item.content}</p>
                                                        </div>
                                                    )
                                                })
                                            }    
                                        </div>
                                    </div>
                                </div>
                                <div className='btnArrow'>
                                    <a onClick={prev}><i className="arrow left"></i></a>
                                    <a onClick={next}><i className="arrow right"></i></a>
                                </div>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </div>
        </Container>
    )
}

export default Wadas

const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

.datavis{
    display: none;
    flex-direction: column;
}

.flex{
    display: flex;
}

.none{
    display: none;
}

.datascrapby{
    border-radius: 0 !important;
    border: none !important;
    font-family: 'Poppins', sans-serif;
    color: #10294C;
}

.col-sm-10{
    padding-left: 0 !important;
}

.line-chart{
    justify-content: center;
    align-items: center;
    width: 100%;
}

.line-chart h1{
    border-bottom: 3px solid #10294C;
    padding-bottom: 5px;
}

.word-cloud h1{
    text-align: center;
}


.top3{
    display: flex;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    width: 99%;

}

.top3 .top{
    margin-right: 10px;
    border-radius: 16px;
    width: 33%;
    
}
.top3 .top-replied{
    margin-right: 0px;
    border-radius: 16px;
}

.top h1{
    font-size: 24px;
    text-align: center;
    width: 100%;
    matgin-top: 20px;

}

.top div{
    height: 45vh;;
    border: 3px solid #00AEE0;
    border-radius: 16px;
    position: relative;
    margin-top: 15px;

}
.top h5{
    background-color: #00AEE0;
    color: white;
    padding: 15px;
    border-radius: 8px 8px 0 0;

}

.top p{
    padding: 20px;
}

.btnArrow{
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
}
.btnArrow a{
    cursor: pointer;
}


.btnArrow a:nth-child(1){
    background-color: #E7421E;
    display: inline;
    margin-left: 10px;
    padding: 10px 10px 10px 15px;
}
.btnArrow a:nth-child(2){
    background-color: #E7421E;
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