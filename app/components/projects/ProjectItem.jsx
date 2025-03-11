import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const ProjectImage = ({ image, title, url }) => (
  <div className='w-full md:w-1/2 relative group'>
    <div className='relative overflow-hidden rounded-xl shadow-2xl'>
      <Image
        src={image}
        alt={title}
        className='w-full h-auto transform transition-transform duration-500 group-hover:scale-105'
      />
      <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors'
        >
          View Project
        </a>
      </div>
    </div>
  </div>
);

const ProjectDetails = ({ category, title, description, tech }) => (
  <div className='w-full md:w-1/2 space-y-4'>
    <span className='text-sm font-medium text-[#AD954C] uppercase tracking-wider'>
      {category}
    </span>
    <h3 className='text-2xl font-bold text-black dark:text-white'>
      {title}
    </h3>
    <p className='text-gray-600 dark:text-gray-300'>
      {description}
    </p>
    <div className='flex flex-wrap gap-2'>
      {tech.map((item) => (
        <span
          key={item}
          className='px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full'
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const ProjectItem = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className={`flex flex-col ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } gap-8 items-center`}
    >
      <ProjectImage 
        image={project.image} 
        title={project.title} 
        url={project.url} 
      />
      <ProjectDetails 
        category={project.category}
        title={project.title}
        description={project.description}
        tech={project.tech}
      />
    </motion.div>
  );
};

export default ProjectItem;
