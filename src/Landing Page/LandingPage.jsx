import React from 'react'
import HeroSetion from '../Components/LandingComp/Hero/heroSetion'
import Body from './Body'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div className='bg-slate-900'>
        <HeroSetion/>
        <Body/>
        <Footer/>
    </div>
  )
}

export default LandingPage