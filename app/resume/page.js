import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import ResumeSkills from '../components/resume/ResumeSkills';
import ProfileCard from '../components/resume/ProfileCard';
import ExperienceCard from '../components/resume/ExperienceCard';
import ProjectCard from '../components/resume/ProjectCard';
import ViewMode from '../components/viewMode';
import InfoBlock from '../components/resume/InfoBlock';
import Education from '../components/resume/Education';

const Resume = () => {
  return (
    <>
      <ViewMode />

      <div className='flex items-center pl-3 space-x-2 pt bg-gray-400 rounded-t-xl h-10'>
        <span className='w-2 h-2 bg-white rounded-full'></span>
        <span className='w-2 h-2 bg-white rounded-full'></span>
        <span className='w-2 h-2 bg-white rounded-full'></span>
        <span>
          <Link href='/#home'>
            <div className='ml-1 text-sm uppercase bg-white dark:text-gray-900 rounded-xl p-1 hover:border-b'>
              Home
            </div>
          </Link>
        </span>
      </div>
      <div className='bg-gray-100 antialiased '>
        <main className='main-container py-5 ml-4 mr-4'>
          <div className='grid gap-5 lg:grid-cols-3'>
            {/* Left Side */}
            <div className='space-y-5'>
              {/* User Block */}
              <ProfileCard />

              {/* Education Block */}
              <Education />

              {/* Info Block */}

              {/* Skills Block */}
              <ResumeSkills />
            </div>

            {/* Right Side */}
            <div className='space-y-5 lg:col-span-2'>
              {/* About Me Block */}
              <div className='p-7 pb-0 bg-white dark:bg-gray-900 rounded-xl shadow-md'>
                <h3 className='uppercase tracking-widest text-center text-2xl font-bold dark:text-white'>
                  About me
                </h3>
                <p className='text-gray-600 dark:text-white mb-1 py-2'>
                  Enthusiastic Software Developer with a unique background
                  encompassing both software development and civil engineering,
                  accumulating over 3 years of professional experience.
                </p>
                <p className='text-gray-600 dark:text-white mb-1 py-2'>
                  Proficient in JavaScript, React, Node.js, Express.js, C#,
                  .NET, SQL, and various other technologies. I combine my
                  engineering expertise with software development skills to
                  deliver innovative solutions.
                </p>
                <p className='text-gray-600 dark:text-white mb-5'>
                  I am a meticulous problem solver, approaching challenges with
                  a user-centric mindset. I am dedicated to continuously
                  updating my knowledge with the latest emerging technologies to
                  drive cutting-edge projects.
                </p>
                <div className='flex flex-col space-y-4'>
                  <Link href='mailto:saimxamir@gmail.com' className='flex'>
                    <AiOutlineMail
                      size={25}
                      style={{ marginRight: '0.5rem' }}
                    />
                    <span className='underline'>saimxamir@gmail.com</span>
                  </Link>
                  <a href='#0' className='mail-link social-link-hover'>
                    <i className='bx bx-at text-xl'></i>
                  </a>
                  <ul className='flex space-x-5'>
                    <li>
                      <a href='#0' className='social-link-hover'>
                        <i className='bx bxl-facebook-circle text-2xl'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#0' className='social-link-hover'>
                        <i className='bx bxl-twitter text-2xl'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#0' className='social-link-hover'>
                        <i className='bx bxl-github text-2xl'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Experience Block */}
              <ExperienceCard />
              {/* Projects Block */}
              <ProjectCard />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Resume;
