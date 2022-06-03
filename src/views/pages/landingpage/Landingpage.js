import React, {Component} from 'react'
import { Helmet } from "react-helmet";

import { Link } from 'react-router-dom'
import imgHero from 'src/assets/images/landingpage/imgHero.png'
import searchLogo from 'src/assets/images/landingpage/searchLogo.png'
import puzzleLogo from 'src/assets/images/landingpage/puzzleLogo.png'
import statsLogo from 'src/assets/images/landingpage/statsLogo.png'
import add1 from 'src/assets/images/landingpage/add1.png'
import add2 from 'src/assets/images/landingpage/add2.png'
import add3 from 'src/assets/images/landingpage/add3.png'
import add4 from 'src/assets/images/landingpage/add4.png'


import styled from 'styled-components'
import "src/scss/style.scss"
import "src/scss/style.css"



import {
    CRow
} from '@coreui/react'
import NavbarTest from 'src/components/navbar/Navbar'
import Footer from 'src/components/footer/footer';




const LandingPage = () => 
{
  return (
    <>
        <Helmet>
            <title>Pantau Data</title>
        </Helmet>
        <NavbarTest />
        <Container>
            <div className='additional'>
                <img src={add1} className="add1" />
                <img src={add2} className="add2"/>
                <img src={add3} className="add3"/>
                <img src={add4} className="add4"/>
            </div>
            <div className='hero'>
                <div className='left'>
                    <h1>Pantau Data</h1>
                    <p>Sebuah website yang hadir untuk membantu <br/> menganalisis dan memvisualisasikan data dari twitter</p>
                    <a href='#'>&gt;</a>
                </div>
                <div className='right'>
                    <img src={imgHero}/>
                </div>
            </div>
            <section>
                <div className='manfaat'>
                    <div className='mf satu'>
                        <div className='circle'>
                            <img src={searchLogo} />
                        </div>
                        <p>Membantu riset data</p>
                    </div>
                    <div className='mf dua'>
                        <div className='circle'>
                            <img src={puzzleLogo} className='puzzle' />
                        </div>
                        <p>Melakukan Data Scrapping</p>
                    </div>
                    <div className='mf tiga'>
                        <div className='circle'>
                            <img src={statsLogo} />
                        </div>
                        <p>Memvisualisasikan Data</p>
                    </div>
                </div>
            </section>
        </Container>
        <Footer />
    </>
  )
}

export default LandingPage


const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,900;1,700&display=swap');

// font-family: 'Poppins', sans-serif;
// font-family: 'Playfair Display', serif;

display: flex;
flex-direction: column;
align-items: center;

background-color: #FFF8E6;
margin-top: 0;

.additional
{
    .add1{
        position: absolute;
        left: 35%;
        width: 350px;
    }
    .add3{
        position: absolute;
        left: 0;
        top: 50%;
        width: 230px;
    }
    .add2{
        position: absolute;
        top: calc(65%);
        left: 55%;
        width: 400px;
    }
    .add4{
        position: absolute;
        top: calc(100% + 15vh + 74px );
        left: 5%;
        width: 300px;
    }
}

.hero
{
    height: 90vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    
}

.hero .left
{
    width: 55%;
    padding-left: 12vmin;
    h1
    {
        font-family: 'Playfair Display', serif;
        font-size: 80px;
        font-weight: 800;
        color: #10294C;
    }
    p
    {
        font-family: 'Poppins', sans-serif;
        font-size: 22px;

    }
    a
    {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 70px;
        transform: rotate(90deg);
        text-align: center;
        display: block;
        text-decoration: none;
        color: #10294C;
        width: 60%;
        
    }
}

.hero .right
{
    width: 45%;
    padding-right: 12vmin;

    img
    {
        width: 100%;
    }

}

section{
    width: 80%;
    height: 50vh;
}

.manfaat
{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    .mf{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .circle{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #E7421E;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;

        img{
            width: 45%;
            
        }
        .puzzle{
            width: 70%;
            position: relative;
            top: 10px;
        }
    }
    p{
        text-align: center;
        color: #10294C;
        font-weight: 600;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
    }
}

`