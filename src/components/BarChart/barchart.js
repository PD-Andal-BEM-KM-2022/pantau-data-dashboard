/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react'
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
import { DataContext } from 'src/Context/DataContext';



const BarChart = () => {

  const data = JSON.parse(window.localStorage.getItem('data'))


    const data_emotions = data.emotions

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

  



  const labels = ['Happy', 'Angry', 'Sadness', 'Love', 'Fear'];

  const datas = {
      labels,
      datasets: [
        {
          label: 'Dataset',
          data: data_emotions,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
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
                  data={datas}
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
