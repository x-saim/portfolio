import React from 'react';
import Image from 'next/image';
import AboutImg from '../../public/assets/AboutImg.jpg';
const About = () => {
  return (
    <div
      id='about'
      className='w-full lg:h-screen sm:pt-24 md:pt-24 p-2 flex items-center py-16'
    >
      <div className='max-w-[1920px]  m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='uppercase tracking-widest text-[#AD954C] text-center'>
            About Me
          </h2>
          <p className='mt-4'>
            Hi there! 👋 I&apos;m Saim Amir, and I bring a unique blend of
            professional engineering and management experience to the world of
            Full-Stack Web Development. With over 3+ years in the field of Civil
            Engineering, I&apos;ve honed my skills in problem-solving, project
            management, and innovation. Now, I&apos;m on an exciting journey to
            become a versatile Full-Stack Web Developer.
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
            While I explore the vast landscape of web development, I&apos;m also
            fascinated by the intersection of civil engineering and software
            development. This niche market holds immense potential for
            innovation, and I&apos;m excited to apply my cross-domain knowledge
            and experience in this dynamic field.
          </p>
          <h3 className='uppercase py-4 mt-4'>Join Me on this Journey 🤝</h3>
          <p>
            I&apos;m on the lookout for new adventures and full-time
            opportunities where I can make a meaningful impact. Whether
            it&apos;s collaborating on exciting projects or contributing to the
            growth of your team, I&apos;m ready to embark on this journey
            together.
          </p>
        </div>
        <div>
          <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image src={AboutImg} className='rounded-xl' alt='/' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
