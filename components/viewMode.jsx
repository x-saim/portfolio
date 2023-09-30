'use client';
import React, { useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

const ViewMode = () => {
  const [theme, setTheme] = useState('light');

  //handler to setting dark or light button on click event
  const themeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div
      className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all'
      onClick={themeToggle}
    >
      {' '}
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </div>
  );
};

export default ViewMode;

// ('fixed flex justify-center py-4 bottom-5 right-5 w-[3rem] h-[3rem] bg-black bg-opacity-30 rounded-full text-white ');
