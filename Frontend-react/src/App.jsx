import { useState } from 'react'
import './assets/css/style.css' /* importing css */
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/dashboard/Dashboard'
import AuthProvider, { AuthContext } from './components/AuthProvider'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

function App() {
  

  return (
    <>
    <AuthProvider>

      <BrowserRouter>
      {/* To display Header every where we use Header component here */}
      <Header/>
        <Routes>
          {/* Main path */}
          <Route path='/' element={<Main/>} />
          {/* Register path */}
          <Route path='register/' element={ <PublicRoute><Register/></PublicRoute> } />  
          <Route path='login/' element={ <PublicRoute><Login/></PublicRoute> } />  
          <Route path='dashboard/' element={ <PrivateRoute><Dashboard /></PrivateRoute> } />  
        </Routes>
        {/* To display Footer every where we use Footer component here */}
      <Footer/>
      </BrowserRouter>  
      
    </AuthProvider>    
    </>
  )
}

export default App
