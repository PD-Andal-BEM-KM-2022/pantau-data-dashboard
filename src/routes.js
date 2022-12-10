import React from 'react'

const Dashboard = React.lazy(()=>lazyRetry(() => import('./views/dashboard/Dashboard')))
const Cards = React.lazy(() =>lazyRetry(()=> import('./views/menu/cards/Cards')))

const Byusername = React.lazy(() =>lazyRetry(()=> import('./views/menu/byusername/Byusername')))
const ByTextSeacrh = React.lazy(()=>lazyRetry(() => import('./views/menu/bytextsearch/bytextsearch')))
// const DataVisualization = React.lazy(() => import('./views/pages/datavisualization/test'))
const DataVisualization = React.lazy(()=>lazyRetry(() => import('./views/pages/datavisualization/datavisualization')))


// a function to retry loading a chunk to avoid chunk load error for out of date code
const lazyRetry = function(componentImport) {
  return new Promise((resolve, reject) => {
      // check if the window has already been refreshed
      const hasRefreshed = JSON.parse(
          window.sessionStorage.getItem('retry-lazy-refreshed') || 'false'
      );
      // try to import the component
      componentImport().then((component) => {
          window.sessionStorage.setItem('retry-lazy-refreshed', 'false'); // success so reset the refresh
          resolve(component);
      }).catch((error) => {
          if (!hasRefreshed) { // not been refreshed yet
              window.sessionStorage.setItem('retry-lazy-refreshed', 'true'); // we are now going to refresh
              return window.location.reload(); // refresh the page
          }
          reject(error); // Default error behaviour as already tried refresh
      });
  });
};


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
