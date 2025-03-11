import React from 'react';
import { motion } from 'framer-motion';

const ProjectDescription = ({ title, subtitle }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='text-center mb-16'
    >
      <h2 className='text-3xl md:text-4xl font-bold text-black dark:text-white mb-4'>
        {title}
      </h2>
      <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg'>
        {subtitle}
      </p>
    </motion.div>
  );
};

export default ProjectDescription; 