import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineClose } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { motion } from 'framer-motion';

const MobileMenu = ({ isOpen, onClose, handleNav }) => {
  return (
    <div
      className={`fixed left-0 top-0 w-full h-screen bg-black/70 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      {/* Menu Sidebar */}
      <div
        className={`fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 ${
          isOpen ? '' : 'left-[-100%]'
        }`}
      >
        <div>
          {/* Top Bar of Menu */}
          <div className='flex w-full items-center justify-between'>
            <Image src='/assets/navLogo2.png' alt='/' width={87} height={35} />
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
              <AiOutlineClose onClick={onClose} />
            </div>
          </div>

          {/* Headline */}
          <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:w-[90%] py-4'>
              Welcome to my personal portfolio!
            </p>
          </div>
        </div>

        {/* Menu List */}
        <div className='py-4 flex-col'>
          <ul className='uppercase'>
            <Link href='/#home'>
              <li onClick={handleLinkClick} className='py-4 text-sm'>
                Home
              </li>
            </Link>
            <Link href='/#about'>
              <li onClick={handleLinkClick} className='py-4 text-sm'>
                About
              </li>
            </Link>
            <Link href='/#skills'>
              <li onClick={handleLinkClick} className='py-4 text-sm'>
                Skills
              </li>
            </Link>
            <Link href='/#projects'>
              <li onClick={handleLinkClick} className='py-4 text-sm'>
                Projects
              </li>
            </Link>
            <Link href='/#contact'>
              <li onClick={handleLinkClick} className='py-4 text-sm'>
                Contact
              </li>
            </Link>
          </ul>

          {/* Social Icons Section */}
          <div className='pt-40 '>
            <p className='uppercase tracking-widest text-[#000000]'>
              Let&apos;s Connect!
            </p>

            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaLinkedin />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaGithub />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <AiOutlineMail />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
