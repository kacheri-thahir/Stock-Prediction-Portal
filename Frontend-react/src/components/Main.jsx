import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
      <div className='container'>
          <div className='p-5 text-center interface-bg rounded'>
            <h3 className='text-light'>Stock Prediction App</h3>
            <p className='text-light'>This stock prediction app analyzes historical market data using statistical methods and machine learning models to forecast potential price trends. It helps users make informed investment decisions by providing data-driven insights, trend visualizations, and risk-aware predictions in a simple, user-friendly interface.</p>
            <Button text='Explore Now' class='btn-outline-info' url="/dashboard" />
          </div>

      </div>
    </>
  )
}

export default Main