'use client';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const handleNav = () => setNavOpen(!navOpen);

  return (
    <>
      <header className='z-[999] relative'>
        <DesktopNav 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />

        {/* Mobile Menu Button */}
        <div
          onClick={handleNav}
          className='md:hidden fixed top-5 right-5 
            bg-white dark:bg-black
            w-[3rem] h-[3rem] 
            backdrop-blur-[0.5rem] 
            border border-black/5 dark:border-white/5
            shadow-lg shadow-black/5 dark:shadow-white/5
            rounded-full flex items-center justify-center 
            hover:scale-[1.15] active:scale-105 transition-all
            text-black dark:text-white'
        >
          {navOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </header>

      <MobileNav navOpen={navOpen} handleNav={handleNav} />
    </>
  );
};

export default Navbar;
