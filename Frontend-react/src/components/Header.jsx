import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className='navbar container pt-3 pb-3 align-items-start'>
        {/* In React we dont use a tag as in html because it refreshes the page instead of we use Link (href="" in link is to="") Link doesnt refreshes the page */}
        <Link className='navbar-brand text-light' to="/">Stock Prediction Portal</Link>

        <div>
          <Button text='Login' class='btn-outline-info' url="/login" />
            &nbsp;
          <Button text='Register' class='btn-info' url="/register" />
        </div>
      </nav>
    </>
    
  )
}

export default Header