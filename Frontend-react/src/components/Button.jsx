import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <>
        {/* Button component */}
        <Link className={`btn ${props.class}`}  to={props.url} > {props.text} </Link>    
    </>
  )
}

export default Button