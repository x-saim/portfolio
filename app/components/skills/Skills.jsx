import React from 'react';
import CodeLogo from 'public/assets/skills/div-coding-icon.png';
import Image from 'next/image';
import SkillsSection from './SkillsSection';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 sm:pt-24 md:pt-24'>
      <div className='max-w-[720px] mx-auto flex flex-col justify-center text-center h-full'>
        <div className='flex justify-center items-center'>
          <span>
            <Image src={CodeLogo} width={50} height={50} alt='Tag' />
          </span>
          <h2 className='uppercase ml-4 mr-4 tracking-widest text-[#AD954C]'>
            Skills
          </h2>
          <span>
            <Image src={CodeLogo} width={50} height={50} alt='Tag' />
          </span>
        </div>
        <p className='py-4'>
          The main area of my expertise is full-stack web and software
          development - tackling both client and server side technologies.
        </p>
        <SkillsSection />
      </div>
    </div>
  );
};

export default Skills;
