import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

import "src/components/navbar/Navbar.css";
import LogoPanda from 'src/assets/images/landingpage/logo.png'
import fbLogo from 'src/assets/images/landingpage/fbLogo.png'
import igLogo from 'src/assets/images/landingpage/igLogo.png'
import twtLogo from 'src/assets/images/landingpage/twtLogo.png'
import ytLogo from 'src/assets/images/landingpage/ytLogo.png'

function Footer() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  const activePage = window.location.href;
  console.log(activePage)
  setTimeout(function(){
    for(var i = 0; i < 2; i++){
      const navLinks = document.getElementsByClassName('nav__to').item(i)
      console.log(navLinks.href)
      if(navLinks.href == activePage){
        navLinks.classList.add('active');
      }
    }  
  }, 100)
  return (
    <Container>
        <div className="footer">
            <div className="column left">
                <div className="brand">
                    <img src={LogoPanda} />
                    <h2>Pantau Data</h2>
                </div>
                <div className="sosmed">
                    <a href="https://www.facebook.com"><img src={fbLogo}/></a>
                    <a href="https://www.instagram.com"><img src={igLogo}/></a>
                    <a href="https://www.twitter.com"><img src={twtLogo}/></a>
                    <a href="https://www.youtube.com"><img src={ytLogo}/></a>
                </div>
            </div>
            <div className="column mid">
                <a>Home</a>
                <a>Data Scrapping</a>
                <a>Emotional Analysis</a>
                <a>Data Visualization</a>
            </div>
            <div className="column right">
                <h3 className="title_cr">Copyright</h3>
                <p className="copyright">Copyright @ 2022 | Pantau Data</p>
                <p className="copyright">All rights reserved</p>
            </div>
        </div>
    </Container>
  );
}

export default Footer;


const Container = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500;600;700&display=swap');

.footer{
  background-color: #FFFFFF;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  height: 40vh;
  border-top: none;
  padding-top: 90px;

  .left{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    top: -10px;
    padding-left: 50px;

    .brand{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      img{
        width: 50px;
      }
      h2{
        font-family: 'Playfair Display', serif;
        font-weight: 500;
        margin-left: 16px;
        margin-bottom: 0;
      }
    }

    .sosmed{

      img{
        margin: 0 5px;
      }
    }
  }

  .mid{
    position: relative;
    // top: 20px;
    display: flex;
    flex-direction: column;
    a{
      font-weight: 700;
      font-family: 'Catamaran', sans-serif;
      margin-bottom: 16px;
    }
    a:hover{
      color: #f04E23;
    }
  }

  .right{
    padding-right: 50px;

    .title_cr{
      font-weight: 700;
      font-family: 'Catamaran', sans-serif;
      font-size: 20px;
    }
    .copyright{
      font-family: 'Catamaran', sans-serif;
      font-size: 16px;
      margin-bottom: 0;
    }
  }
}


`
