import React from 'react';
import { skillsData } from 'utils/data.js';
import Image from 'next/image';

const SkillsSection = () => (
  <div className='uppercase py-2 text-center'>
    <br />
    {Object.entries(skillsData).map(([subCategory, subSkills]) => (
      <div key={subCategory} className='text-center'>
        <p className='mt-5 m-auto bg-[white] dark:bg-gray-500 border-2 dark:text-white font-semibold border-black rounded-xl text-l py-2 '>
          {subCategory}
        </p>
        <div className='flex flex-wrap justify-center'>
          {subSkills.map((skill, index) => (
            <div
              key={index}
              className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'
            >
              <div>
                <Image src={skill.src} width={60} height={60} alt={skill.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default SkillsSection;
