'use client';
import React from 'react';
import ProjectDescription from './ProjectDescription';
import ProjectItem from './ProjectItem';
import { projects, projectsDescription } from './projectData';

const Projects = () => {
  return (
    <section id='projects' className='w-full min-h-screen bg-white dark:bg-black py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <ProjectDescription 
          title={projectsDescription.title}
          subtitle={projectsDescription.subtitle}
        />

        <div className='space-y-24'>
          {projects.map((project, index) => (
            <ProjectItem 
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
