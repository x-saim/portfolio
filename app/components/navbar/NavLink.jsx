import { motion } from 'framer-motion';
import Link from 'next/link';

const NavLink = ({ link, isActive, onClick }) => (
  <motion.li
    className='h-3/4 flex items-center justify-center relative'
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
  >
    <Link
      className={`flex w-full items-center justify-center px-3 py-3 transition
        ${isActive 
          ? 'text-black dark:text-white' 
          : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
        }`}
      href={link.hash}
      onClick={onClick}
    >
      {link.name}
      {isActive && (
        <motion.span
          className='bg-white/90 dark:bg-black/90 rounded-full absolute inset-0 -z-10'
          layoutId='activeSection'
          transition={{
            type: 'spring',
            stiffness: 380,
            damping: 30,
          }}
        ></motion.span>
      )}
    </Link>
  </motion.li>
);

export default NavLink; 