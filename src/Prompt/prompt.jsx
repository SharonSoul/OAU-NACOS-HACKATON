import React from 'react'
import { Link } from 'react-router-dom'
Link

const Research = () => {
	return (
		<div className='h-[100vh] bg-slate-700 '>
			<div className='bg-slate-900 text-white sticky top-0'>
				<ul className='flex justify-between p-4 '>
					<li><Link to="">Overview</Link></li>
					<li><Link to="">Citations</Link></li>
					<li><Link to="">Images</Link></li>
					<li><Link to="">Books</Link></li>
					<li><Link to="">Profile</Link></li>
				</ul>
			</div>
			<div className='h-[80vh]'></div>
			<div className='bg-slate-900  p-2 '>
				<div className='flex gap-1 mt-2 ml-2 '>
					<input type="number" name="" id="" className='rounded-l-md w-1/6' />
					<input type="text" name="UserInput" id="" className='w-4/6 ' />
					<button className='bg-black text-white p-2 rounded-md w-1/6'>Send</button>
				</div>
				<div className='text-white text-center '>
					<p>Scholarly Articles</p>
				</div>
			</div>
		</div>
	)
}

export default Research