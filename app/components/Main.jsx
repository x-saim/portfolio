'use client';
import React, { lazy, Suspense } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
// Lazy load icons
const FaLinkedinIn = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaLinkedinIn })));
const FaGithub = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaGithub })));
const BsFillPersonLinesFill = lazy(() => import('react-icons/bs').then(mod => ({ default: mod.BsFillPersonLinesFill })));
const AiOutlineMail = lazy(() => import('react-icons/ai').then(mod => ({ default: mod.AiOutlineMail })));

// Social link component for better organization and accessibility
const SocialLink = ({ href, ariaLabel, icon: Icon }) => (
  <Link
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    aria-label={ariaLabel}
  >
    <motion.div 
      className='rounded-full shadow-lg shadow-black/20 dark:shadow-white/10 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-black dark:text-white bg-white dark:bg-black'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Suspense fallback={<div className="w-[25px] h-[25px]" />}>
        <Icon size={25} />
      </Suspense>
    </motion.div>
  </Link>
);

const Main = () => {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/saimamir/',
      ariaLabel: 'Visit my LinkedIn profile',
      icon: FaLinkedinIn
    },
    {
      href: 'https://github.com/x-saim',
      ariaLabel: 'Visit my GitHub profile',
      icon: FaGithub
    },
    {
      href: '/#contact',
      ariaLabel: 'Contact me',
      icon: AiOutlineMail
    },
    {
      href: '/#about',
      ariaLabel: 'About me',
      icon: BsFillPersonLinesFill
    }
  ];

  return (
    <main id='home' className='w-full h-screen text-center bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900'>
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

          <motion.div 
            className='grid grid-cols-2 md:flex md:items-center md:justify-between max-w-[330px] m-auto py-4 gap-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {socialLinks.map((link, index) => (
              <SocialLink
                key={link.href}
                href={link.href}
                ariaLabel={link.ariaLabel}
                icon={link.icon}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default Main;
