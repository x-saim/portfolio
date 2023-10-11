'use client';
import React, { useState, useEffect } from 'react';
import { GoMoveToTop } from 'react-icons/go';
import { motion } from 'framer-motion';
const NavTop = () => {
  const [navTop, setNavTop] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const handleNavTop = () => {
      if (window.scrollY >= 90) {
        setNavTop(true);
      } else {
        setNavTop(false);
      }
    };

    window.addEventListener('scroll', handleNavTop);

    return () => {
      window.removeEventListener('scroll', handleNavTop);
    };
  }, []);

  return (
    <div>
      {navTop && (
        <motion.div
          className='fixed bottom-[80px] right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center dark:bg-gray-950 z-[999]'
          onClick={handleScrollToTop}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 1.05 }}
          initial={{ scale: 1 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <GoMoveToTop />
        </motion.div>
      )}
    </div>
  );
};

export default NavTop;
