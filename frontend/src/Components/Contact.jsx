import React from 'react';
import Img from '../../src/images&logo/Contact_photo.png'; // Replace with your image path
import { motion } from 'framer-motion';
function Contact() {
  return (
    <>
    <section id="contact" className="bg-white py-16 px-6 md:px-20">
      <div className="text-center">
       <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 hover:text-blue-400 inline-block cursor-pointer">
        Contact Us
      </h2>
      </div>
      
     
       <motion.div
              className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center gap-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/*Left Image Section */}
        <div className="w-full md:w-1/2 ">
          <img
            src={Img}
            alt="Contact"
            className="w-full h-auto rounded-xl shadow-xl float-animation cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-110"
            whileHover={{ scale: 1.05 }}
          />
        </div>

        {/* Right Form Section */}
        <form
          className="w-full md:w-1/2 bg-gray-50 p-8 rounded-xl shadow-lg space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Your message has been sent!');
          }}
        >
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="10-digit phone number"
              pattern="[0-9]{10}"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
        </motion.div>
    </section>
    <div className="w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Deals Fusion Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110917.97163499627!2d76.90602991984956!3d29.68536884681181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e701851e03e97%3A0xf84aa8b9e1cc7607!2sKarnal%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1747405411554!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}

export default Contact;
