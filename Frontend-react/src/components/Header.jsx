import React, { useContext } from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'

const Header = () => {

  const {isLoggedin,setisLoggedin} = useContext(AuthContext)

  const navigate = useNavigate();

  const HandleLogout = () =>{
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setisLoggedin(false)
    console.log('logged out')
    navigate('/')

  }

  return (
    <>
      <nav className='navbar container pt-3 pb-3 align-items-start'>
        {/* In React we dont use a tag as in html because it refreshes the page instead of we use Link (href="" in link is to="") Link doesnt refreshes the page */}
        <Link className='navbar-brand text-light' to="/">Stock Prediction Portal</Link>

        <div>
          {isLoggedin ? (
            <button className='btn btn-danger'onClick={HandleLogout}>Logout</button>  //logout button
          ):(
            <>
              <Button text='Login' class='btn-outline-info' url="/login" />
                &nbsp;
              <Button text='Register' class='btn-info' url="/register" />
            </>
          )}
          
        </div>
      </nav>
    </>
    
  )
}

export default Header