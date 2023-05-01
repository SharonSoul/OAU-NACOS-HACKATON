import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='text-black'>
        <nav className='p-4'>
            <div className='flex justify-between '>
                <h1 >Logo</h1>
                <ul className='flex justify-end gap-6  align-middle'>
                    <li className='font-sans font-bold md:text-2xl text-white'><Link to="/Research">Login</Link></li>
                    <li className='font-sans font-bold md:text-2xl text-yellow-100'>Sign up</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header