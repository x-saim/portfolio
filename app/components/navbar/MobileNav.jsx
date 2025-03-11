import Link from 'next/link';
import { navLinks } from '@/utils/data';
import SocialIcon from './SocialIcon';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const MobileNav = ({ navOpen, handleNav }) => (
  <div
    className={`fixed left-0 top-0 h-screen w-full 
      bg-white dark:bg-black
      p-10 ease-in duration-500 z-[998]
      ${navOpen ? 'translate-x-0' : 'translate-x-[-100%]'}`}
  >
    <div className='mt-[100px]'>
      <div className='border-b border-black/10 dark:border-white/10'>
        <p className='w-full py-4 text-center text-2xl font-bold text-black dark:text-white'>
          Welcome to my Portfolio!
        </p>
      </div>
    </div>

    <div className='py-4 flex flex-col text-center justify-center'>
      <ul className='py-4 text-xl font-medium'>
        {navLinks.map(link => (
          <Link key={link.name} href={link.hash}>
            <li 
              className='py-3 text-gray-600 dark:text-gray-400 
                hover:text-black dark:hover:text-white transition-colors'
              onClick={handleNav}
            >
              {link.name}
            </li>
          </Link>
        ))}
      </ul>

      <div className='pt-10'>
        <p className='text-black dark:text-white text-xl font-bold mb-6'>
          Let&apos;s Connect
        </p>

        <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
          <SocialIcon href='https://www.linkedin.com/in/saimamir/' icon={FaLinkedinIn} />
          <SocialIcon href='https://github.com/x-saim' icon={FaGithub} />
          <SocialIcon href='/#contact' icon={AiOutlineMail} onClick={handleNav} />
          <SocialIcon href='/#about' icon={BsFillPersonLinesFill} onClick={handleNav} />
        </div>
      </div>
    </div>
  </div>
);

export default MobileNav; 