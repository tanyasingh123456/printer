import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/icon .webp';
import profile from '../../assets/girls.jpeg';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white p-5 flex justify-between items-center z-[999] shadow-md">
      <div className="text-black font-bold text-2xl flex items-center">
      <Link to="/print"className="flex items-center gap-2 decoration-transparent">
          <img src={icon} alt="printer-icon" className="w-10 h-10" />
          <span>Pezo</span> 
        </Link>
      </div>
      <ul className="flex list-none m-0 p-0">
        <li className="ml-350">
          <Link
            to="/print"
            className="text-black hover:text-blue-400 transition-colors text-4"
          >
            Print
          </Link>
        </li>
        <li className="ml-20 mr-15">
          <Link
            to="/about"
            className="text-black hover:text-blue-500 transition-colors"
          >
            About
          </Link>
        </li>
      </ul>
      <div>
        <img 
          src={profile} 
          alt="profile" 
          className="w-13 h-13 rounded-full object-cover cursor-pointer border-2 border-gray-300 hover:border-blue-400 transition"
        />
      </div>
    </nav>
  );
};

export default Navbar;





