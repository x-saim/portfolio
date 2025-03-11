import React from 'react';
import { skillsData } from 'utils/data.js';

const SkillCard = ({ skill }) => (
  <div className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
    <div className='text-lg font-semibold text-black dark:text-white'>{skill.name}</div>
  </div>
);

const SkillsSection = () => (
  <div className='space-y-16'>
    {Object.entries(skillsData).map(([category, skills]) => (
      <div key={category}>
        <h3 className='text-sm font-medium text-gray-500 dark:text-gray-400 mb-6'>
          {category}
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default SkillsSection;
