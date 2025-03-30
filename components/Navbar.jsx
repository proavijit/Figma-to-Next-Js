'use client'; // Next.js কে এটি ক্লায়েন্ট কম্পোনেন্ট হিসেবে চিহ্নিত করতে বলছে।
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // <nav className="fixed top-0 left-0 w-full bg-transparent text-white py-4 px-6 z-50"> 
    <nav className="absolute top-0 left-0 w-full bg-transparent text-white py-4 px-6 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-[24px] font-bold text-[#B83B5E]">
          <a href="/">Logo</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-[#B83B5E] text-white text-base">Home</a>
          <a href="/about" className="hover:text-[#B83B5E] text-white text-base">About</a>
          <a href="/services" className="hover:text-[#B83B5E] text-white text-base">Services</a>
          <a href="/blog" className="hover:text-[#B83B5E] text-white text-base">Offers*</a>
          <a href="/contact" className="hover:text-[#B83B5E] text-white text-base">Contact</a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border-2 border-[#B83B5E] text-white rounded-lg hover:bg-[#B83B5E]">Register</button>
          <button className="px-4 py-2 bg-[#B83B5E] text-white rounded-lg hover:bg-[#A52C4D]">Sign In</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl">
            {isMobileMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 flex flex-col items-center space-y-4 py-4">
          <a href="/" className="text-white text-lg hover:text-gray-400">Home</a>
          <a href="/about" className="text-white text-lg hover:text-gray-400">About</a>
          <a href="/services" className="text-white text-lg hover:text-gray-400">Services</a>
          <a href="/blog" className="text-white text-lg hover:text-gray-400">Offers*</a>
          <a href="/contact" className="text-white text-lg hover:text-gray-400">Contact</a>
          <div className="flex flex-col items-center space-y-2 mt-4">
            <button className="px-4 py-2 bg-[#B83B5E] text-white rounded-lg hover:bg-[#A52C4D]">Register</button>
            <button className="px-4 py-2 border-2 border-[#B83B5E] text-white rounded-lg hover:bg-[#B83B5E]">Sign In</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
