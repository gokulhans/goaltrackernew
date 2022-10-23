import React from 'react'
import { Link } from 'react-router-dom';

function Confirm() {
  return (
    <div>
      <div className='flex justify-center h-96 items-center'>
        <div className='flex flex-col justify-center items-center mt-32'>
          <img src="/confirm-icon.png" alt="" className='h-16 w-16' />
          <h1 className=' text-green-900 mt-5 font-bold text-2xl'>Order Confirmed</h1>
          <Link to={'/'} className='font-semibold text-blue-500'>Go to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Confirm