import React from 'react';
import data from '../../utils/data.json';

const ResumeSkills = () => {
  const renderSkills = () => {
    return Object.entries(data).map(([category, skills]) => (
      <div
        key={category}
        className='p-7 flow-root bg-white rounded-xl shadow-md'
      >
        <h3>{category}</h3>
        {Object.entries(skills).map(([subcategory, subSkills]) => (
          <div key={subcategory} className='-m-1 py-3'>
            <h3 className='mt-5 italic text-base'>{subcategory}</h3>
            <div className='flex flex-wrap'>
              {subSkills.map((skill, index) => (
                <div
                  key={index}
                  className='p-2 m-1 rounded-xl font-medium bg-[#990011FF] text-white'
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ));
  };

  return <div>{renderSkills()}</div>;
};

export default ResumeSkills;
