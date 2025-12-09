import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold">DEAL fusion</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
