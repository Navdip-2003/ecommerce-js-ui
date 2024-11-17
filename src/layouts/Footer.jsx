import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black py-10 px-5 text-gray-200">
      {/* Footer Links */}
      <div className="flex flex-wrap justify-between mb-8 space-y-8 md:space-y-0">
        {/* Quick Shop */}
        <div className="w-full md:w-1/4 px-5">
          <h4 className="font-bold mb-4">Quick Shop</h4>
          <ul>
            <li className="mb-2"><Link to="/women" className="hover:text-gray-500">Women</Link></li>
            <li className="mb-2"><Link to="/men" className="hover:text-gray-500">Men</Link></li>
            <li className="mb-2"><Link to="/kids" className="hover:text-gray-500">Kids</Link></li>
            <li className="mb-2"><Link to="/sportswear" className="hover:text-gray-500">Sportswear</Link></li>
            <li><Link to="/sale" className="hover:text-gray-500">Sale</Link></li>
          </ul>
        </div>

        {/* Informations */}
        <div className="w-full md:w-1/4 px-5">
          <h4 className="font-bold mb-4">Informations</h4>
          <ul>
            <li className="mb-2"><Link to="/about-us" className="hover:text-gray-500">About us</Link></li>
            <li className="mb-2"><Link to="/privacy-policy" className="hover:text-gray-500">Privacy policy</Link></li>
            <li className="mb-2"><Link to="/terms" className="hover:text-gray-500">Terms & conditions</Link></li>
            <li><Link to="/profile" className="hover:text-gray-500">My Account</Link></li>
          </ul>
        </div>

        {/* Customer Services */}
        <div className="w-full md:w-1/4 px-5">
          <h4 className="font-bold mb-4">Customer Services</h4>
          <ul>
            <li className="mb-2"><Link to="/faq" className="hover:text-gray-500">FAQ's</Link></li>
            <li className="mb-2"><Link to="/contact" className="hover:text-gray-500">Contact Us</Link></li>
            <li className="mb-2"><Link to="/orders" className="hover:text-gray-500">Orders and Returns</Link></li>
            <li><Link to="/contact" className="hover:text-gray-500">Support Center</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="w-full md:w-1/4 px-5">
          <h4 className="font-bold mb-4">Contact Us</h4>
          <ul className="space-y-2">
            <li><Link to="https://maps.app.goo.gl/wfrAuCEawHQe66gh6" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-500"><FaMapMarkerAlt className="mr-2"/>D-64 Greenwood, Sola Bridge, Ahmedabad</Link></li>
            <li><Link to="tel:9023150639" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-500"><FaPhoneAlt className="mr-2"/>+91 9023150639</Link></li>
            <li><Link to="mailto:shivaycloths@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-500"><FaEnvelope className="mr-2"/>shivaycloths@gmail.com</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-400 pt-5 text-center">
        <div className="flex justify-center mb-4 space-x-4">
          <FaFacebookF className="text-xl hover:text-gray-500 cursor-pointer" />
          <FaTwitter className="text-xl hover:text-gray-500 cursor-pointer" />
          <FaInstagram className="text-xl hover:text-gray-500 cursor-pointer" />
        </div>
        <p className="text-sm">Copyright © 2024 Shivay Cloths. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
