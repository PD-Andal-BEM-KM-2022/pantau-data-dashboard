import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'
import LogoPanda from 'src/assets/images/landingpage/logo.png'
import BrandPanda from 'src/assets/images/landingpage/brand.png'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import './AppSidebar.css'
// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="navBrand d-none d-md-flex" to="/dashboard">
        {/* <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} /> */}
          <img src={LogoPanda} className='imgPanda' alt="Logo Panda" height={35} />
          <img src={BrandPanda} alt="Brand Panda" height={35}/>
      </CSidebarBrand>
      <CSidebarNav className='bgNav'>
        <SimpleBar>
          <AppSidebarNav className='navItem' items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
