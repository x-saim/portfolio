'use client';
import React from 'react';
import { motion } from 'framer-motion';
import BizConnectImage from 'public/assets/projects/BizConnect.png';
import TweeterGif from 'public/assets/projects/Tweeter.gif';
import SchedulerGif from 'public/assets/projects/Scheduler.gif';
import TinyURLImage from 'public/assets/projects/TinyURL.png';
import ProjectItem from './ProjectItem';
import CodeLogo from 'public/assets/skills/div-coding-icon.png';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'BizConnect',
      description: 'A full-stack professional social network',
      tech: ['Node.js', 'Express', 'React', 'Redux', 'MongoDB'],
      image: BizConnectImage,
      url: 'https://github.com/x-saim/bizconnect',
      category: 'Full Stack'
    },
    {
      title: 'Scheduler',
      description: 'Interview scheduling single-page application',
      tech: ['JavaScript', 'React', 'Axios'],
      image: SchedulerGif,
      url: 'https://github.com/x-saim/scheduler',
      category: 'Frontend'
    },
    {
      title: 'Tweeter',
      description: 'A Single Page App (SPA) built with HTML, CSS, JS, jQuery, and AJAX.',
      tech: ['HTML', 'CSS', 'JS', 'jQuery', 'AJAX'],
      image: TweeterGif,
      url: 'https://github.com/x-saim/tweeter',
      category: 'Frontend'
    },
    {
      title: 'TinyApp',
      description: 'A full stack web application built with Node, Express, and EJS that allows users to shorten long URLs (à la bit.ly).',
      tech: ['Node', 'Express', 'EJS'],
      image: TinyURLImage,
      url: 'https://github.com/x-saim/tinyapp',
      category: 'Full Stack'
    }
  ];

  return (
    <section id='projects' className='w-full min-h-screen bg-white dark:bg-black py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-black dark:text-white mb-4'>
            Featured Projects
          </h2>
          <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg'>
            Exploring the intersection of technology and creativity through carefully crafted web applications.
          </p>
        </motion.div>

        <div className='space-y-24'>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className='w-full md:w-1/2 relative group'>
                <div className='relative overflow-hidden rounded-xl shadow-2xl'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className='w-full h-auto transform transition-transform duration-500 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <a
                      href={project.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors'
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>

              <div className='w-full md:w-1/2 space-y-4'>
                <span className='text-sm font-medium text-[#AD954C] uppercase tracking-wider'>
                  {project.category}
                </span>
                <h3 className='text-2xl font-bold text-black dark:text-white'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
