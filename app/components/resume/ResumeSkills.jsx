import React from 'react';
import { TechnicalSkills } from '../../../utils/data.js';
const ResumeSkills = () => {
  return (
    <>
      {/*The Object.entries() method returns an array of a given TechnicalSkills own enumerable string-keyed property key-value pairs.*/}
      <div className='bg-white dark:bg-gray-900 rounded-xl p-7 flow-root'>
        <h3 className='uppercase tracking-widest text-center text-2xl font-bold dark:text-white'>
          Technical Skills
        </h3>
        {Object.entries(TechnicalSkills).map(([subcategory, subSkills]) => (
          <div key={subcategory} className='m-1 py-1'>
            <h3 className='mt-5 text-center bg-[#990011FF] border-2 border-black rounded-xl text-xl text-white'>
              {subcategory}
            </h3>
            <div className='flex flex-wrap'>
              {subSkills.map((skill) => (
                <div
                  key={skill}
                  className='p-2 m-1 rounded-xl font-medium  bg-[#DCC7AA] text-black border-2 border-black'
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResumeSkills;
