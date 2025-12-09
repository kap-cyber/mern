import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      {/* Hero Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Unlock the <span className="text-blue-500">Best Deals</span> Online
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Save money by shopping from <strong className='text-blue-500 hover:text-blue-700'>DEAL fusion</strong> Products at Cheap price — all curated just for you!
        </motion.p>

        <motion.a
          href="#deals"
          className="inline-block bg-blue-500 hover:bg-blue-800 text-white font-semibold py-4 px-10 rounded-lg shadow-lg transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Deals
        </motion.a>

        {/* Subscribe Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Stay Updated With Latest Deals
          </h2>
          <p className="mb-8 text-gray-700 max-w-xl mx-auto">
            Subscribe to our newsletter and never miss out on great offers!
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow p-3 border border-white-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition "
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Home;
