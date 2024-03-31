import React from 'react';
import { ExperienceSections } from '../../../utils/data';
import Link from 'next/link';
import Image from 'next/image';
const ExperienceCard = () => {
  const renderExperience = () => {
    return (
      <>
        <div className='p-7 bg-white dark:bg-gray-900 rounded-xl shadow-md'>
          <h3 className='uppercase tracking-widest text-center text-2xl font-bold dark:text-white'>
            Experience
          </h3>
          {Object.entries(ExperienceSections).map(([subExp, subSection]) => (
            <div key={subExp} className='mb-5 flex mt-5'>
              <div className='pr-5'>
                <Link href=''>
                  {' '}
                  <Image
                    src={subSection.logo}
                    width={75}
                    height={75}
                    alt='/'
                    className='rounded-xl'
                  />
                </Link>
              </div>
              <div className='w-full space-y-5'>
                <div className='flex justify-between'>
                  <div>
                    <p className='text-lg'>{subSection.title}</p>
                    <span className='text-gray-400'>
                      <Link
                        target='_blank'
                        href={subSection.companyURL}
                        rel='noopener noreferrer'
                        className='underline'
                      >
                        {subSection.company}
                      </Link>
                    </span>
                  </div>
                  <div>
                    <span className='text-gray-400'>{subSection.date}</span>
                  </div>
                </div>
                <div className='text-gray-600 dark:text-gray-100'>
                  <ul style={{ listStyleType: 'disc' }}></ul>
                  {subSection['description'].map((point) => (
                    <li key={point} className='py-2'>
                      {point}
                    </li>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return <div>{renderExperience()}</div>;
};

export default ExperienceCard;
