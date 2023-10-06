import React from 'react';
import { TechnicalSkills } from '../../../utils/data.js';
const ResumeSkills = () => {
  return (
    <>
      {/*The Object.entries() method returns an array of a given TechnicalSkills own enumerable string-keyed property key-value pairs.*/}

      {Object.entries(TechnicalSkills).map(([subcategory, subSkills]) => (
        <div key={subcategory} className='-m-1 py-3'>
          <h3 className='mt-5 italic text-base'>{subcategory}</h3>
          <div className='flex flex-wrap'>
            {subSkills.map((skill) => (
              <div
                key={skill}
                className='p-2 m-1 rounded-xl font-medium bg-[#990011FF] text-white'
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ResumeSkills;
