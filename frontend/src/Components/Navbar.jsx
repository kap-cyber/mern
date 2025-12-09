// src/components/Navbar.js
import React from 'react';
import logo from '../images&logo/logo.jpg'; // Make sure the logo exists here
import { NavLink } from 'react-router-dom';
import { useLogin } from '../Context/contextLogin';

function Navbar() {
  const {isLoggedIn}=useLogin();
  return (
    <nav className="bg-gray-800 p-2 flex items-center justify-between">
      {/* Logo on the left */}
      <div className="flex items-center">
       <NavLink to="/"><img src={logo} alt="Dealfusion" className="h-11 w-14 mr-2 rounded-lg ml-6 cursor-pointer"/></NavLink>
        <span className="text-white text-xl font-bold hover:text-blue-400 text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent font-poppins  "><NavLink to="/">DEAL <i>fusion</i></NavLink></span>
      </div>

      {/* Navigation links on the right */}
      <ul className="flex w-0 space-x-10 text-white ">
        <li><NavLink to="/" className="hover:text-blue-400">Home</NavLink></li>
        <li><NavLink to="/deals" className="hover:text-blue-400">Deals</NavLink></li>
        <li><NavLink to="/about" className="hover:text-blue-400">About</NavLink></li>
        <li><NavLink to="/contact" className="hover:text-blue-400">Contact</NavLink></li>
        <li><NavLink to="/admin" className="hover:text-blue-400">Admin</NavLink></li>
      </ul>
      {/* Right: Auth Buttons */}
        <div className="space-x-4">
        
         
            {isLoggedIn ? ( <NavLink
            to="/logout"
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700 hover:text-white transition"
          >
            Logout
          </NavLink>
          ):
          (   
            <>
            <NavLink
            to="/login"
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 hover: transition">
            Login
            </NavLink>
             <NavLink
            to="/signup"
            className="bg-green-500 text-white  px-4 py-1 rounded hover:bg-green-700 hover: transition">
            SignUp
          </NavLink>
          </>
        
          )}
           
         
        </div>
    </nav>
  );
}

export default Navbar;
