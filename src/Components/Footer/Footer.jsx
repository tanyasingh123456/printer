import logo from '../../assets/icon .webp';
import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[white] text-black px-10 py-10 shadow-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="printer"
              className="w-10 h-10 object-contain"
            />
            <span className='font-semibold text-xl text-blue-400'>Pezo</span>
          </div>
          <p className="text-sm mb-2">
          Modernizing the printing experience for everyone.
        </p>

            <a href="© 2023 Pezo">
            © 2023 Pezo. All rights reserved.
            </a>
            <div className='flex gap-4 mt-4 '> 
            <FaInstagram className='hover:text-blue-400'/>
            <FaLinkedin className='hover:text-blue-400'/>
            <FaTwitter className='hover:text-blue-400'/>
            <FaFacebook className='hover:text-blue-400'/>
            </div>
        </div>
        

        <div>
          <h3 className="text-lg font-semibold mb-2">Product</h3>
          <ul className="space-y-1 text-sm ">
            <li className='hover:text-blue-400'>Features</li>
            <li className='hover:text-blue-400'>Pricing</li>
            <li className='hover:text-blue-400'>For Print Shops</li>
            <li className='hover:text-blue-400'>For Businesses</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li className='hover:text-blue-400'>About Us</li>
            <li className='hover:text-blue-400'>Careers</li>
            <li className='hover:text-blue-400'>Blog</li>
            <li className='hover:text-blue-400'>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <ul className="space-y-2 text-sm mb-4 ">
            <li className='hover:text-blue-400'>Help Center</li>
            <li className='hover:text-blue-400'>Privacy Policy</li>
            <li className='hover:text-blue-400'>Terms of Service</li>
            <li className='hover:text-blue-400'>FAQ</li>
          </ul>
        

          <div className='flex gap-4'>
          <h3 className="text-sm text-gray-400 mt-4  hover:text-blue-400">Privacy Policy</h3>
          <h3 className="text-sm text-gray-400 mt-4  hover:text-blue-400">Terms of Service</h3>
          <h3 className="text-sm text-gray-400 mt-4 hover:text-blue-400 ">Cookies</h3>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

