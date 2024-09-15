'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navLinks } from '@/utils/data';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(true);
  const [activeSection, setActiveSection] = useState('Home');

  //Menu Toggler
  const handleNav = () => {
    setNavOpen(!navOpen);
    setMenuIcon(!menuIcon);
  };

  // Function to add styles to navigation links
  const addStylesToNavLinks = (link) => {
    const isActive = link.name === activeSection;

    return (
      <motion.li
        className='h-3/4 flex items-center justify-center relative'
        key={link.name}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Link
          className={`flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300 ${
            isActive ? 'text-gray-950 dark:text-gray-50' : ''
          }`}
          href={link.hash}
          onClick={() => setActiveSection(link.name)}
        >
          {link.name}

          {/*Text background sliding transition animation if Active*/}
          {isActive && (
            <motion.span
              className='bg-gray-300 rounded-full absolute inset-0 -z-10 dark:bg-gray-800'
              layoutId='activeSection'
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 30,
              }}
            ></motion.span>
          )}
        </Link>
      </motion.li>
    );
  };

  return (
    <>
      <header className='z-[999] relative'>
        <div>
          <motion.div
            className='fixed top-6 left-1/2 h-[3.25rem] border border-white border-opacity-40 bg-gray-100 bg-opacity-80 shadow-lg  shadow-gray-400 backdrop-blur-[0.5rem] w-[31rem] rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 hidden md:flex'
            initial={{ y: -100, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
          ></motion.div>
          <nav className='flex fixed left-1/2 h-12 -translate-x-1/2 py-0 top-[1.7rem]'>
            <ul className='w-[22rem] items-center justify-center gap-y-1 text-md font-semibold text-gray-500 flex-nowrap gap-5 hidden md:flex'>
              {navLinks.map(addStylesToNavLinks)}
            </ul>
          </nav>
        </div>

        <div
          onClick={handleNav}
          className='md:hidden fixed top-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 '
        >
          {menuIcon ? (
            <AiOutlineMenu size={20} />
          ) : (
            <AiOutlineClose size={20} />
          )}
        </div>
      </header>

      {/* Menu Sidebar */}
      <div
        className={
          navOpen
            ? ' fixed left-0 top-0 h-screen w-full bg-[#ecf0f3] dark:bg-gray-900 p-10 ease-in duration-500 z-[998]'
            : 'fixed  left-[-150%] ease-out duration-500'
        }
      >
        <div>
          <div className='flex w-full items-center justify-between'></div>
          <div className='border-b border-gray-300 mt-[100px]'>
            <p className='w-full py-4 text-center text-2xl uppercase text-[#AD954C]'>
              Welcome to my Portfolio!
            </p>
          </div>
        </div>
        <div className='py-4 flex flex-col text-center justify-center'>
          <ul className='uppercase py-4 text-2xl'>
            <Link href='/#home'>
              <li className='py-3' onClick={handleNav}>
                Home
              </li>
            </Link>
            <Link href='/#about'>
              <li className='py-3' onClick={handleNav}>
                About
              </li>
            </Link>
            <Link href='/#skills'>
              <li className='py-3' onClick={handleNav}>
                Skills
              </li>
            </Link>
            <Link href='/#projects'>
              <li className='py-3' onClick={handleNav}>
                Projects
              </li>
            </Link>
            <Link href='/#contact'>
              <li className='py-3' onClick={handleNav}>
                Contact
              </li>
            </Link>
          </ul>
          {/* Footer Container*/}
          <div className='pt-30'>
            <p className='uppercase tracking-widest text-[#AD954C] text-2xl font-semibold'>
              Let&#39;s Connect
            </p>

            {/* Icons Container*/}
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
              <Link
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/saimamir/'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300 text-gray-700 dark:text-white'>
                  <FaLinkedinIn size={25} />
                </div>
              </Link>
              <Link
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/x-saim '
              >
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300 text-gray-700 dark:text-white'>
                  <FaGithub size={25} />
                </div>
              </Link>

              <Link href='/#contact'>
                <div
                  className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300 text-gray-700 dark:text-white'
                  onClick={handleNav}
                >
                  <AiOutlineMail size={25} />
                </div>
              </Link>

              <Link href='/#about'>
                <div
                  className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300 text-gray-700 dark:text-white'
                  onClick={handleNav}
                >
                  <BsFillPersonLinesFill size={25} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
