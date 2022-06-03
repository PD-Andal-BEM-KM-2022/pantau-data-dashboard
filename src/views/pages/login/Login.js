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


import NavbarTest from 'src/components/navbar/Navbar'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Dummy from 'src/dummy/apiDummy'



const Login = () => {
  


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

  return (
    <>
    <Helmet>
      <title>Login - Pantau Data</title>
    </Helmet>
    <NavbarTest />

    <Container>
      <div className="loginPage d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="Crow justify-content-center">
            <CCol md={8}>
              <CCardGroup >
                <CCard className="loginSection p-4">
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p>Sign In to your account</p>
                      <CInputGroup className="inputGroup mb-3">
                        <CInputGroupText className='boxIcon'>
                          <img src={userIcon} />
                        </CInputGroupText>
                        <CFormInput className='formInput' placeholder="Username" autoComplete="username" id='username'/>
                      </CInputGroup>
                      <CInputGroup className="inputGroup mb-4">
                        <CInputGroupText className='boxIcon'>
                          <img src={pwIcon} />
                        </CInputGroupText>
                        <CFormInput
                          className='formInput'
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          id='password'
                        />
                      </CInputGroup>
                      <div className='divBtn'>
                        <CButton color="primary" className="loginBtn px-4" onClick={checkAccount}>
                          Login
                        </CButton>
                      </div>
                      <div className='divBtn'>
                        <CButton color="link" className="forgotBtn px-0">
                          Forgot password?
                        </CButton>
                      </div>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="regisSection text-white p-4">
                  <CCardBody className="text-center">
                    <div>
                      <h2>Register</h2>
                      <p>
                        Don&#180;t have an account?
                      </p>
                      <Link to="/register">
                        <CButton className="button mt-2" active tabIndex={-1}>
                          Register
                        </CButton>
                      </Link>
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

export default Login


const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

font-family: 'Inter', sans-serif;
color : #10294C;

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


.display{
  display: block;
}


.loginSection{
  background-color: #FAB316;
  width: 50%;

  h1{
    font-weight: 600;
  }
  p{
    font-weight: 500;
  }

  .inputGroup{
    height: 50px;
  }
  
  .boxIcon{
    background-color: #10294C;
    border: 3px solid #10294C;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    width: 14%;
    img{
      width: 80%;
    }
  }

  .formInput{
    background: transparent;
    border: 3px solid #10294C;
    border-radius: 8px;
    &::placeholder{
      color: #10294C;
    }
    &:focus{
      box-shadow: none;
    }
  }

  .divBtn{
    width: 100%;
    display: block;

    .loginBtn{
      float: right;
      border: none;
      background-color: #10294C;
      transition: all .3s ease-in-out;
      &:hover{
        box-shadow: 0 8px 30px 0 rgba(23, 168, 108, 0.75);

      }
    }
    .forgotBtn{
      text-decoration: none;
      color: #10294C;
      font-weight: 600;
      font-size: 14px;
      transition: all .9s ease-in-out;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}


.regisSection{
  background-color: #00AEE0;
  width: 50%;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
      font-weight: 600;
    }
    p{
      font-weight: 500;
    }
    .button{
      background-color: white;
      color: #10294C;
      border: none;
      transition: all .3s ease-in-out;


      &:hover{
        background-color: #10294C;
        color: white;
      }
    }
  }
}
`