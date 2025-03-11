import React from 'react';
import Image from 'next/image';
import AboutImg from '../../public/assets/AboutImg.jpg';
const About = () => {
  return (
    <div
      id='about'
      className='w-full lg:h-screen sm:pt-[125px] md:pt-24 p-10 flex items-center py-16'
    >
      <div className='max-w-[1920px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='uppercase tracking-widest text-[#AD954C] text-center '>
            About Me
          </h2>
          <p className='mt-4'>
            Hi there! 👋 I'm Saim, a Full-Stack Software Developer with expertise in modern web technologies 
            and a unique background in engineering. With hands-on experience in both AR development and web applications, 
            I bring a diverse skill set spanning TypeScript, React, C#, and Unity development. My journey from civil 
            engineering to software development has equipped me with exceptional problem-solving abilities and a 
            detail-oriented approach that sets me apart in delivering robust technical solutions.
          </p>

          <h3 className='uppercase py-4 mt-4'>
            Technical Expertise & Innovation 💻
          </h3>
          <p>
            I specialize in full-stack development using technologies like TypeScript, React, Node.js, and .NET. 
            My recent work includes developing AR training applications with Unity and Meta XR, optimizing Shopify 
            plugins, and creating efficient AutoCAD automation tools. I'm passionate about writing clean, 
            performant code and implementing comprehensive testing strategies to ensure reliable applications.
          </p>

          <h3 className='uppercase py-4 mt-4'>Engineering Meets Software Development 🔧</h3>
          <p>
            My engineering background provides a unique perspective in software development, especially in 
            technical problem-solving and project management. I've successfully led multiple projects from 
            conception to deployment, working closely with clients to deliver solutions that exceed expectations. 
            My experience includes optimizing application performance, implementing robust testing processes, 
            and creating detailed technical documentation.
          </p>

          <h3 className='uppercase py-4 mt-4'>Looking for New Opportunities 🚀</h3>
          <p>
            I'm actively seeking full-stack development opportunities where I can leverage my technical skills 
            and cross-domain expertise. Whether it's building innovative web applications, developing AR solutions, 
            or creating automation tools, I'm ready to contribute to challenging projects and collaborate with 
            forward-thinking teams. Let's connect and discuss how we can create impactful solutions together!
          </p>
        </div>
        <div>
          <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center p-1 hover:scale-105 ease-in duration-300'>
            <Image
              src={AboutImg}
              className='rounded-xl'
              alt='/'
              width={400}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
