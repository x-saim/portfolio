'use client';
import React, { useState } from 'react';
import { TechnicalSkills } from '../../../utils/data.js';

const ResumeSkills = () => {
  const [subCategoryVisibility, setSubCategoryVisibility] = useState({});

  const toggleSubCategory = (subcategory) => {
    setSubCategoryVisibility((prevState) => ({
      ...prevState,
      [subcategory]: !prevState[subcategory],
    }));
  };

  return (
    <>
      <div className='bg-white dark:bg-gray-900 rounded-xl p-7 flow-rootbg-white  dark:text-gray-50 shadow-md'>
        <h3 className='uppercase tracking-widest text-center text-2xl font-bold dark:text-white'>
          Technical Skills
        </h3>
        {Object.entries(TechnicalSkills).map(([subcategory, subSkills]) => (
          <div key={subcategory} className='m-1 py-3'>
            <h3
              className='cursor-pointer mt-4 mb-2 text-lg text-center bg-[#990011FF] border-2 border-black rounded-xl text-white flex items-center justify-between px-4 py-2 select-none'
              onClick={() => toggleSubCategory(subcategory)}
            >
              <span className='text-base'>{subcategory}</span>
              <span className='transform transition-transform'>
                {subCategoryVisibility[subcategory] ? '▲' : '▼'}
              </span>
            </h3>
            {subCategoryVisibility[subcategory] && (
              <div className='flex flex-wrap'>
                {subSkills.map((skill) => (
                  <div
                    key={skill}
                    className='p-2 m-1 rounded-xl font-medium bg-[#DCC7AA] text-black border-2 border-black'
                  >
                    {skill}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ResumeSkills;
