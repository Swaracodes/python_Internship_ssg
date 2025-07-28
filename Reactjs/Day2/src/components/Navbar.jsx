import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='flex justify-between bg-purple-100 items-center p-5 shadow-md'>
      
      {/* Logo Section */}
      <div className='text-xl font-bold'>
        <img src="./logo.png" alt="logo" className="h-8" />      </div>

      {/* Navigation Links */}
      <div className='flex gap-6 text-lg'>
        <Link to="/" className="hover:text-indigo-800 shadow-lg px-2 py-1 rounded">Home</Link>
        <Link to="/aboutus" className="hover:text-indigo-800 shadow-lg px-2 py-1 rounded">About Us</Link>
        <Link to="/projects" className="hover:text-indigo-800 shadow-lg px-2 py-1 rounded">Projects</Link>
        <Link to="/contactus" className="hover:text-indigo-800 shadow-lg px-2 py-1 rounded">Contact Us</Link>
      </div>
    </div>
  );
}

export default Navbar