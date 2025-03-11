import { motion } from 'framer-motion';
import NavLink from './NavLink';
import { navLinks } from '@/utils/data';

const DesktopNav = ({ activeSection, setActiveSection }) => (
  <div>
    <motion.div
      className='fixed top-6 left-1/2 h-[3.25rem] 
        border border-black/5 dark:border-white/5
        bg-white/80 dark:bg-black/80 
        shadow-lg shadow-black/5 dark:shadow-white/5
        backdrop-blur-[0.5rem] w-[31rem] rounded-full
        hidden md:flex'
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
    ></motion.div>
    <nav className='flex fixed left-1/2 h-12 -translate-x-1/2 py-0 top-[1.7rem]'>
      <ul className='w-[22rem] items-center justify-center gap-y-1 text-md font-medium flex-nowrap gap-5 hidden md:flex'>
        {navLinks.map(link => (
          <NavLink
            key={link.name}
            link={link}
            isActive={link.name === activeSection}
            onClick={() => setActiveSection(link.name)}
          />
        ))}
      </ul>
    </nav>
  </div>
);

export default DesktopNav; 