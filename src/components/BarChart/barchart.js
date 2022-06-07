/* eslint-disable react/prop-types */
import React from 'react'
import { Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import Helmet from 'react-helmet';


const BarChart = () => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
    
    //  const json = props.jsonData
    
    //   const labels = [];
    //   const datas = [];
    
    
    //   for(var i = 0; i < json.length; i++){
    //     labels.unshift(json[i].date)
    //     datas.unshift(json[i].value)
    //   }
    
    
    
    //   const data = {
    //     labels,
    //     datasets: [
    //       {
    //         label: 'Value',
    //         data: datas,
    //         borderColor: 'rgb(255, 99, 132)',
    //         backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //       },
    //     ],
    //   };

    const labels = ['Angry', 'Happy', 'Sadness', 'Love', 'Fear'];

    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset',
            data: [500,100,400,150,300],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      }; 
    
    //   const options = {
    //     responsive: true,
    //     scales: {
    //       x: {
    //         display: true,
    //         title: {
    //           display: true,
    //           text: 'Date'
    //         },
    //       },
    //       y: {
    //         display: true,
    //         title: {
    //           display: true,
    //           text: 'Value'
    //         },
    //       },
    //     },
    //     plugins: {
    //       legend: {
    //         position: 'top',
    //       },
    //       title: {
    //         display: true,
    //         text: 'Chart.js Line Chart',
    //       },
    //     },
    //   };

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      };



  

  
  return (
    <>
      {/* <div className='shadow-lg p-3 mb-5 bg-body rounded'>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Testing Implementasi Line Chart</strong>
          </CCardHeader>
              <CCardBody > */}
                <Bar
                  options={options}
                  data={data}
                />
              {/* </CCardBody>
        </CCard>
      </div>

      

      <CRow>

      </CRow> */}
    </>
  )
}

export default BarChart
