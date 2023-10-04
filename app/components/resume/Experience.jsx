import React from 'react';

const Experience = () => {
  const renderExperience = () => {
    return <></>;
  };

  return <div>{renderExperience()}</div>;
};

export default Experience;

<div className='p-7 bg-white rounded-xl shadow-md'>
  <h3 className='text-md'>Experience</h3>
  <div className='mb-5 flex mt-5 '>
    <div className='pr-5 '>
      <Link href='https://www.engineeringlink.ca/'>
        {' '}
        <Image
          src='/assets/resume/EngLink.png'
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
          <p className='text-lg'>Engineer-in-Training</p>
          <span className='text-gray-400'>Engineering Link Inc.</span>
        </div>
        <div>
          <div className='flex'>
            <div className=''>
              <div>Full-Time</div>
              <span className='text-gray-400'>May 2021 - March 2023</span>
            </div>
          </div>
        </div>
      </div>
      <p className='text-gray-600'>
        <ul style={{ listStyleType: 'disc' }}>
          <li className='py-2'>
            Effectively managed up to 20 diverse projects simultaneously, with
            budgets ranging from $100,000 to $10 million, in various sectors
            such as commercial, institutional, industrial, and residential.
          </li>
          <li className='py-2'>
            Managed full project life cycles with meticulous oversight,
            encompassing site investigations, comprehensive condition
            assessments, design and tender processes, as well as construction
            review and contract administration.
          </li>
          <li className='py-2'>
            Utilized Python for data processing and in-depth analysis, achieving
            a 90% time reduction and $2000 cost savings for a curtain wall
            glazing survey. This analysis contributed to a comprehensive repairs
            strategy plan summary.
          </li>
          <li className='py-2'>
            Proactively addressed potential project challenges, leading to
            significant cost savings of $100,000 in repairs and preventing a
            3-month extension to the project schedule, successfully meeting
            client expectations.
          </li>
          <li className='py-2'>
            Effectively engineered and developed project scope and design
            requirements for diverse restoration projects, including roofing
            systems, reinforced concrete parking garages, waterproofing,
            exterior walls, and windows.
          </li>
        </ul>
      </p>
    </div>
  </div>
  <div className='mb-5 flex mt-5 '>
    <div className='pr-5 '>
      <Link href='https://sobotec.com/'>
        {' '}
        <Image
          src='/assets/resume/Sobotec_Logo.png'
          width={75}
          height={75}
          alt='/'
          className='rounded-xl'
        />
      </Link>
    </div>
    <br></br>
    <div className='w-full space-y-5'>
      <div className='flex justify-between'>
        <div>
          <p className='text-lg'>Structural Engineering Intern</p>
          <span className='text-gray-400'>Sobotec Ltd.</span>
        </div>
        <div>
          <div className='flex'>
            <div className=''>
              <div>Full-Time</div>
              <span className='text-gray-400'>May 2018 - August 2019</span>
            </div>
          </div>
        </div>
      </div>
      <p className='text-gray-600'>
        <ul style={{ listStyleType: 'disc' }}>
          <li className='py-2'>
            Demonstrated expertise in design codes and standards, including ASD,
            IBC, ASCE 7, ADM, LSD, NBCC, OBC, and NASPEC, to conduct connection
            design of aluminum exterior wall cladding panel systems in the USA
            and Canada.
          </li>
          <li className='py-2'>
            Conducted thorough analysis of connections between aluminum
            composite material (ACM) panels, steel sub-framing materials, and
            extruded aluminum profiles, ensuring structural integrity and
            performance.
          </li>
          <li className='py-2'>
            Managed a portfolio of up to 15 projects, effectively prioritizing
            tasks, adhering to project timelines, and consistently delivering on
            all project requirements.
          </li>

          <li className='py-2'>
            Reviewed and revised structural drawings with meticulous attention
            to detail using AutoCAD, ensuring precise accuracy and adherence to
            project specifications
          </li>
        </ul>
      </p>
    </div>
  </div>
</div>;
