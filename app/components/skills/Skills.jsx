import React from 'react';
import SkillsSection from './SkillsSection';

const Skills = () => {
  return (
    <div id='skills' className='w-full border-t border-gray-200 dark:border-gray-800'>
      <div className='max-w-[1200px] mx-auto px-6 py-20'>
        <div className='flex flex-col gap-2 mb-16'>
          <h2 className='text-3xl font-bold text-black dark:text-white'>
            Technical Expertise
          </h2>
          <p className='text-gray-600 dark:text-gray-400 text-lg'>
            Full-stack development with modern web technologies.
          </p>
        </div>
        <SkillsSection />
      </div>
    </div>
  );
};

export default Skills;
