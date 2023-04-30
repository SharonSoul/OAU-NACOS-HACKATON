import React from 'react'

const Header = () => {
  return (
    <div className='text-black'>
        <nav className='p-4'>
            <div className='flex justify-between '>
                <h1 >Logo</h1>
                <ul className='flex justify-end gap-6  align-middle'>
                    <li className='font-thin text-2xl text-black border rounded-xl border-slate-800 bg-white p-2'>Login</li>
                    <li className='font-thin text-2xl text-black border rounded-xl border-slate-800 bg-white p-2'>Sign up</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header