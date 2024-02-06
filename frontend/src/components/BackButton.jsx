import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

function BackButton({destination='/'}) {
  return (
    <div className='flex'>
        <Link
         to={destination}
         className='bg-sky-500 text-white py-1 rounded-lg w-fit px-4'>
        <BsArrowLeft />
        </Link>
    </div>
  )
}

export default BackButton