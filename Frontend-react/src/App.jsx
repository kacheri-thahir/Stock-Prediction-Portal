import { useState } from 'react'
import './assets/css/style.css' /* importing css */
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/main'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import AuthProvider, { AuthContext } from './components/AuthProvider'

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
          <Route path='register/' element={<Register/>} />  
          <Route path='login/' element={<Login/>} />  
        </Routes>
        {/* To display Footer every where we use Footer component here */}
      <Footer/>
      </BrowserRouter>  
      
    </AuthProvider>    
    </>
  )
}

export default App
