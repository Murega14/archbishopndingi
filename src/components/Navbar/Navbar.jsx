import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-gray-700 py-4 w-full z-20 top-0 start-0 border-b'>
        <ul className='flex justify-between p-4 mt-4 r'>
            <li className='inline text-black mr-4 cursor-pointer'>Home</li>
            <li className='inline text-black mr-4 cursor-pointer'>About Us</li>
            <li className='inline text-black mr-4 cursor-pointer'>Contact Us</li>
        </ul>
    </nav>
  )
}

