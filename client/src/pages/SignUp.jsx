import React from 'react'
import { Link } from 'react-router-dom';
export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
         <h1 className='text-center text-3xl font-semibold my-7 text-blue-700'>SignUp</h1>
         <form className='flex flex-col gap-4'>
            <input 
            className='border p-3 rounded-lg '
            type="text" 
            placeholder="username" id="username" />
            <input 
            className='border p-3 rounded-lg '
            type="text" 
            placeholder="email" id="email" />
            <input 
            className='border p-3 rounded-lg '
            type="text" 
            placeholder="password" id="password" />
            <button className='bg-red-500 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>Sign-Up</button>
         </form>
         <div className='flex gap-2 mt-4'>
          <p className=''>Have an account?
          <Link to='/sign-in'>
          <span className='text-blue-700'>Sign in</span>
          </Link>
          </p>
         </div>
    </div>
  )
}
