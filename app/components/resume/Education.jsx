import React from 'react';

const Education = () => {
  return (
    <div className='p-7 bg-white dark:bg-gray-900 dark:text-gray-50 rounded-xl shadow-md'>
      <h3 className='uppercase tracking-widest text-center text-2xl font-bold dark:text-white'>
        Education
      </h3>
      <div className='space-y-8 mt-4 text-gray-600 dark:text-gray-50'>
        <div>
          <div className='flex justify-between'>
            <div>Diploma:</div>
            <div className='font-medium text-right'>
              Full Stack Web Development
            </div>
          </div>
          <div className='flex justify-between'>
            <div>Institution:</div>
            <a
              href='https://www.lighthouselabs.ca/'
              className='font-medium text-right hover:underline'
            >
              Lighthouse Labs
            </a>
          </div>
          <div className='flex justify-between'>
            <div>Location:</div>
            <div className='font-medium text-right'>Toronto, CA</div>
          </div>
          <div className='flex justify-between'>
            <div>Year:</div>
            <div className='font-medium text-right'>2023</div>
          </div>
        </div>
        <div>
          <div className='flex justify-between'>
            <div>Degree:</div>
            <div className='font-medium text-right'>
              Bachelor of Civil Engineering
            </div>
          </div>
          <div className='flex justify-between'>
            <div>Institution:</div>
            <a
              href='https://www.mcmaster.ca/'
              className='font-medium text-right hover:underline'
            >
              McMaster University
            </a>
          </div>
          <div className='flex justify-between'>
            <div>Location:</div>
            <div className='font-medium text-right'>Hamilton, CA</div>
          </div>
          <div className='flex justify-between'>
            <div>Year:</div>
            <div className='font-medium text-right'>2020</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
