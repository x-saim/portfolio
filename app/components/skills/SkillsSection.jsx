import React from 'react';

const SkillSection = ({ title, skills }) => (
  <div className='uppercase py-4 text-center'>
    <h3>{title}</h3>
    <div className='flex flex-wrap justify-center'>
      {skills.map((skill, index) => (
        <div
          key={index}
          className='p-2 rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'
        >
          <div>
            <Image
              src={skill.src}
              width={skill.width}
              height={skill.height}
              alt={skill.alt}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillsSection;
