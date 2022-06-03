import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

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

import 'src/views/menu/menu.css'

const DataVisualization = () =>{

    const [datavis, setDataVis] = useState([])

    axios.get(`http://localhost:3000/datavis`)
      .then(res => {
        const datavis = res.data
        setDataVis(datavis)
        })

    
        
    return(
        <Container>
            <div>
            <CRow>
                <CCol xs={12}>
                    <CCard className="datascrapby shadow-lg p-3 mb-5 bg-body rounded">
                        <CCardHeader className='cardHeader'>
                            <strong>Data Visualization</strong>
                        </CCardHeader>
                        <CCardBody>
                            <table className="customTable">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Kata Kunci</th>
                                        <th>Tanggal Pencarian</th>
                                        <th>Tanggal Dibuat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        datavis.map((item, index)=>{
                                            return(
                                                <tr key={index}>
                                                    <td><a href={`./datavisualization/${item.key}`}>{item.projectTitle}</a></td>
                                                    <td><a href={`./datavisualization/${item.key}`}>{item.key}</a></td>
                                                    <td><a href={`./datavisualization/${item.key}`}>{item.dateSearch}</a></td>
                                                    <td><a href={`./datavisualization/${item.key}`}>{item.dateCreate}</a></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
            </div>
        </Container>
    )
}

export default DataVisualization

const Container = styled.div`

.customTable{
    width: 100%;
    color: #10294C;
    background-color: #B8E9F7;
    border: 3px solid #B8E9F7;
    text-align:center;
}

thead, tbody{
    height: 50px;
}

tbody tr{
    background-color: #FFFFFF;
    transition: 0.2s ease-in-out;
    height: 100%;
}
tbody tr:hover{
    transform: scale(1.02);
    -webkit-box-shadow: 8px 8px 10px -7px rgba(16, 41, 76, 1);
    -moz-box-shadow: 8px 8px 10px -7px rgba(16, 41, 76, 1);
    box-shadow: 8px 8px 10px -7px rgba(16, 41, 76, 1);
}

// tbody tr td{
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

tbody tr a{
    text-decoration: none;
    color: #10294C;
    width: 100%;
    display: inline-block;
    padding: 10px 0;
    border-bottom: 3px solid #f7f7f7;

}
`
