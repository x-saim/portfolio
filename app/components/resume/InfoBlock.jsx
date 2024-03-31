import React from 'react';

const InfoBlock = () => {
  return (
    <div className='p-7 bg-white dark:bg-gray-900 dark:text-gray-50 rounded-xl shadow-md'>
      <h3 className='uppercase tracking-widest text-center text-2xl font-bold dark:text-white'>
        Information
      </h3>
      <div className='space-y-4 mt-4 text-gray-600 dark:text-gray-50'>
        <div className='flex justify-between'>
          <div>Location</div>
          <div className='font-medium text-right'>
            Greater Toronto Area (GTA)
          </div>
        </div>
        <div className='flex justify-between'>
          <div>Experience</div>
          <div className='font-medium text-right '>3+ years</div>
        </div>
        <div className='flex justify-between'>
          <div>Availability</div>
          <div className='font-medium text-right '>2 weeks</div>
        </div>
        <div className='flex justify-between'>
          <div>Relocation</div>
          <div className='font-medium text-right '>Yes</div>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
