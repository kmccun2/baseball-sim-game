import React from 'react'

const Errors = ({ touched, message }) => {
  if (message) {
    return <div className='form-message invalid'>{message}</div>
  } else {
    return <div className='hidden'></div>
  }
}

export default Errors
