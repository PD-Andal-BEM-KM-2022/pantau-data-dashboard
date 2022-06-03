import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import styled from 'styled-components'

// routes config
import routes from '../routes'
import LandingPage from 'src/views/pages/landingpage/Landingpage'

const AppContent = () => {
  return (
    <Container>
      <div>
          <CContainer lg>
          <Suspense fallback={<CSpinner color="primary" />}>
            <Routes>
              {routes.map((route, idx) => {
                return (
                  route.element && (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      element={<route.element />}
                    />
                  )
                )
              })}
              <Route path="/"  element={<LandingPage />} />
            </Routes>
          </Suspense>
        </CContainer>
      </div>
    </Container>
  )
}

export default React.memo(AppContent)


const Container = styled.div`
height: 100%;
// display: flex;
// justify-content: center;
// align-items: center;

.container-lg{
  height: 85vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  margin-top: auto;
  margin-bottom: auto;

  .row{
    height: 100%;


    .col-12{
      margin-top: auto;
      margin-bottom: auto;
    }
  }
}
`