import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Navbar from '../components/Navbar';
import ResumeSkills from '../components/ResumeSkills';
const Resume = () => {
  return (
    <>
      <div className='flex items-center pl-3 space-x-1 pt bg-gray-400 rounded-t-xl h-7'>
        <span className='w-2 h-2 bg-white rounded-full'></span>
        <span className='w-2 h-2 bg-white rounded-full'></span>
        <span className='w-2 h-2 bg-white rounded-full'></span>
      </div>
      <div className='bg-gray-100 antialiased '>
        <main className='main-container py-5 ml-4 mr-4'>
          <div className='grid gap-5 lg:grid-cols-3'>
            {/* Left Side */}
            <div className='space-y-5'>
              {/* User Block */}
              <div className='shadow rounded-xl overflow-hidden'>
                <div
                  className='h-32 bg-cover'
                  style={{
                    backgroundImage: "url('/assets/resume/galaxy.jpeg')",
                  }}
                ></div>
                <div className='pt-10 p-3 bg-white shadow-md relative flex flex-col justify-center items-center'>
                  <Link href='/resume'>
                    <Image
                      src='/assets/resume/profilepicture.png'
                      alt='Avatar'
                      className='rounded-xl'
                      width={250}
                      height={250}
                    />
                  </Link>

                  <div className='text-xl font-semibold mb-2 mt-2'>
                    Saim Amir
                  </div>
                  <div className='text-md text-gray-400 mb-3'>
                    Full Stack Developer
                  </div>
                </div>
              </div>

              {/* Info Block */}
              <div className='p-7 bg-white rounded-xl shadow-md'>
                <h3 className=''>Information</h3>
                <div className='space-y-4 mt-4'>
                  <div className='flex justify-between'>
                    <div className='text-gray-400'>Location</div>
                    <div className='font-medium text-right text-gray-600'>
                      Greater Toronto Area (GTA)
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <div className='text-gray-400'>Experience</div>
                    <div className='font-medium text-right text-gray-600'>
                      3+ years
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <div className='text-gray-400'>Availability</div>
                    <div className='font-medium text-right text-gray-600'>
                      1 week
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <div className='text-gray-400'>Relocation</div>
                    <div className='font-medium text-right text-gray-600'>
                      Yes
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Block */}
              {/* <div className='p-7 flow-root bg-white rounded-xl shadow-md '>
                <h3>Technical Skills</h3>
                <h3 className='mt-5 italic text-base'>Programming Langauges</h3>
                <div className='-m-1 py-3 flex flex-wrap text-[#FCF6F5FF]'>
                  <div
                    className='p-2 m-1 rounded-xl font-medium bg-[#990011FF]  
                '
                  >
                    JavaScript
                  </div>
                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Python
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    TypeScript
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Ruby
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    HTML
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    EJS
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    CSS
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    SASS
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    SQL
                  </div>
                </div>
                <h3 className='mt-5 italic text-base'>Libraries/Frameworks</h3>
                <div className='-m-1 py-3 flex flex-wrap'>
                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Node.js
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Express.js
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    React
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Redux
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    jQuery
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Axios
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    AJAX
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Ruby on Rails
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Mongoose
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Bootstrap
                  </div>
                </div>

                <h3 className='mt-5 italic text-base'>Testing</h3>
                <div className='-m-1 py-3 flex flex-wrap'>
                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Mocha
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Chai
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Jest
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Storybook
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Cypress
                  </div>
                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Rspec
                  </div>
                </div>
                <h3 className='mt-5 italic text-base'>Database Management</h3>
                <div className='-m-1 py-3 flex flex-wrap'>
                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    PostgreSQL
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    MongoDB
                  </div>
                </div>
                <h3 className='mt-5 italic text-base'>Development</h3>
                <div className='-m-1 py-3 flex flex-wrap'>
                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Git
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Github
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Visual Studio Code
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Linux
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Postman
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Heroku
                  </div>
                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Vercel
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Netlify
                  </div>

                  <div className='p-2 m-1 rounded-xl bg-[#feda6d] text-black'>
                    Figma
                  </div>
                </div>
              </div> */}
              <ResumeSkills />
            </div>

            {/* Right Side */}
            <div className='space-y-5 lg:col-span-2'>
              {/* About Me Block */}
              <div className='p-7 pb-0 bg-white rounded-xl shadow-md'>
                <h3 className=''>About me</h3>
                <p className='text-gray-600 mb-1 py-2'>
                  Experienced civil engineer-in-training with over 3 years of
                  experience, now looking to transition into full-stack web
                  development.
                </p>
                <p className='text-gray-600 mb-1 py-2'>
                  Proficient in JavaScript, React, Node.js, Express.js, SQL, and
                  various other technologies. I combine my engineering expertise
                  with web development skills to deliver innovative solutions.
                </p>
                <p className='text-gray-600 mb-5'>
                  I am a meticulous problem solver, approaching challenges with
                  a user-centric mindset. I am dedicated to continuously
                  updating my knowledge with the latest emerging technologies to
                  drive cutting-edge projects.
                </p>
                <div className='flex flex-col space-y-4'>
                  <Link href='mailto:saimxamir@gmail.com' className='flex'>
                    <AiOutlineMail size={20} style={{ marginRight: '1rem' }} />
                    <span>saimxamir@gmail.com</span>
                  </Link>
                  <a href='#0' className='mail-link social-link-hover'>
                    <i className='bx bx-at text-xl'></i>
                  </a>
                  <ul className='flex space-x-5'>
                    <li>
                      <a href='#0' className='social-link-hover'>
                        <i className='bx bxl-facebook-circle text-2xl'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#0' className='social-link-hover'>
                        <i className='bx bxl-twitter text-2xl'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#0' className='social-link-hover'>
                        <i className='bx bxl-github text-2xl'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience Block */}
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
                        <span className='text-gray-400'>
                          Engineering Link Inc.
                        </span>
                      </div>
                      <div>
                        <div className='flex'>
                          <div className=''>
                            <div>Full-Time</div>
                            <span className='text-gray-400'>
                              May 2021 - March 2023
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className='text-gray-600'>
                      <ul style={{ listStyleType: 'disc' }}>
                        <li className='py-2'>
                          Effectively managed up to 20 diverse projects
                          simultaneously, with budgets ranging from $100,000 to
                          $10 million, in various sectors such as commercial,
                          institutional, industrial, and residential.
                        </li>
                        <li className='py-2'>
                          Managed full project life cycles with meticulous
                          oversight, encompassing site investigations,
                          comprehensive condition assessments, design and tender
                          processes, as well as construction review and contract
                          administration.
                        </li>
                        <li className='py-2'>
                          Utilized Python for data processing and in-depth
                          analysis, achieving a 90% time reduction and $2000
                          cost savings for a curtain wall glazing survey. This
                          analysis contributed to a comprehensive repairs
                          strategy plan summary.
                        </li>
                        <li className='py-2'>
                          Proactively addressed potential project challenges,
                          leading to significant cost savings of $100,000 in
                          repairs and preventing a 3-month extension to the
                          project schedule, successfully meeting client
                          expectations.
                        </li>
                        <li className='py-2'>
                          Effectively engineered and developed project scope and
                          design requirements for diverse restoration projects,
                          including roofing systems, reinforced concrete parking
                          garages, waterproofing, exterior walls, and windows.
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
                            <span className='text-gray-400'>
                              May 2018 - August 2019
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className='text-gray-600'>
                      <ul style={{ listStyleType: 'disc' }}>
                        <li className='py-2'>
                          Demonstrated expertise in design codes and standards,
                          including ASD, IBC, ASCE 7, ADM, LSD, NBCC, OBC, and
                          NASPEC, to conduct connection design of aluminum
                          exterior wall cladding panel systems in the USA and
                          Canada.
                        </li>
                        <li className='py-2'>
                          Conducted thorough analysis of connections between
                          aluminum composite material (ACM) panels, steel
                          sub-framing materials, and extruded aluminum profiles,
                          ensuring structural integrity and performance.
                        </li>
                        <li className='py-2'>
                          Managed a portfolio of up to 15 projects, effectively
                          prioritizing tasks, adhering to project timelines, and
                          consistently delivering on all project requirements.
                        </li>

                        <li className='py-2'>
                          Reviewed and revised structural drawings with
                          meticulous attention to detail using AutoCAD, ensuring
                          precise accuracy and adherence to project
                          specifications
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Resume;
