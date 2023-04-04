import React from 'react';
import {FiAlertTriangle} from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className='my-5'>
        <h1 className='text-5xl text-red-700'><FiAlertTriangle /></h1>
        <h1 className='text-center text-5xl text-red-400'>404 Error....!</h1>
        <h1 className='text-center text-3xl text-pink-300'>Page Not Found</h1>
    </div>
  )
}

export default NotFound