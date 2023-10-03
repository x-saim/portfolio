import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      {/* Main Container*/}
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center'>
        {/* Project Link Container*/}
        <div className='uppercase max-w-[600px] rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-50 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-gray-50/10 dark:hover:ring-gray-50/20 tracking-widest'>
          Check out my{' '}
          <a href='/#projects' className='font-semibold text-[#AD954C] '>
            Projects <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>

        {/* Description Container*/}
        <div>
          <h1 className='py-4 text-gray-70 dark:text-gray-50'>
            Hi, I&apos;m <span className='text-[#AD954C] '>Saim</span>
          </h1>
          <h1 className='py-4 text-gray-700 dark:text-gray-50'>
            A Full-Stack Web Developer
          </h1>
          <p className='py-3 text-gray-600 dark:text-gray-50 max-w-[70%] m-auto text-lg'>
            Combining my engineering expertise with web and software development
            skills to deliver innovative solutions.
          </p>

          {/* Icons Container*/}
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/saimamir/'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-[#AD954C]'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/x-saim '
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-[#AD954C]'>
                <FaGithub />
              </div>
            </a>

            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-[#AD954C]'>
                <AiOutlineMail />
              </div>
            </Link>

            <Link href='/#about'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-[#AD954C]'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>

        {/* Mail Link Container*/}
        {/* <button
          className='uppercase max-w-[600px] bg-gray-600 text-white
         rounded-full px-3 py-1 text-md leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20 tracking-widest font-semibold flex hover:scale-110'
        >
          View Resume
          <a href='/#' className='font-semibold'>
            <span aria-hidden='true'>
              <AiOutlineDownload className='mt-1' />
            </span>
          </a>
          <div></div>
        </button> */}
      </div>
    </div>
  );
};

export default Main;
