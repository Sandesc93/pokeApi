import React from 'react'
import './styles/isloading.css'

const IsLoading = () => {
  return (
    <div className='loading'>
        <img  className='loading__img' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pikachu-1585657991.gif?crop=1xw:0.929368029739777xh;center,top&resize=640:*" alt="" />
        <h1 className='loading__pls'>Please wait...</h1>

    </div>
  )
}

export default IsLoading