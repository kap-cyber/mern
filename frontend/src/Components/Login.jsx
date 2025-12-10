import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLogin } from '../Context/contextLogin';
import Img from '../images&logo/login_page.png';

function Login() {
  const {state,dispatch,handleSubmit}=useLogin();
  const handleChange=((e)=>{
       dispatch({
         type:'SET_LOGIN',
        field:e.target.name,
        value:e.target.value,
       });
  })
  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* Left Side Image with Slide-in Animation */}
      <motion.div
        className="md:w-1/2 m-13 hidden md:block"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={Img}
          alt="Login Visual"
          className="w-full h-auto rounded-xl shadow-xl cursor-pointer"
          
        />
      </motion.div>

      {/* Right Side Form with Fade & Up Animation */}
      <motion.div
        className="flex items-center justify-center bg-blue-50 md:w-1/2 w-full px-4 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      >
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <button
              type="submit"
              className=" cursor-pointer w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
            <div class="flex items-center my-4">
  <div class="flex-grow border-t border-gray-300"></div>
  <span class="mx-2 text-gray-500 text-sm font-medium">OR</span>
  <div class="flex-grow border-t border-gray-300"></div>
</div>
            <div class="flex justify-center mt-3">
              <NavLink to="/send-otp">
  <button class="cursor-pointer text-gray-500 border-solid border-blue-600 text-sm border-1 px-6 py-2 rounded-md  hover:bg-blue-500 hover:text-white hover:text-sm hover:rounded-none transition">
    Login with OTP
  </button>
  </NavLink>
</div>

            <p className="text-sm text-center mt-4">
              <NavLink to="/signup" className="text-blue-600 hover:underline">
                Forgot password?
              </NavLink>
            </p>
          </form>
          <p className="text-sm text-center mt-4">
            Don't have an account?
            <NavLink to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </NavLink>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;
