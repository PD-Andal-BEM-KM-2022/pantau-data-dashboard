import React, { createElement, useState } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'
import { CChart, CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cilUserFemale,
} from '@coreui/icons'

import Barchart from '../chart/barchart'
import { render } from '@testing-library/react'
import { Chart } from 'chart.js'


const Dashboard = () => {

  const [data2, setData2] = useState(
    []
  )
  const [color,setColor] = useState('')



  function Delete(){
    const datainput = document.getElementsByClassName("dataInput")
    datainput.value = 0
    setData2([])
  }

  const bulan = ['January', 'February', 'March', 'April', 'May', 'June', 'Agustus']


  function Render(){
    
      return (
        <>
            <CChart style={{visibility: "visible"}}
                type="bar"
                data = {{
                    labels: bulan,
                    datasets: [
                        {
                        label: 'Data',
                        backgroundColor: color,
                        data: data2,
                        },
                    ],
                    }}
                labels="months"
            />
            <CRow className="mt-3">
                  <CFormLabel htmlFor="ColorInput" className="col-sm-2 col-form-label">Chart Color</CFormLabel>
                  <CCol sm={10} >
                    <CFormInput type="color" onMouseLeave={updateColor} id="ColorInput"  title="Choose your color" />
                  </CCol>
            </CRow>
            

        </>
    )

    
  }

  function updateColor(){
    const inputColor = document.getElementById("ColorInput").value
    setColor(inputColor)
  }

  function updateChart(){
      const input1 = document.getElementById("input1").value
      const input2 = document.getElementById("input2").value
      const input3 = document.getElementById("input3").value
      const input4 = document.getElementById("input4").value
      const input5 = document.getElementById("input5").value
      const input6 = document.getElementById("input6").value
      const input7 = document.getElementById("input7").value

      const data = []
      
      data.push(input1)
      data.push(input2)
      data.push(input3)
      data.push(input4)
      data.push(input5)
      data.push(input6)
      data.push(input7)

      setData2(data)
      
  }

  
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Testing Implementasi Bar Chart</strong>
        </CCardHeader>
        <CCardBody>
              <CForm>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="input1" className="col-sm-2 col-form-label">Data 1</CFormLabel>
                  <CCol sm={10} >
                    <CFormInput type="number" className='dataInput' onMouseLeave={updateChart} id="input1"/>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="input2" className="col-sm-2 col-form-label">Data 2</CFormLabel>
                  <CCol sm={10} >
                    <CFormInput type="number" className='dataInput' onMouseLeave={updateChart} id="input2"/>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="input3" className="col-sm-2 col-form-label">Data 3</CFormLabel>
                  <CCol sm={10} >
                    <CFormInput type="number" className='dataInput' onMouseLeave={updateChart} id="input3"/>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="input4" className="col-sm-2 col-form-label">Data 4</CFormLabel>
                  <CCol sm={10} >
                    <CFormInput type="number" className='dataInput' onMouseLeave={updateChart} id="input4"/>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="input5" className="col-sm-2 col-form-label">Data 5</CFormLabel>
                  <CCol sm={10} >
                    <CFormInput type="number" className='dataInput' onMouseLeave={updateChart} id="input5"/>
                  </CCol>
                </CRow> 
                <CRow className="mb-3">
                  <CFormLabel htmlFor="input6" className="col-sm-2 col-form-label">Data 6</CFormLabel>
                  <CCol sm={10} >
                    <CFormInput type="number" className='dataInput' onMouseLeave={updateChart} id="input6"/>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="input7" className="col-sm-2 col-form-label">Data 7</CFormLabel>
                  <CCol sm={10} >
                    <CFormInput type="number" className='dataInput' onMouseLeave={updateChart} id="input7"/>
                  </CCol>
                </CRow>       
                <CButton style={{marginLeft: '10px'}} type="submit" id='button2' onClick={Delete}>Delete Chart</CButton>
              </CForm>
              <Render />
          </CCardBody>
      </CCard>

      

      <CRow>
        <p>Franaka</p>
      </CRow>
    </>
  )
}

export default Dashboard
