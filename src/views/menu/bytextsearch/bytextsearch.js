import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import '@coreui/coreui/dist/css/coreui.css'
import 'src/scss/style.css'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CProgress,
  CProgressBar,
  CAlert,
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowRight, cilCalendar, cilGauge } from '@coreui/icons'
import { CDateRangePicker } from '@coreui/react-pro'
import { DocsCallout, DocsExample } from 'src/components'

import '../menu.css'

const ByTextSeacrh = () => {
  const datascrapby = document.getElementsByClassName('datascrapby')
  const progressCard = document.getElementsByClassName('progress-card')
  const progressContainer = document.getElementsByClassName('progress-container')
  const spinnerContainer = document.getElementsByClassName('spinnerContainer')
  const progressBar = document.getElementsByClassName('progress-bar')
  const btnSubmit = document.getElementsByClassName('btnSubmit')
  const percent = document.getElementsByClassName('percent')
  const textLook = document.getElementsByClassName('text-look')
  const done = document.getElementsByClassName('done')
  const formInput = document.getElementsByClassName('formInput')
  const lebelForm = document.getElementsByClassName('labelForm')
  const alert = document.getElementsByClassName('alert')
  const spinner = document.getElementsByClassName('spinner')

  const inputProjectTitle = document.getElementsByClassName('inputProjectTitle')
  const inputTextQuery = document.getElementsByClassName('inputTextQuery')
  const inputTweetCount = document.getElementsByClassName('inputTweetCount2')
  const inputDate = document.getElementsByClassName('form-control')

  function submitInput(e) {
    e.preventDefault()
    checkInput()
    const input = JSON.stringify(getInput())
    // const input = getInput()
    console.log(input)

    axios({
      method: 'post',
      url: 'http://127.0.0.1:5000/',
      data: input,
    })
      .then((res) => {
        console.log(res.data)
        console.log('SUCCESS')
      })
      .catch((err) => {
        console.log(err)
      })

    var isValid = checkInput()
    if (isValid) {
      datascrapby[0].classList.add('display-none')
      spinnerContainer[0].classList.remove('display-none')
      alert[0].classList.add('display-none')
      setTimeout(() => {
        spinnerContainer[0].classList.add('display-none')
        progressCard[0].classList.remove('display-none')
        progressContainer[0].classList.remove('display-none')
        increment(0, 40)

        setTimeout(() => {
          progressContainer[1].classList.remove('display-none')
          increment(1, 20)
        }, 9000)
        setTimeout(() => {
          progressContainer[2].classList.remove('display-none')
          increment(2, 10)
        }, 14000)

        setTimeout(() => {
          done[0].classList.remove('display-none')
          done[0].style.display = 'flex'
        }, 17000)
      }, 3000)
    } else {
      alert[0].classList.remove('display-none')
    }
  }

  // function takeInput(){
  // }

  function checkInput() {
    var check = false
    const startDate = inputDate[3].value
    const endDate = inputDate[4].value
    for (var i = 0; i < formInput.length; i++) {
      if (formInput[i].value == '') {
        check = false
        break
      } else {
        check = true
      }

      if (startDate == '') {
        check = false
      } else {
        check = true
      }
      if (endDate == '') {
        check = false
      } else {
        check = true
      }
    }

    return check
  }

  function reset() {
    window.location.reload()
  }

  function increment(a, interval) {
    var x = 0.5,
      y = '%',
      z
    setInterval(() => {
      z = x + y
      progressBar[a].style.width = z
      percent[a].style.width = z
      percent[a].innerHTML = `${x}%`
      if (x >= 100) {
        clearInterval()
      } else {
        x += 0.5
      }
    }, interval)
  }

  function getInput() {
    const getProjectTitle = inputProjectTitle[0].value
    const getTextQuery = inputTextQuery[0].value
    const getTweetCount = inputTweetCount[0].value
    const startDate = inputDate[3].value
    const endDate = inputDate[4].value
    // console.log(getProjectTitle)
    // console.log(getTextQuery)
    // console.log(getTweetCount)
    // console.log(startDate)
    // console.log(endDate)

    return {
      getProjectTitle,
      getTextQuery,
      getTweetCount,
      startDate,
      endDate,
    }
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="datascrapby shadow-lg p-3 mb-4 bg-body rounded">
          <CCardHeader className="cardHeader">
            <strong>Data Scrapping by Text Search</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CRow className="mb-3">
                <CFormLabel
                  htmlFor="inputProjectTitle"
                  className="labelForm col-sm-2 col-form-label"
                >
                  Project Title
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                    className="formInput inputProjectTitle"
                    type="text"
                    id="inputProjectTitle"
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputTextQuery" className="labelForm col-sm-2 col-form-label">
                  Text Query
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                    className="formInput inputTextQuery"
                    type="text"
                    id="inputTextQuery"
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel
                  htmlFor="inputTweetCount2"
                  className="labelForm col-sm-2 col-form-label"
                >
                  Tweet Count
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                    className="formInput inputTweetCount2"
                    type="text"
                    id="inputTweetCount2"
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="InputDateRange" className="labelForm col-sm-2 col-form-label">
                  Date Range
                </CFormLabel>
                <CCol sm={10}>
                  <CDateRangePicker className="formInput" locale="en-US" />
                </CCol>
              </CRow>
              <CButton className="btnSubmit" onClick={submitInput} type="submit">
                Submit
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
        <CCard className="spinnerContainer shadow-lg p-3 mb-4 bg-body rounded display-none">
          <CSpinner />
        </CCard>
        <CCard className="progress-card display-none shadow-lg p-3 bg-body rounded">
          <div className="progress-container display-none">
            <p className="loading-text">Mengambil Data...</p>
            <div className="progress mb-3">
              <p className="percent">0%</p>
              <div className="progress-bar" />
            </div>
          </div>
          <div className="progress-container display-none">
            <p className="loading-text">Mengolah data...</p>
            <div className="progress mb-3">
              <p className="percent">0%</p>
              <div className="progress-bar" animated />
            </div>
          </div>
          <div className="progress-container display-none">
            <p className="loading-text">Membuat data visualisasi...</p>
            <div className="progress mb-3">
              <p className="percent">0%</p>
              <div className="progress-bar" animated />
            </div>
          </div>
          <div className="done display-none">
            <p className="text-look">
              Data berhasil di scrapping <br />
              Untuk melihat hasil bisa klik Lihat
              <br />
              atau bisa melihatnya di page Data Visualization
            </p>
            <div>
              <CButton className="btnSubmit btnUlang" onClick={reset}>
                Ulang
              </CButton>
              <Link to="/datavisualization" relative>
                <CButton className="btnSubmit btnDone">Lihat</CButton>
              </Link>
            </div>
          </div>
        </CCard>
        <CAlert className="alert display-none" color="danger">
          Form tidak boleh kosong!
        </CAlert>
      </CCol>
    </CRow>
  )
}

export default ByTextSeacrh
