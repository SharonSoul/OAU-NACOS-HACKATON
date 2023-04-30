import React from 'react'
import Header from '../../../Landing Page/Header'


const HeroSetion = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center bg-[url('/src/assets/bg-Hero.jpg')]  h-[100vh] w-[100%]   ">
       <div className='backdrop-brightness-50 bg-dark-grey/60 h-[100vh]'>
       <Header/>
        <div className='block m-auto mt-[100px] w-[80%] '>
          <h1 className=' font-extrabold  p-7 text-4xl'>Welcome to <br/><span className='text-6xl font-extrabold text-sky-500'>BRAINWAVE</span></h1>
            <p className=' font-thin text-4xl  p-7 w-1/2 text-white' >
            The premier academic research website for scholars and researchers.
            </p>
        </div>
       </div>
    </div>
  )
}

export default HeroSetion