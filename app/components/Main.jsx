import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import ProjectIntro from './projects/ProjectIntro';
const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      {/* Main Container*/}
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center'>
        {/* Project Link Container*/}
        {/* <ProjectIntro /> */}
        {/* Description Container*/}
        <div>
          <h1 className='py-4 text-gray-70 dark:text-gray-50'>
            Hi, I&apos;m <span className='text-[#AD954C] '>Saim</span>
          </h1>
          <h1 className='py-4 text-gray-700 dark:text-gray-50'>
            A Full-Stack Software Developer
          </h1>
          <p className='py-3 text-gray-600 dark:text-gray-50 max-w-[70%] m-auto text-lg font-medium'>
            Combining my engineering expertise with web and software development
            skills to deliver innovative solutions.
          </p>

          {/* Icons Container*/}
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/saimamir/'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-gray-700 dark:text-white'>
                <FaLinkedinIn size={25} />
              </div>
            </Link>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/x-saim '
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-gray-700 dark:text-white'>
                <FaGithub size={25} />
              </div>
            </Link>

            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-gray-700 dark:text-white'>
                <AiOutlineMail size={25} />
              </div>
            </Link>

            <Link href='/#about'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-gray-700 dark:text-white'>
                <BsFillPersonLinesFill size={25} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
