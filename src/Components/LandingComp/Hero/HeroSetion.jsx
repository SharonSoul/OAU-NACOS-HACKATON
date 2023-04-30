import React from 'react'
import Header from '../../../Landing Page/Header'


const HeroSetion = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center bg-[url('/src/assets/bg-Hero.jpg')]  h-[100vh] w-[100%]  ">
        <Header/>
        <div className='block m-auto mt-[100px] w-[80%]  backdrop-blur-3xl'>
          <h1 className='text-white font-extrabold bg-slate-900 text-2xl p-7'>Welcome to <span >Testing</span> , the premier academic research website for scholars and researchers.</h1>
            <p className=' font-thin text-xl text-white p-[5%]' >
             Our site provides a comprehensive range of tools and resources to support your academic pursuits, including a vast database of scholarly articles, access to academic conferences and symposiums, research funding opportunities, and collaboration tools. With our intuitive navigation and powerful search tools, you'll find the information you need quickly and easily.
            </p>
        </div>
    </div>
  )
}

export default HeroSetion