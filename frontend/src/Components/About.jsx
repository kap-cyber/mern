import React from 'react';
import aboutImage from '../images&logo/About_us.jpg'; // Place image in src/assets/
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

function About() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 hover:text-blue-400 cursor-pointer">About Us</h1>

      <motion.div
        className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left: Text */}
        <div className="md:w-2/3">
            {/* Fetch the username from database */}
           <h1><strong>Hello, </strong><i>User</i></h1>
          <p className="text-gray-700 mb-4">
         
            <span className="hover:text-blue-400 cursor-pointer"><strong>DEAL fusion</strong></span>   is your local hub for discovering the best online deals from platforms like Amazon, Flipkart, and more.
          </p>
          <p className="text-gray-700 mb-4">
            Started by a group of friends with a passion for shopping smart, we curate handpicked, budget-friendly deals and share them with our exclusive WhatsApp community.
            We’ve completed <strong>150+ orders</strong> and grown to <strong>200+ members</strong> in just 2 months!
          </p>
          <p className="text-gray-700">
            We personally place orders and ensure safe delivery in our local area. Trust, savings, and simplicity — that’s what <span className="hover:text-blue-400 cursor-pointer"><strong>DEAL fusion</strong></span>  stands for.
          </p>
          {/* Social Links */}
          <div className="mt-6 flex space-x-6">
            <a
              href="https://chat.whatsapp.com/HydRjAMn8bS4Dl6ijSbDud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 text-3xl"
              aria-label="WhatsApp Group"
            >
              <FaWhatsapp />
            </a>
            

            <a
              href="https://www.instagram.com/official_deal.fusion?igsh=MTZ5M2oyZmV2NHU5MQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 text-3xl"
              aria-label="Instagram Channel"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        

        {/* Right: Image */}
        <motion.img
          src={aboutImage}
          alt="Deals Fusion"
          className="md:w-1/3 w-full rounded-lg shadow-lg object-cover"
          whileHover={{ scale: 1.05 }}
        />
        
      </motion.div>
      
    </div>
  );
}

export default About;
