'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900'>
      {/* Main Container*/}
      <div className='max-w-[1240px] w-full h-full mx-auto p-4 md:p-8 flex flex-col justify-center items-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-8'
        >
          <motion.h1 
            className='py-4 text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold hover:scale-105 transition-transform'
            whileHover={{ scale: 1.02 }}
          >
            Hi, I&apos;m <span className='text-black dark:text-white font-bold'>Saim</span>
          </motion.h1>

          <motion.h1 
            className='py-4 text-black dark:text-white text-3xl md:text-4xl lg:text-5xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A Full-Stack Software Developer
          </motion.h1>

          <motion.p 
            className='py-3 text-black dark:text-white max-w-[70%] md:max-w-[60%] lg:max-w-[50%] m-auto text-base md:text-lg font-medium'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Combining my engineering expertise with web and software development
            skills to deliver innovative solutions.
          </motion.p>

          {/* Updated Icons Container with Grid */}
          <motion.div 
            className='grid grid-cols-2 md:flex md:items-center md:justify-between max-w-[330px] m-auto py-4 gap-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/saimamir/'
            >
              <div className='rounded-full shadow-lg shadow-black/20 dark:shadow-white/10 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-black dark:text-white bg-white dark:bg-black'>
                <FaLinkedinIn size={25} />
              </div>
            </Link>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/x-saim '
            >
              <div className='rounded-full shadow-lg shadow-black/20 dark:shadow-white/10 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-black dark:text-white bg-white dark:bg-black'>
              <FaGithub size={25} />
              </div>
            </Link>

            <Link href='/#contact'>
            <div className='rounded-full shadow-lg shadow-black/20 dark:shadow-white/10 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-black dark:text-white bg-white dark:bg-black'>
            <AiOutlineMail size={25} />
              </div>
            </Link>

            <Link href='/#about'>
            <div className='rounded-full shadow-lg shadow-black/20 dark:shadow-white/10 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-black dark:text-white bg-white dark:bg-black'>
            <BsFillPersonLinesFill size={25} />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
