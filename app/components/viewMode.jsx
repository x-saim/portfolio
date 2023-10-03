'use client';
import React, { useState, useEffect } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

const ViewMode = () => {
  const [theme, setTheme] = useState('light');

  // Handler to toggle theme
  const themeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  //Checking local storage on load/mount to set Theme.
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    if (localTheme) {
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
      setTheme(localTheme);
    }
  }, []);

  return (
    <div
      className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
      onClick={themeToggle}
    >
      {' '}
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </div>
  );
};

export default ViewMode;
