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
            Hi there! 👋 I&apos;m Saim, a software developer with a unique
            background combing software development, civil engineering, and
            project management. After spending over 3 years in the civil
            engineering industry, getting really good at problem-solving and
            managing diverse projects, I made the leap to Full-Stack Software
            Development in 2023 to pursue my passion for all things tech. I
            thrive on diving into new challenges and keeping up-to-date with the
            latest in technology. My drive comes from making cool stuff and
            solving real-world problems. Let's collaborate and create something
            amazing together!
          </p>

          <h3 className='uppercase py-4 mt-4'>
            Bridging Engineering and Development🌐
          </h3>
          <p>
            My background in Civil Engineering has instilled in me a strong
            foundation in critical thinking and attention to detail. I&apos;ve
            transitioned into the world of web and software development, aiming
            to leverage my engineering expertise to create cutting-edge
            solutions.
          </p>

          <h3 className='uppercase py-4 mt-4'> Seeking New Horizons 🌅</h3>
          <p>
            While I explore the vast landscape of software development, I&apos;m
            also fascinated by the intersection of civil engineering and
            software development. This niche market holds immense potential for
            innovation, and I&apos;m excited to apply my cross-domain knowledge
            and experience in this dynamic field.
          </p>
          <h3 className='uppercase py-4 mt-4'>Join Me on this Journey 🤝</h3>
          <p>
            I&apos;m on the lookout for new adventures and full-time
            opportunities where I can make a meaningful impact. Whether
            it&apos;s collaborating on exciting projects or contributing to the
            growth of your team, I&apos;m ready to embark on this journey
            together. Let's connect!
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
