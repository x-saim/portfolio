import React from 'react';
import { ProjectData } from '../../../utils/data';
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = () => {
  const renderProjects = () => {
    return (
      <>
        <div className='p-7 bg-white dark:bg-gray-900 rounded-xl shadow-md'>
          <h3 className='uppercase tracking-widest text-center text-2xl font-bold dark:text-white'>
            Projects
          </h3>
          {Object.entries(ProjectData).map(([projectId, project]) => (
            <div key={projectId} className='mb-5 flex mt-5'>
              <div className='w-full space-y-2 pl-3'>
                <div className='flex justify-between'>
                  <div>
                    <Link
                      target='_blank'
                      rel='noopener noreferrer'
                      href={project.link}
                    >
                      <p
                        className='text-lg bg-[#990011FF] border-2 border-black text-white
                     p-2 rounded-xl font-bold hover:scale-105'
                      >
                        {project.title}
                      </p>
                    </Link>
                  </div>

                  <div>
                    <span className='text-gray-400'>{project.date}</span>
                  </div>
                </div>
                <div>
                  <p className='text-md italic font-semibold text-[#990011FF]'>
                    {project.techStack}
                  </p>
                </div>
                <div className='text-gray-600 dark:text-gray-100'>
                  <ul style={{ listStyleType: 'disc' }}>
                    {project.description.map((point, index) => (
                      <li key={index} className='py-1'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return <div>{renderProjects()}</div>;
};

export default ProjectCard;
