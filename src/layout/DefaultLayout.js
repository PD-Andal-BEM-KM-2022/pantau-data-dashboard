import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import './DefaultLayout.css'
import Watermark from 'src/assets/images/watermark.png'


const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3 pt-4">
          <div className='img'>
            <img className='watermark' src={Watermark}/>
          </div>
          <AppContent />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  )
}

export default DefaultLayout
