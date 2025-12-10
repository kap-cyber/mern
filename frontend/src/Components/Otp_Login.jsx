import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useOtp } from "../Context/contextOtp";

function Otp_Login() {
    const {state,dispatch,handleSubmit}=useOtp();
    const handleChange=(e)=>{
         dispatch({
            type:"SET_EMAIL",
            field:e.target.name,
            value:e.target.value,
         })
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">
          Login with OTP
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Enter your email address to receive a one-time password
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={state.email}
              placeholder="Enter your email"
              required
              className="mt-1 w-full border border-gray-300 p-3 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-400
                         transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg 
                       hover:bg-blue-700 transition font-semibold tracking-wide cursor-pointer"
          >
            Send OTP
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Didn’t receive the code?
          <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            Resend OTP
          </span>
        </p>
      </motion.div>
    </div>
  );
}

export default Otp_Login;
