import React, { useState } from "react";
import { Link } from "react-router-dom";
import "src/components/navbar/Navbar.css";
import LogoPanda from 'src/assets/images/landingpage/logo.png'
import BrandPanda from 'src/assets/images/landingpage/brand.png'

function NavbarTest() {
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
  setTimeout(function(){
    for(var i = 0; i < 2; i++){
      const navLinks = document.getElementsByClassName('nav__to').item(i)
      if(navLinks.href == activePage){
        navLinks.classList.add('active');
      }
    }  
  }, 100)
  return (
    <nav className="nav">
      <Link
              to="/"
              relative
              className="nav__brand"
            >
              <img src={LogoPanda} className='imgPanda' alt="Logo Panda" />
              <img src={BrandPanda} alt="Brand Panda" />
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/" className="nav__to">
              <a className="nav__link">
                Home
              </a>
            </Link>
          </li>
        <li className="nav__item">
          <Link to="/login" className="nav__to">
            <a className="nav__link">
              Login
            </a>
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavbarTest;