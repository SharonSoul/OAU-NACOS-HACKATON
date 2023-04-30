import React from 'react'
import { images } from '..'
import { Link } from 'react-router-dom'
Link

const Body = () => {
  return (
    <div >
      <div className='mt-4 m-auto flex w-[90%] gap-1 md:gap-3 justify-center align-middle p-2 '>
        <img src={images.student} alt="" className='w-1/2 h-auto rounded-lg' />
        <div className='w-1/2  bg-slate-700 rounded-lg '>
          <p className='text-base font-thin text-white md:text-base p-3 block m-auto '> Our site provides a comprehensive range of tools and resources to support your academic pursuits, including a vast database of scholarly articles, access to academic conferences and symposiums, research funding opportunities, and collaboration tools. With our intuitive navigation and powerful search tools, you'll find the information you need quickly and easily. At [Website Name], our mission is to support and advance academic research across all disciplines. We believe that the pursuit of knowledge and discovery is essential for the betterment of society, and we are committed to providing researchers and scholars with the resources they need to make a difference in their fields. Our website offers a wide range of features and tools designed to streamline the research process and help you stay up-to-date with the latest developments in your field.</p>
        </div>
      </div>
      <div className='w-[90%] m-auto md:flex md:gap-2 mt-[50px] bg-slate-800 p-[30px]'>
        <div className='md:w-1/2'>
          <h1 className='text-2xl font-extrabold'>Features:</h1>
          <p className='text-base mb-8'>
            Our website offers a variety of features to support your academic research, including:
          </p>
          <ul className='grid grid-cols-2 grid-rows-2 gap-3'>
            <li className='bg-slate-700 text-white p-2 rounded-md'>A searchable database of scholarly articles, journals, and publications across a wide range of disciplines</li>
            <li className='bg-slate-700 text-white p-2 rounded-md'>
              Access to academic conferences and symposiums, with detailed information on upcoming events and opportunities to present your research
            </li>
            <li className='bg-slate-700 text-white p-2 rounded-md'>Research funding opportunities from government agencies, private foundations, and other sources</li>
            <li className='bg-slate-700 text-white p-2 rounded-md'>Reference management software to help you organize your research and create bibliographies</li>
          </ul>
        </div>
        <div className='md:w-1/2'>
          <h1 className='text-2xl font-extrabold sm:mt-3 md:mt-0'>Benefits:</h1>
          <p className='text-base mb-8'>Using [Website Name] for your academic research offers a range of benefits, including:</p>

          <ul className='grid grid-cols-2 grid-rows-2 gap-3'>
            <li className='bg-slate-700 text-white p-2 rounded-md'>Saving time by quickly and easily finding relevant articles and publications</li>
            <li className='bg-slate-700 text-white p-2 rounded-md'>
              Expanding your knowledge and understanding of your field by exploring new research and staying up-to-date with the latest developments
            </li>
            <li className='bg-slate-700 text-white p-2 rounded-md'>
              Finding collaborators to help you tackle complex research projects and share ideas
            </li>
          </ul>
        </div>

      </div>
      <div className='mt-7 bg-white text-slate-900 w-[90%] m-auto p-7 rounded-2xl shadow-2xl shadow-neutral-500'>
        <h1 className='text-2xl font-bold text-center'>Call to Action:</h1>
        <p className='text-2xl font-thin'>
          Ready to take your academic research to the next level? Sign up for a free trial of [Website Name] today and discover the many tools and resources we offer to support your work.</p>
          <Link to="/Research">Go to Research Center</Link>
      </div>
    </div>
  )
}

export default Body