import React from 'react';
import './Navbar.css'

export default function Navbar() {

  return (
    <nav style={{
      backgroundColor: "#cdc1ff",
      backgroundImage: "linear-gradient(316deg, #cdc1ff 0%, #e5d9f2 74%)"
    }} 
    className= 'flex justify-between items-center px-24 h-16 border-b dark:bg-black fixed w-full z-20 top-0 start-0 border-gray-200'>
      <div className='max-w-screen-xl flex items-center justify-evenly mx-auto p-4'>
        <aside className='glowing-letter w-1/8 float-left text-black dark:text-white transition-shadow shadow-pink-400'>
          𝓐𝓑𝓝
        </aside>        
        <ul className='flex space-x-4 border-b'>
          <li className='text-black dark:text-white font-semibold hover:text-blue-400 cursor-pointer'>Home</li>
          <li className='text-black dark:text-white font-semibold hover:text-blue-400 cursor-pointer'>About Us</li>
          <li className='text-black dark:text-white font-semibold hover:text-blue-400 cursor-pointer'>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}
