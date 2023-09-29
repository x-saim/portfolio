import React from 'react';
import RubyOnRails from '../public/assets/skills/Ruby_On_Rails_Logo.svg.png';
import Image from 'next/image';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center text-center h-full'>
        <h2 className='uppercase tracking-widest text-[#AD954C]'>
          Skills & Experience
        </h2>

        <p className='py-4'>
          The main area of my expertise is full-stack development - both client
          and server side technologies.
        </p>

        <h3 className='uppercase py-4 text-center'>Programming Languages</h3>

        {/* Icons */}
        <div className='flex flex-wrap justify-center'>
          {/* Replace the following divs with your image components */}
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                width='75px'
                height='75px'
                alt='JavaScript'
              />
            </div>
          </div>

          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg'
                width='75px'
                height='75px'
                alt='Python'
              />
            </div>
          </div>

          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg'
                width='75px'
                height='75px'
                alt='Ruby'
              />
            </div>
          </div>

          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
                width='75px'
                height='75px'
                alt='TypeScript'
              />
            </div>
          </div>
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'
                width='75px'
                height='75px'
                alt='HTML5'
              />
            </div>
          </div>
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'
                width='75px'
                height='75px'
                alt='CSS3'
              />
            </div>
          </div>
        </div>
        <br />
        <h3 className='uppercase py-4 text-center'>Frameworks & Libraries</h3>
        {/* Icons */}
        <div className='flex flex-wrap justify-center'>
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'
                width='75px'
                height='75px'
                alt='React'
              />
            </div>
          </div>
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <Image
                src={RubyOnRails}
                width={75}
                height={75}
                alt='Ruby on Rails'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
