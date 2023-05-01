import React from 'react'
import { Link } from 'react-router-dom'
Link

const Research = () => {
	return (
		<div className='h-[100vh] bg-slate-700 pt-4'>
			<div className='bg-slate-900 w-[70%] m-auto rounded-md p-3'>
				<div className=' text-white    '>
					<ul className='flex justify-between p-4'>
						<li className=''><Link to="">Overview</Link></li>
						<li><Link to="">Citations</Link></li>
						<li><Link to="">Images</Link></li>
						<li><Link to="">Books</Link></li>
						<li><Link to="">Profile</Link></li>
					</ul>
				</div>
				<div className=''>
					<div className='flex gap-1 mt-2 ml-2 justify-center'>
						<input type="number" name="" id="" className='rounded-l-md w-[110px] pl-3 text-base' placeholder='Word Count' />
						<input type="text" name="UserInput" id="" className='w-[300px] text-base pl-3' placeholder='Enter Prompt' />
						<button className='bg-yellow-100 text-slate-900 font-bold p-2  w-[100px]'>Send</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Research