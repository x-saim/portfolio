'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navLinks } from '@/utils/data';
import MobileMenu from './MobileMenu';
import NavLogo from '../../../public/assets/navLogo2.png';
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

  // const handleMenuIcon = () => {
  //   setMenuIcon(!menuIcon);
  // };

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
  //

  // 'flex fixed left-[80%] top-12 ease-in duration-400 dark:bg-gray-950 bg-gray-200 border-2 border-black  z-[999] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
  return (
    <>
      <header className='z-[999] relative'>
        <div>
          <motion.div
            className='fixed top-6 left-1/2 h-[3.25rem] border border-white border-opacity-40 bg-gray-100 bg-opacity-80 shadow-lg  shadow-gray-400 backdrop-blur-[0.5rem] w-[40rem] rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 hidden md:flex'
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
      {/* sm:w-[60%] md:w-[45%] */}

      {/* Menu Sidebar */}
      <div
        className={
          navOpen
            ? ' fixed left-0 top-0 h-screen w-full bg-[#ecf0f3] p-10 ease-in duration-500 z-[998]'
            : 'fixed left-[-100%] ease-out duration-500'
        }
      >
        <div>
          <div className='flex w-full items-center justify-between'>
            <Link href='/'>
              <Image src={NavLogo} width='87' height='35' alt='/' />
            </Link>
            {/* <div
              onClick={handleNav}
              className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
            >
              <AiOutlineClose />
            </div> */}
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:w-[90%] py-4'>
              Welcome to my portfolio website!
            </p>
          </div>
        </div>
        <div className='py-4 flex flex-col'>
          <ul className='uppercase'>
            <Link href='/#home'>
              <li onClick={() => setNavOpen(false)} className='py-4 text-sm'>
                Home
              </li>
            </Link>
            <Link href='/#about'>
              <li onClick={() => setNavOpen(false)} className='py-4 text-sm'>
                About
              </li>
            </Link>
            <Link href='/#skills'>
              <li onClick={() => setNavOpen(false)} className='py-4 text-sm'>
                Skills
              </li>
            </Link>
            <Link href='/#projects'>
              <li onClick={() => setNavOpen(false)} className='py-4 text-sm'>
                Projects
              </li>
            </Link>
            <Link href='/resume'>
              <li onClick={() => setNavOpen(false)} className='py-4 text-sm'>
                Resume
              </li>
            </Link>
            <Link href='/#contact'>
              <li onClick={() => setNavOpen(false)} className='py-4 text-sm'>
                Contact
              </li>
            </Link>
          </ul>
          <div className='pt-40'>
            <p className='uppercase tracking-widest text-[#5651e5]'>
              Let&#39;s Connect
            </p>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
              <Link
                href='https://www.linkedin.com/in/saimamir/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
              </Link>
              <Link
                href='https://github.com/x-saim'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
              </Link>
              <Link href='/#contact'>
                <div
                  onClick={() => setNavOpen(!navOpen)}
                  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                >
                  <AiOutlineMail />
                </div>
              </Link>
              <Link href='/resume'>
                <div
                  onClick={() => setNavOpen(!navOpen)}
                  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                >
                  <BsFillPersonLinesFill />
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