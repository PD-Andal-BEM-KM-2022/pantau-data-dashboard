import React, { Component, Suspense, createContext, useReducer } from 'react'
import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom'
// import './scss/style.scss'
import '@coreui/coreui/dist/css/coreui.css'
import 'src/scss/style.css'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const LandingPage = React.lazy(() => import('./views/pages/landingpage/Landingpage'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))


// export const AuthContext = createContext()

// const initialState = {
//   isAuthenticated: false,
//   user: null,
//   token: null
// }

// const reducer = {state, action} => {
//   switch (action.type) {
//     case "LOGIN":
//       localStorage.setItem("user", JSON.stringify(action.payload.user))
//       localStorage.setItem("token", JSON.stringify(action.payload.token))
//     return {
//       ...state,
//       isAuthenticated: true,
//       user: action.payload.user,
//       token: action.payload.token
//     }

//     case "LOGOUT":
//       localStorage.clear()
//       return{
//         ...state,
//         isAuthenticated: true,
//         user: action.payload.user
//       }
        
//   }
// }


class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path='/' name="Landing Page" element={<LandingPage />} />
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </Router>
    )
  }
}

export default App
