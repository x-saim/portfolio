import React from 'react';
import BizConnectImage from '../public/assets/projects/BizConnect.png';
import TweeterGif from '../public/assets/projects/Tweeter.gif';
import SchedulerGif from '../public/assets/projects/Scheduler.gif';
import TinyURLImage from '../public/assets/projects/TinyURL.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#AD954C]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='BizConnect'
            backgroundImg={BizConnectImage}
            projectUrl='/projects/bizconnect'
            tech='A full-stack professional social network developed using Node.js, Express, React, Redux, and MongoDB. '
          />
          <ProjectItem
            title='Scheduler'
            backgroundImg={SchedulerGif}
            projectUrl='/projects/scheduler'
            tech=' Interview Scheduler is a single-page application (SPA) built using JavaScript, React, and Axios that allows users to book technical interviews between students and mentors.'
          />
          <ProjectItem
            title='Tweeter'
            backgroundImg={TweeterGif}
            projectUrl='/projects/tweeter'
            tech='Tweeter is a Single Page App (SPA) built with HTML, CSS, JS, jQuery, and AJAX.'
          />
          <ProjectItem
            title='TinyURL'
            backgroundImg={TinyURLImage}
            projectUrl='/projects/tinyurl'
            tech='TinyApp is a full stack web application built with Node, Express, and EJS that allows users to shorten long URLs (à la bit.ly).'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
