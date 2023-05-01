import React from 'react'
import { Link } from 'react-router-dom'
Link

const Research = () => {
	return (
		<div className='h-[100vh] bg-slate-700 pt-4'>
			<div className='bg-slate-900 w-[90%] md:w-[70%] m-auto rounded-md md:p-3'>
				<div className=' text-white   text-sm md:text-base '>
					<ul className='flex justify-between p-2 md:p-4'>
						<li className=''><Link to="">Overview</Link></li>
						<li><Link to="">Citations</Link></li>
						<li><Link to="">Images</Link></li>
						<li><Link to="">Books</Link></li>
						<li><Link to="">Profile</Link></li>
					</ul>
				</div>
				<div className=''>
					<div className=' m-5 pb-3 flex flex-col align-middle md:flex-row md:gap-1 md:mt-2 md:ml-2 justify-center'>
						<input type="number" name="" id="" className='rounded-l-md  md:w-[110px] pl-3 text-sm md:text-base mb-3 md:mb-0 p-3 ' placeholder='Word Count' />
						<input type="text" name="UserInput" id="" className='md:w-[300px] text-base pl-3 mb-3 md:mb-0 p-3' placeholder='Enter Prompt' />
						<button className='bg-yellow-100 text-slate-900 font-bold p-2  w-[100px] block m-auto'>Send</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Research