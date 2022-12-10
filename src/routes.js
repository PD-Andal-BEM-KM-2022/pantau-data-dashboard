import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Cards = React.lazy(() => import('./views/menu/cards/Cards'))

const Byusername = React.lazy(() => import('./views/menu/byusername/Byusername'))
const ByTextSeacrh = React.lazy(() => import('./views/menu/bytextsearch/bytextsearch'))
// const DataVisualization = React.lazy(() => import('./views/pages/datavisualization/test'))
const DataVisualization = React.lazy(() => import('./views/pages/datavisualization/datavisualization'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/datascrapping', name: 'Data Scrapping', element: Cards, exact: true },
  { path: '/datasrcapping/by-username', name: 'By Username', element: Byusername },
  { path: '/datasrcapping/by-textsearch', name: 'By Text Search', element: ByTextSeacrh },
  { path: '/datavisualization', name: 'Data Visualization', element: DataVisualization },
  // { path: '/datavisualization/wadas', name: 'Wadas Data Visualization', element: Wadas },
]

export default routes
