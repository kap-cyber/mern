import React,{useEffect, useReducer} from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRegister } from '../Context/contextRegister'; 
import Img from '../images&logo/Registration.png';

function Signup() {

  const {state,dispatch,handleSubmit}=useRegister();
  
  const handleChange=(e)=>{
      dispatch({
        type:'SET_FIELD',
        field:e.target.name,
        value:e.target.value,
      });
      
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* Left Side Form with Animation */}
      <motion.div
        className="flex items-center justify-center bg-blue-50 md:w-1/2 w-full px-4 py-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Create an Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullname"
                onChange={handleChange}
                value={state.fullname}
                required
                className="mt-1 w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={state.email}
                required
                className="mt-1 w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="number"
                name="phone"
                onChange={handleChange}
                value={state.phone}
                required
                className="mt-1 w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={state.password} 
                required
                className="mt-1 w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700">Re-enter</label>
              <input
                type="password"
                name="confirm_password"
                onChange={handleChange}
                value={state.confirm_password}
                required
                className="mt-1 w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Already have an account?
            <NavLink to="/login" className="text-blue-500 hover:underline">
              Login
            </NavLink>
          </p>
        </motion.div>
      </motion.div>

      {/* Right Side Image with Animation */}
      <motion.div
        className="md:w-1/2 m-10 hidden md:block "
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={Img} // 🔁 Replace with your actual image path
          alt="Sign Up Visual"
          className="h-full w-full m- object-cover shadow-lg rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-110"
        />
      </motion.div>
    </div>
  );
}

export default Signup;
