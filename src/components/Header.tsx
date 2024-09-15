import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import config from '../public/images/config.svg';
import question from '../public/images/question.svg';
import bell from '../public/images/bell.svg';

interface HeaderProps {
  userName: string;
  userAvatar: string;
}

const Header: React.FC<HeaderProps> = ({ userName, userAvatar }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 pt-3 pb-[-0.25rem] flex justify-between items-center">

        <div className="flex items-center space-x-10">
          <div className="mr-8">
            <div className="font-inter text-black text-[20px] font-semibold leading-[24.2px] text-left">HarmonyHR</div>
          </div>

          <button
            className="md:hidden text-black text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className="hidden md:flex  items-center space-x-6">
            <a href="#" className="text-black hover:text-gray-800">Home</a>
            <a
              href="#"
              className="w-[96px] h-[54px] p-[16px_0_0_0] gap-[10px] rounded-t-[8px] bg-[#DAE6F2] font-inter text-[18px] font-normal  text-white text-center">
              My Info
            </a>
            <a href="#" className="text-black hover:text-gray-800">People</a>
            <a href="#" className="text-black hover:text-gray-800">Hiring</a>
            <a href="#" className="text-black hover:text-gray-800">Reports</a>
            <a href="#" className="text-black hover:text-gray-800">Files</a>
          </nav>
        </div>



        <div className="flex items-center w-1/3">
          <div className="relative w-full max-w-[300px] ml-14">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>



        <div className="flex items-center space-x-4">
          <Image
            src={config}
            alt='config'
            className="rounded-full cursor-pointer  w-5 h-9"
          />
          <Image
            src={question}
            alt='question'
            className="rounded-full cursor-pointer w-5 h-5"

          />
          <Image
            src={bell}
            alt='bell'
            className="rounded-full cursor-pointer w-5 h-5"

          />

          <Image
            src={userAvatar}
            alt={`${userName}'s avatar`}
            className="rounded-full"
            width={38}
            height={38}
          />
        </div>
      </div>


      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md border-t border-gray-200 mt-2 p-4">
          <a href="#" className="block text-black py-2 hover:text-gray-800">Home</a>
          <a href="#" className="block text-black py-2 hover:text-gray-800">My Info</a>
          <a href="#" className="block text-black py-2 hover:text-gray-800">People</a>
          <a href="#" className="block text-black py-2 hover:text-gray-800">Hiring</a>
          <a href="#" className="block text-black py-2 hover:text-gray-800">Reports</a>
          <a href="#" className="block text-black py-2 hover:text-gray-800">Files</a>
        </nav>
      )}
    </header >
  );
};

export default Header;
