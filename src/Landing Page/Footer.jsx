import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-white bg-black mt-6'>
      <div className='flex justify-center gap-14 p-4'>
        <h1> Links:</h1>
        <ul>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
          <li>
            <Link>Privacy Policy</Link>
          </li>
          <li>
            <Link>Terms of Use</Link>
          </li>
        </ul>
      </div>
      <p className='text-center'>
      Copyright © [Year] [Website Name]. All rights reserved.
      </p>
    </div>
  )
}

export default Footer