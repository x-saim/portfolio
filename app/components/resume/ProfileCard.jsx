import React from 'react';
import { FiMail } from 'react-icons/fi';
import { AiFillMediumSquare } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
const ProfileCard = () => {
  return (
    <div className='flex flex-col justify-center w-full p-6 shadow-md rounded-xl sm:px-15 bg-[#DCC7AA] dark:bg-gray-900 dark:text-gray-100'>
      <Link href='/#home'>
        <Image
          src='/assets/resume/profilepicture.png'
          alt='Avatar'
          className='mx-auto rounded-full dark:bg-gray-500 aspect-square'
          width={250}
          height={250}
        />
      </Link>
      <div className='space-y-4 text-center divide-y divide-gray-700'>
        <div className='my-2 space-y-1'>
          <h2 className='text-xl font-semibold sm:text-2xl'>Saim Amir</h2>
          <p className='px-5 text-xs sm:text-base dark:text-gray-400'>
            Full-Stack Developer | Civil E.I.T
          </p>
        </div>
        <div className='flex justify-center pt-2 space-x-4 align-center'>
          <Link
            rel='noopener noreferrer'
            href='https://github.com/x-saim'
            aria-label='GitHub'
            className='p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400'
          >
            <Image
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
              width={30}
              height={30}
              alt='/'
            />
          </Link>
          <Link
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/saimamir/'
            aria-label='Linkedin'
            className='p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400'
          >
            <Image
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
              width={30}
              height={30}
              alt='/'
            />
          </Link>
          <Link
            rel='noopener noreferrer'
            href='https://medium.com/@saimxamir'
            aria-label='Medium'
            className='p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400'
          >
            <AiFillMediumSquare size={30} />
          </Link>
          <Link
            href='mailto:saimxamir@gmail.com'
            aria-label='Email'
            className='p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400'
          >
            <FiMail size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
