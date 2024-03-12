import React from 'react';
import './Navbar.css'

export default function Navbar() {

  return (
    <nav className='bg-white dark:bg-gray-950 fixed w-full z-20 top-0 start-0 border-b border-gray-200'>
      <div className='max-w-screen-xl flex items-center justify-evenly mx-auto p-4'>
        <aside className='glowing-letter w-1/8 float-left text-black dark:text-white transition-shadow shadow-pink-400'>
          𝓐𝓑𝓝
        </aside>        
        <ul className='flex space-x-4'>
          <li className='text-black dark:text-white font-semibold hover:text-blue-400 cursor-pointer'>Home</li>
          <li className='text-black dark:text-white font-semibold hover:text-blue-400 cursor-pointer'>About Us</li>
          <li className='text-black dark:text-white font-semibold hover:text-blue-400 cursor-pointer'>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}
