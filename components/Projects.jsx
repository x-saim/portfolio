import React from 'react';
import BizConnectImage from '../public/assets/projects/BizConnect.png';
import TweeterGif from '../public/assets/projects/Tweeter.gif';
import SchedulerGif from '../public/assets/projects/Scheduler.gif';
import TinyURLImage from '../public/assets/projects/TinyURL.png';
import ProjectItem from './ProjectItem';
import CodeLogo from '../public/assets/skills/div-coding-icon.png';
import Image from 'next/image';

const Projects = () => {
  return (
    <div id='projects' className='w-full h-full-screen sm:pt-24 md:pt-24 '>
      <div className='max-w-[1920px] mx-auto px-2 py-16'>
        <div className='flex justify-center items-center'>
          <span>
            <Image src={CodeLogo} width={50} height={50} alt='Tag' />
          </span>
          <h2 className='uppercase ml-4 mr-4 tracking-widest text-[#AD954C]'>
            Project Work
          </h2>
          <span>
            <Image src={CodeLogo} width={50} height={50} alt='Tag' />
          </span>
        </div>
        <h2 className='py-4 text-3xl font-semibold text-gray-800'>
          Explore My Projects
        </h2>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='BizConnect'
            backgroundImg={BizConnectImage}
            projectUrl='https://github.com/x-saim/bizconnect'
            tech='A full-stack professional social network developed using Node.js, Express, React, Redux, and MongoDB. '
          />
          <ProjectItem
            title='Scheduler'
            backgroundImg={SchedulerGif}
            projectUrl='https://github.com/x-saim/scheduler'
            tech=' Interview Scheduler is a single-page application (SPA) built using JavaScript, React, and Axios that allows users to book technical interviews between students and mentors.'
          />
          <ProjectItem
            title='Tweeter'
            backgroundImg={TweeterGif}
            projectUrl='https://github.com/x-saim/tweeter'
            tech='Tweeter is a Single Page App (SPA) built with HTML, CSS, JS, jQuery, and AJAX.'
          />
          <ProjectItem
            title='TinyApp'
            backgroundImg={TinyURLImage}
            projectUrl='https://github.com/x-saim/tinyapp'
            tech='TinyApp is a full stack web application built with Node, Express, and EJS that allows users to shorten long URLs (à la bit.ly).'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
