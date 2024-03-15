import React from "react";
import logo from "../../assets/images/schoolassembly.jpg";

export default function Hero() {
  return (
    <>
      <div
        className="dark:bg-black min-h-screen"
        style={{
          backgroundColor: "#cdc1ff",
          backgroundImage: "linear-gradient(316deg, #cdc1ff 0%, #e5d9f2 74%)",
        }}
      >
        <nav
          style={{
            backgroundColor: "#cdc1ff",
            backgroundImage: "linear-gradient(316deg, #cdc1ff 0%, #e5d9f2 74%)",
          }}
          className="flex mb-4 justify-between items-center px-24 h-16 border-b dark:bg-black fixed w-full z-20 top-0 start-0 border-gray-200"
        >
          <div className="max-w-screen-xl flex items-center justify-evenly mx-auto p-4">
            <ul className="flex space-x-4 border-b">
              <li className="text-black dark:text-white font-semibold hover:text-blue-400 cursor-pointer">
                Home
              </li>
              <li className="text-black dark:text-white font-semibold hover:text-blue-400 cursor-pointer">
                About Us
              </li>
              <li className="text-black dark:text-white font-semibold hover:text-blue-400 cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex justify-between lg:flex-row md:flex-row mt-10 shadow-xl items-start  dark:bg-black rounded-lg overflow-hidden">
        
            <img
              src={logo}
              alt="students in assembly"
              className="rounded-xl shadow-black shadow-xl m-4 object-cover w-full"
            ></img>
        </div>
      </div>
    </>
  );
}
