/* eslint-disable react/prop-types */
import ReactWordcloud from 'react-wordcloud';
import React from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
} from '@coreui/react'

import Helmet from 'react-helmet';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import dataWadasWordCloud from 'src/assets/json/wadas/wadas_WordCloud.json'

const words = dataWadasWordCloud


const WodrCloud = () => {

  return (
    <>
      {/* <div className='shadow-lg p-3 mb-5 bg-body rounded'>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Testing Implementasi Line Chart</strong>
          </CCardHeader>
              <CCardBody >  */}
              <ReactWordcloud words={words} />

               {/* </CCardBody>
        </CCard>
      </div>

      

      <CRow>

      </CRow> */}
    </>
  )
}

export default WodrCloud
