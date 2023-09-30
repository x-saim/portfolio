import React from 'react';
import RubyOnRails from '../public/assets/skills/Ruby_On_Rails_Logo.svg.png';
import CypressLogo from '../public/assets/skills/Cypress_Logo.png';
import ReduxLogo from '../public/assets/skills/redux-icon.png';
import SassLogo from '../public/assets/skills/sass-icon.png';
import GitLogo from '../public/assets/skills/git-icon.png';
import PostmanLogo from '../public/assets/skills/postman-icon.png';
import CodeLogo from '../public/assets/skills/div-coding-icon.png';
import Image from 'next/image';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 sm:pt-24 md:pt-24'>
      <div className='max-w-[1920px] mx-auto flex flex-col justify-center text-center h-full'>
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
          The main area of my expertise is full-stack development - both client
          and server side technologies.
        </p>

        {/* Icons */}
        <h3 className='uppercase py-4 text-center'>Programming Languages</h3>
        <div className='flex flex-wrap justify-center'>
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

          {/* <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
                width='75px'
                height='75px'
                alt='TypeScript'
              />
            </div>
          </div> */}
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
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <Image src={SassLogo} width={75} height={75} alt='Rails' />
            </div>
          </div>
        </div>
        <br />
        <h3 className='uppercase py-4 text-center'>
          Client & Server Side - Frameworks & Libraries
        </h3>
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
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg'
                width='75px'
                height='75px'
                alt='Next'
              />
            </div>
          </div>
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <Image src={RubyOnRails} width={75} height={75} alt='Rails' />
            </div>
          </div>

          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'
                width='75px'
                height='75px'
                alt='Node'
              />
            </div>
          </div>
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg'
                width='75px'
                height='75px'
                alt='Express'
              />
            </div>
          </div>
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <Image src={ReduxLogo} width={75} height={75} alt='Cypress' />
            </div>
          </div>
        </div>

        <h3 className='uppercase py-4 text-center'>Database Management</h3>
        <div className='flex flex-wrap justify-center'>
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg'
                width='75px'
                height='75px'
                alt='PostgreSQL'
              />
            </div>
          </div>
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg'
                width='75px'
                height='75px'
                alt='MongoDB'
              />
            </div>
          </div>
        </div>

        <br />
        <h3 className='uppercase py-4 text-center'>Testing</h3>
        <div className='flex flex-wrap justify-center'>
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg'
                width='75px'
                height='75px'
                alt='Mocha'
              />
            </div>
          </div>
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'
                width='75px'
                height='75px'
                alt='Jest'
              />
            </div>
          </div>
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg'
                width='75px'
                height='75px'
                alt='Jest'
              />
            </div>
          </div>
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <Image src={CypressLogo} width={75} height={75} alt='Cypress' />
            </div>
          </div>
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original-wordmark.svg'
                width='75px'
                height='75px'
                alt='Rspec'
              />
            </div>
          </div>
        </div>
        <br />
        <h3 className='uppercase py-4 text-center'>Development/Other Tools</h3>
        <div className='flex flex-wrap justify-center'>
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
                width='75px'
                height='75px'
                alt='Figma'
              />
            </div>
          </div>
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg'
                width='75px'
                height='75px'
                alt='VSCode'
              />
            </div>
          </div>

          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <Image src={GitLogo} width={75} height={75} alt='Cypress' />
            </div>
          </div>
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <Image src={PostmanLogo} width={75} height={75} alt='Cypress' />
            </div>
          </div>
          <div className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
            <div>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg'
                width='75px'
                height='75px'
                alt='Photoshop'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
