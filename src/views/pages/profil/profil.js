import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

import pwIcon from 'src/assets/images/landingpage/pwIcon.png'
import userIcon from 'src/assets/images/landingpage/userIcon.png'
import imgEx from 'src/assets/images/dashboard/imgEx.png'


import NavbarTest from 'src/components/navbar/Navbar'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Dummy from 'src/dummy/apiDummy'



const Profil = () => {
  


  function checkAccount(){
    var user = document.getElementById('username')
    var pw = document.getElementById('password')
    var success = document.getElementById('success')
    var gagal = document.getElementById('gagal')
    axios.get(`http://localhost:3000/account`)
      .then(res => {
        const account = res.data
        var isValid = false
        for(var i = 0; i < account.length; i++ ){
          if(account[i].username == user.value){
            if(account[i].password == pw.value){
              isValid = true
            }
            else{isValid = false}
            break
          }
        }

        if(isValid){
          gagal.classList.remove("gagal")
          success.classList.add("success")
          // setTimeout(success.classList.remove("success"), 2000)
          setTimeout(() => {
            window.location.replace("http://localhost:3001/dashboard")
          }, 2500)
        }
        else{
          success.classList.remove("success")
          gagal.classList.add("gagal")
          // setTimeout(gagal.classList.remove("gagal"), 2000)
        }

      })
  }

  function backPage(){
    window.history.back();
  }

  return (
    <>
    <Helmet>
      <title>Profile - Pantau Data</title>
    </Helmet>
    <NavbarTest />

    <Container>
      <div className='btnBack'>
        <CButton onClick={backPage}>Back</CButton>
      </div>
      <div className="loginPage d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="Crow justify-content-center">
            <CCol>
              <CCardGroup className='group'>
                <CCard className="dpSection">
                  <CCardBody>
                    <img src={imgEx} />
                    <p>Hai, Admin</p>
                    <CButton>Edit Profil</CButton>
                  </CCardBody>
                </CCard>
                <CCard className="detailSection text-white p-5">
                  <CCardBody className='bodyDetail'>
                        <div>
                            <p className='label'>Nama</p>
                            <p className='content'>Admin</p>
                        </div>
                        <div>
                            <p className='label'>Email</p>
                            <p className='content'>-</p>
                        </div>
                        <div>
                            <p className='label'>Telepon</p>
                            <p className='content'>-</p>
                        </div>
                        <div>
                            <p className='label'>Password</p>
                            <p className='content'>-</p>
                        </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
        <CAlert className='alert' id='success' color="success">
          Login Berhasil!
        </CAlert>
        <CAlert className='alert' id='gagal' color="danger">
          Username atau password salah!
        </CAlert>
      </div>
    </Container>
  </>
  )
}

export default Profil


const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

font-family: 'Poppins', sans-serif;
color : #10294C;
background-color: white;

.btnBack{
  position: absolute;
  left: 2%;
  top: 12%;
  z-index: 1000;

}

.btnBack .btn{
  background: #10294C;
  border-radius: 50%;
  padding: 10px;
  transition: 0.5s ease;
}
.btnBack .btn:hover{
  background: #10294C;
  border-radius: 20%;
  padding: 10px;
}

.loginPage{
  height: 90vh;

}

.alert{
  position: absolute;
  top: 15vh;
  display: none;
  box-shadow: 10px 10px 35px -7px rgba(106,136,199,0.75);
  -webkit-box-shadow: 10px 10px 35px -7px rgba(106,136,199,0.75);
  -moz-box-shadow: 10px 10px 35px -7px rgba(106,136,199,0.75);
}

.success{
  display: block;
  left: calc(50% - 5vh);
  animation: dropdown 0.5s linear;
  background-color: #FAB316;
  border: none;
}

.gagal{
  display: block;
  animation: dropdown 0.5s linear;
  transition: 0.5s ease-in-out;
  left: calc(50% - 15vh);
  background-color: #00AEE0;
  color: white;
  border: none;

}

@keyframes dropdown {
  0% {
    top: 7vh;
    opacity: 0;
  }
  50%{
    top: 11vh;
    opacity: 0.5;
  }
  100% {
    top: 15vh;
    opacity: 1;
  }
}

.group{
  height: 80vh;

}

.card{
    border: none;
}

.display{
  display: block;
}


.dpSection{
  width: 30%;
  font-family: 'Playfair Display', serif;

  
  .card-body{
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content: center;
  }

  img{
      width: 50%;
      margin-bottom: 20px;
  }

  p{
      font-weight: 700;
      margin-bottom: 20px;
      font-size: 28px;
  }

  button{
      background-color: white;
      color: #000000;
      border-radius: 0;
      border-color: black;
      height: 30px;
      font-size: 16px;
      padding: 0 10px;
      font-weight: 500;
      margin-bottom: 50px;

  }
}


.detailSection{
  width: 70%;
  
  .bodyDetail{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  }
  div{
      width: 100%;
      margin-bottom: 20px;
  }
  
  .label{
      background-color: #10294C;
      display: inline-block;
      width: 15%;
      text-align: center;
      padding: 8px 0;
  }
  .content{
    display: inline-block;
    padding: 7px 10px;
    border-bottom: 1px solid #10294C;
    border-top: 1px solid transparent;
    width: 85%;
    color: #10294C;
    font-weight: 500;

  }
}
`