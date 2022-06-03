import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {
  CAvatar,
  CBadge,
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'


import styled from 'styled-components'

const AppHeaderDropdown = () => {

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


  return (<>
    <Container>
      <div className='divNav'>
        <ul className={active}>
          <li className="nav__item">
            <Link to="/" className="nav__to">
                <a className="nav__link">
                  Home
                </a>
              </Link>
            </li>
          <li className="nav__item">
            <Link to="/dashboard" className="nav__to">
              <a className="nav__link">
                Dashboard
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </Container>

  </>
  )
}

export default AppHeaderDropdown

const Container = styled.div`
height: 100%;

.divNav{
  height: 100%;
}

.nav__menu li {
  list-style: none;

}
.nav__item a {
  text-decoration: none;
  color: #10294C;
}

.nav {

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(0.5rem + 9vmin);
  background: #FEF0D0;
}
.nav__brand {
  height: 100%;
  padding-left: 9vmin;
  display: flex;
  align-items: center;
}

.nav__brand img{
  height: calc(0.5rem + 6vmin);

}

.nav__menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3rem;
  padding-right: 9vmin;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  height: 100% !important;
  margin-bottom: 0;
}

.nav__item {
  display: flex;
  align-items: center;
  height: 100%;
}

.nav__to {
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: 3px solid transparent;
  border-top: 3px solid transparent;
}

.nav__to:is(:link, :active,:visited).active{
  display: flex;
  align-items: center;
  height: 100%;
  color: #F04E23;
  border-bottom: 3px solid #F04E23;
}
.nav__to:is(:link, :active,:visited).active .nav__link{
  color: #F04E23;
}

.nav__link{
  display: flex;
  align-items: center;
  height: 100% !important;

}
.nav__link:hover{
  color: #F04E23;
}

.nav__toggler {
  display: none;
}
.nav__toggler div {
  width: 2.5rem;
  height: 0.2rem;
  margin: 0.4rem;
  background: rgb(204, 204, 204);
  transition: 0.3s ease-in;
}

@media screen and (max-width: 768px) {
  .nav__toggler {
    display: block;
    cursor: pointer;
  }
  .nav__menu {
    position: fixed;
    top: 7vh;
    right: 0;
    height: 93vh;
    width: 50vw;
    background: rgb(0, 33, 65);
    flex-direction: column;
    transform: translateX(100%);
    transition: 0.5s ease-in;
  }
}
`
