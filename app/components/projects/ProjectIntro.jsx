import React from 'react';
import Link from 'next/link';

const ProjectIntro = () => {
  return (
    <div className='uppercase max-w-[600px] rounded-full px-3 py-1 text-md leading-6 text-gray-600 dark:text-black dark:text-md ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-gray-50/10 dark:hover:ring-gray-50/20 tracking-widest bg-gray-100 shadow-md dark:shadow-gray-400 font-semibold '>
      Check out my{' '}
      <Link href='/resume' className='font-semibold text-[#AD954C] '>
        Resume <span aria-hidden='true'></span>
      </Link>
      &{' '}
      <Link href='/#projects' className='font-semibold text-[#AD954C] '>
        Projects <span aria-hidden='true'></span>
      </Link>
    </div>
  );
};

export default ProjectIntro;
