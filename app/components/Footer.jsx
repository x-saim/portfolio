import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer' className='bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-gray-900 border-t border-gray-200 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
          {/* Logo and Brand */}
          <div className='flex items-center justify-center md:justify-start'>
            <a href='/#home' className='flex items-center space-x-3'>
              <Image
                src='/assets/navLogo2.png'
                className='h-10 w-auto'
                alt='Logo'
                width={100}
                height={100}
              />
              <span className='text-xl font-semibold text-gray-800 dark:text-white'>
                Saim Amir
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className='flex justify-center space-x-8'>
            <a href='/#about' className='text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'>
              About
            </a>
            <a href='/#skills' className='text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'>
              Skills
            </a>
            <a href='/#projects' className='text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'>
              Projects
            </a>
            <a href='/#contact' className='text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'>
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className='flex justify-center md:justify-end space-x-6'>
            <a href="https://github.com/x-saim" target="_blank" rel="noopener noreferrer" 
               className='text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'>
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/saimamir/" target="_blank" rel="noopener noreferrer"
               className='text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'>
              <FaLinkedinIn className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-8 pt-8 border-t border-gray-200 dark:border-gray-700'>
          <p className='text-center text-sm text-gray-500 dark:text-gray-400'>
            © {new Date().getFullYear()} Saim Amir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
