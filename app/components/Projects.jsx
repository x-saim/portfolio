import React from 'react';
import BizConnectImage from '../../public/assets/projects/BizConnect.png';
import TweeterGif from '../../public/assets/projects/Tweeter.gif';
import SchedulerGif from '../../public/assets/projects/Scheduler.gif';
import TinyURLImage from '../../public/assets/projects/TinyURL.png';
import ProjectItem from './ProjectItem';
import CodeLogo from '../../public/assets/skills/div-coding-icon.png';
import Image from 'next/image';

const Projects = () => {
  return (
    <div id='projects' className='w-full h-full-screen sm:pt-24 md:pt-24 '>
      <div className='max-w-[1920px] mx-auto px-2 py-16 justify-center text-center'>
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
        <p className='py-6  font-semibold text-gray-800 dark:text-gray-50'>
          Welcome to my dynamic web portfolio, where I present a collection of
          applications that showcase my mastery of full-stack and front-end
          development. These projects seamlessly blend technology and
          innovation, leveraging technologies like Node.js, Express, React,
          Redux, MongoDB, JavaScript, Axios, HTML, CSS, jQuery, and AJAX. From a
          global professional network to a streamlined interview scheduler and
          real-time social interaction app, dive into my diverse skill set and
          experience my commitment to crafting exceptional user experiences.
        </p>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='BizConnect'
            backgroundImg={BizConnectImage}
            projectUrl='https://github.com/x-saim/bizconnect'
            tech='BizConnect is a full-stack professional social network developed using Node.js, Express, React, Redux, and MongoDB. '
          />
          <ProjectItem
            title='Scheduler'
            backgroundImg={SchedulerGif}
            projectUrl='https://github.com/x-saim/scheduler'
            tech='Interview Scheduler is a single-page application (SPA) built using JavaScript, React, and Axios that allows users to book technical interviews between students and mentors.'
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
