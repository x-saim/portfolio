import React from 'react';
import Image from 'next/image';
const About = () => {
  return (
    <div
      id='about'
      className='w-full min-h-screen text-center pt-20 sm:pt-0 scroll-smooth'
    >
      <div className='max-w-[1240px] mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-32'>
        {/* Header Section */}
        <div className='text-center mb-8 sm:mb-16 animate-fade-in'>
          <h2 className='uppercase tracking-widest text-[#AD954C] text-lg sm:text-xl font-semibold mb-4 hover:text-[#8B7A3F] transition-colors duration-300'>
            About Me
          </h2>
          <div className='w-16 sm:w-24 h-1 bg-[#AD954C] mx-auto rounded-full transform hover:scale-110 transition-transform duration-300'></div>
        </div>

        {/* Content Column */}
        <div className='space-y-6 sm:space-y-8'>
          {/* Introduction Card */}
          <div className='rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-lg shadow-gray-400 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1'>
            <p className='text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-50'>
              Hi there! 👋 I'm Saim, a Full-Stack Software Developer with expertise in modern web technologies 
              and a unique background in engineering. With hands-on experience in both AR development and web applications, 
              I bring a diverse skill set spanning TypeScript, React, C#, and Unity development. My journey from civil 
              engineering to software development has equipped me with exceptional problem-solving abilities and a 
              detail-oriented approach that sets me apart in delivering robust technical solutions.
            </p>
          </div>

          {/* Info Sections */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            {/* Technical Expertise Section */}
            <div className='rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-lg shadow-gray-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-800'>
              <h3 className='uppercase font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center justify-center gap-2'>
                <span>Technical Expertise</span>
                <span className='text-xl sm:text-2xl'>💻</span>
              </h3>
              <p className='text-sm sm:text-base text-gray-700 dark:text-gray-50'>
                I specialize in full-stack development using technologies like TypeScript, React, Node.js, and .NET. 
                My recent work includes developing AR training applications with Unity and Meta XR, optimizing Shopify 
                plugins, and creating efficient AutoCAD automation tools. I'm passionate about writing clean, 
                performant code and implementing comprehensive testing strategies to ensure reliable applications.
              </p>
            </div>

            {/* Engineering Meets Software Section */}
            <div className='rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-lg shadow-gray-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-800'>
              <h3 className='uppercase font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center justify-center gap-2'>
                <span>Engineering Meets Software</span>
                <span className='text-xl sm:text-2xl'>🔧</span>
              </h3>
              <p className='text-sm sm:text-base text-gray-700 dark:text-gray-50'>
                My engineering background provides a unique perspective in software development, especially in 
                technical problem-solving and project management. I've successfully led multiple projects from 
                conception to deployment, working closely with clients to deliver solutions that exceed expectations. 
                My experience includes optimizing application performance, implementing robust testing processes, 
                and creating detailed technical documentation.
              </p>
            </div>
          </div>

          {/* Opportunities Section */}
          <div className='rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-lg shadow-gray-400 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1'>
            <h3 className='uppercase font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center justify-center gap-2'>
              <span>Looking for New Opportunities</span>
              <span className='text-xl sm:text-2xl'>🚀</span>
            </h3>
            <p className='text-sm sm:text-base text-gray-700 dark:text-gray-50'>
              I'm actively seeking full-stack development opportunities where I can leverage my technical skills 
              and cross-domain expertise. Whether it's building innovative web applications, developing AR solutions, 
              or creating automation tools, I'm ready to contribute to challenging projects and collaborate with 
              forward-thinking teams. Let's connect and discuss how we can create impactful solutions together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
