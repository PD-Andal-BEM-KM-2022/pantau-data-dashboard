import React from 'react'
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
} from '@coreui/react'

import '../menu.css'


const Byusername = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="datascrapby shadow-lg p-3 mb-5 bg-body rounded">
          <CCardHeader className='cardHeader'>
            <strong>Data Scrapping by Username</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputTweetCount" className="labelForm col-sm-2 col-form-label">Tweet Count</CFormLabel>
                <CCol sm={10} >
                <CFormInput className='formInput' type="text" id="inputTweetCount"/>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputUsername" className="labelForm col-sm-2 col-form-label">Username</CFormLabel>
                <CCol sm={10} >
                  <CFormInput className='formInput' type="text" id="inputUsername"/>
                </CCol>
              </CRow>    
              <CButton className='btnSubmit' type="submit">Submit</CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Byusername
