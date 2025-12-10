import React from "react";
import { motion } from "framer-motion";
import { useOtp } from "../Context/contextOtp";

function Otp_Verify() {
  const { state, dispatch, handleVerifyOtp } = useOtp();

  const handleChange = (e) => {
    dispatch({
      type: "SET_OTP",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">
          Verify OTP
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Enter the 6-digit code sent to your email
        </p>

        <form onSubmit={handleVerifyOtp} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              One-Time Password
            </label>
            <input
              type="text"
              name="otp"
              onChange={handleChange}
              value={state.otp}
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              required
              className="mt-1 w-full border border-gray-300 p-3 rounded-lg 
                         text-center tracking-widest text-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-400
                         transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg 
                       hover:bg-blue-700 transition font-semibold tracking-wide cursor-pointer"
          >
            Verify & Login
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

export default Otp_Verify;
