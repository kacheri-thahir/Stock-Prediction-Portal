import React from 'react'

const Button = (props) => {
  return (
    <>
        {/* Button component */}
        <a className={`btn ${props.class}`}  href=""> {props.text} </a>    
    </>
  )
}

export default Button