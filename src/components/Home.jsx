import React from 'react'
import logo from '../assets/images/schoolassembly.jpg'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
    <section
      className="flex flex-col items-center justify-center px-6 py-8 text-center"
    >
      <h1 className="text-3xl text-white dark:text-gray-200 mb-4 font-extrabold">
        Arch-Bishop Ndingi Secondary School
      </h1>
      <p className="text-white dark:text-gray-400 font-bold">
        For the formation of a whole person
      </p>
    </section>
  </div>
)  

}
