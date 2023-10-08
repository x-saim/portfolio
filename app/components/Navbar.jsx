'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navLinks } from '@/utils/data';
import MobileMenu from './MobileMenu';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineClose } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // const [shadow, setShadow] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  // //NavBar Shadow Toggler
  // useEffect(() => {
  //   const handleShadow = () => {
  //     if (window.scrollY >= 90) {
  //       setShadow(true);
  //     } else {
  //       setShadow(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleShadow);
  // }, []);

  //Menu Toggler
  const handleNav = () => {
    setNav(!nav);
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
    <header className='z-[999] relative'>
      <motion.div
        className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-gray-100 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>
      <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-md font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {navLinks.map(addStylesToNavLinks)}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

// <div
//   className={
//     shadow
//       ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3] dark:bg-gray-900'
//       : 'fixed w-full h-20  z-[100]'
//   }
// >
//   <div></div>

//   <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
//     <Link href='/#home'>
//       <Image src='/assets/navLogo2.png' alt='/' width={125} height={50} />
//     </Link>

//     <div>
//       <ul className='hidden md:flex dark:text-white'>
//         <Link href='/#home'>
//           <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
//         </Link>
//         <Link href='/#about'>
//           <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
//         </Link>
//         <Link href='/#skills'>
//           <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
//         </Link>
//         <Link href='/#projects'>
//           <li className='ml-10 text-sm uppercase hover:border-b'>
//             Projects
//           </li>
//         </Link>
//         <Link href='/resume'>
//           <li className='ml-10 text-sm uppercase hover:border-b'>Resume</li>
//         </Link>
//         <Link href='/#contact'>
//           <li className='ml-10 text-sm uppercase hover:border-b'>
//             Contact
//           </li>
//         </Link>
//       </ul>
//       <div onClick={handleNav} className='md:hidden'>
//         <AiOutlineMenu size={25} />
//       </div>
//     </div>
//   </div>

//   {/* Mobile Menu */}
//   {/* Background styling */}
//   <div
//     className={
//       nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
//     }
//   >
//     {/* Menu Sidebar */}
//     <div
//       className={
//         nav
//           ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
//           : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
//       }
//     >
//       <div>
//         {/* Top Bar of Menu */}
//         <div className='flex w-full items-center justify-between'>
//           <Image
//             src='/assets/navLogo2.png'
//             alt='/'
//             width={87}
//             height={35}
//           />
//           <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
//             <AiOutlineClose onClick={handleNav} />
//           </div>
//         </div>

//         {/* Headline */}
//         <div className='border-b border-gray-300 my-4'>
//           <p className='w-[85%] md:w-[90%] py-4'>
//             Welcome to my personal portfolio!
//           </p>
//         </div>
//       </div>

//       {/* Menu List */}
//       <div className='py-4 flex-col'>
//         <ul className='uppercase'>
//           <Link href='/#home'>
//             <li onClick={() => setNav(false)} className='py-4 text-sm'>
//               Home
//             </li>
//           </Link>
//           <Link href='/#about'>
//             <li onClick={() => setNav(false)} className='py-4 text-sm'>
//               About
//             </li>
//           </Link>
//           <Link href='/#skills'>
//             <li onClick={() => setNav(false)} className='py-4 text-sm'>
//               Skills
//             </li>
//           </Link>
//           <Link href='/#projects'>
//             <li onClick={() => setNav(false)} className='py-4 text-sm'>
//               Projects
//             </li>
//           </Link>
//           <Link href='/#contact'>
//             <li onClick={() => setNav(false)} className='py-4 text-sm'>
//               Contact
//             </li>
//           </Link>
//         </ul>

//         {/* Social Icons Section */}
//         <div className='pt-40 '>
//           <p className='uppercase tracking-widest text-[#000000]'>
//             Let&apos;s Connect!
//           </p>

//           <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
//             <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
//               <FaLinkedin />
//             </div>
//             <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
//               <FaGithub />
//             </div>
//             <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
//               <AiOutlineMail />
//             </div>
//             <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
//               <BsFillPersonLinesFill />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
