

import { CCard, CCardBody, CCardHeader, CCarousel, CCarouselItem, CCol, CImage, CRow } from '@coreui/react'
import React from 'react'
import styled from 'styled-components'

import LineChart from 'src/assets/images/dashboard/linechart.png'
import WodrCloud from 'src/assets/images/dashboard/wordcloud.png'
import Top5 from 'src/assets/images/dashboard/top5.png'

const CarouselVis = () =>{

    const carouselButtons = document.querySelectorAll(".carousel-btn");
    const carouselButtonLeft = document.querySelector(".btn-left");
    const carouselButtonRight = document.querySelector(".btn-right");
    const carouselImage1 = document.querySelector(".carousel-image-1");
    const carouselImage2 = document.querySelector(".carousel-image-2");
    const carouselImage3 = document.querySelector(".carousel-image-3");
    const numberOfImages = document.querySelectorAll(".carousel-image").length;
    let imageIndex = 1;
    let translateX = 0;
    
    carouselButtonLeft.addEventListener("click", slideLeft);
    carouselButtonRight.addEventListener("click", slideRight);
    
    function slideLeft(){
        if (imageIndex !== 1){
            imageIndex--;
            translateX += 400;
            carouselImage1.style.transform = `translateX(${translateX}px)`;
            carouselImage2.style.transform = `translateX(${translateX}px)`;
            carouselImage3.style.transform = `translateX(${translateX}px)`;
        }
        
    }
    
    function slideRight(){
        if (imageIndex !== numberOfImages){
            imageIndex++;
            translateX -= 400;
            carouselImage1.style.transform = `translateX(${translateX}px)`;
            carouselImage2.style.transform = `translateX(${translateX}px)`;
            carouselImage3.style.transform = `translateX(${translateX}px)`;
        }
        
    }



    return(
        <Container>
                <div className="carousel"> 
                    <div className="carousel-images">
                        <img className="carousel-image carousel-image-1"src="https://cdn.pixabay.com/photo/2020/12/23/08/00/bow-lake-5854210__340.jpg" alt=""/>
                        <img className="carousel-image carousel-image-2"src="https://cdn.pixabay.com/photo/2016/11/29/13/04/forest-1869713__340.jpg" alt=""/>
                        <img className="carousel-image carousel-image-3"src="https://cdn.pixabay.com/photo/2021/01/08/17/56/river-5900547__340.jpg" alt=""/>
                    </div>
                    <button className="carousel-btn btn-left" id="previous"><i className="fa-solid fa-chevron-left icon-left"></i></button>
                    <button className="carousel-btn btn-right" id="next"><i className="fa-solid fa-chevron-right icon-right"></i></button>
                </div>
        </Container>
    )
}

export default CarouselVis

const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
height: 100%;
width:100%;

.carousel{
    display: flex;
    align-items: center;
    width: 400px;
    border-radius: 9px;
    box-shadow: 10px 10px 35px 0px rgba(0,0,0,0.35);
    position: relative;
}

.carousel-images{
    display: flex;
    overflow:hidden; 
    border-radius: 11px;
}

.carousel-image{
    transition: all .9s;
    width: 400px;
    transform: translateX(0);
}


.btn-left,
.btn-right{
    
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    background-color: white;
    border: none;
    position: absolute;
    cursor:pointer;
    opacity: .75;
    transition: all .25s;
    z-index: 1;
}

.btn-left:hover,
.btn-right:hover{
    opacity: 1;
}

.btn-left{
    top: 50%;
    left: -1.5rem;
    transform: translateY(-50%);
}
.btn-right{
    top: 50%;
    right: -1.5rem;
    transform: translateY(-50%);
}

.icon-left,
.icon-right{
    font-size: 2rem;
    color: #22b8cf;
}
`