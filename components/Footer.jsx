import React from 'react';
import Image from 'next/image';
const Footer = () => {
  // const footerStyle = {
  //   background: 'linear-gradient(135deg, #FFD700, #FFA500)',
  // };
  return (
    <footer
      id='footer'
      // style={}
      class='bg-white rounded-lg shadow dark:bg-gray-900 m-4 '
    >
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className=''></div>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <a href='/#home' className='flex items-center mb-4 sm:mb-0'>
            <Image
              src='/assets/navLogo2.png'
              class='h-8 mr-3'
              alt='/'
              width={100}
              height={100}
            />

            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              Saim Amir | Portfolio
            </span>
          </a>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-50'>
            <li>
              <a href='/#about' className='mr-4 hover:underline md:mr-6 '>
                About
              </a>
            </li>
            <li>
              <a href='/#contact' className='hover:underline'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{' '}
          <a href='/#home' className='hover:underline'>
            Saim Amir | Portfolio™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
