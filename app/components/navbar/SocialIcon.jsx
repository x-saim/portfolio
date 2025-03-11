import Link from 'next/link';

const SocialIcon = ({ href, icon: Icon, onClick }) => (
  <Link
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
  >
    <div
      className='rounded-full shadow-lg shadow-black/5 dark:shadow-white/5 p-4 
        cursor-pointer hover:scale-105 ease-in duration-300 
        bg-white dark:bg-black text-black dark:text-white
        hover:bg-gray-50 dark:hover:bg-gray-900'
      onClick={onClick}
    >
      <Icon size={25} />
    </div>
  </Link>
);

export default SocialIcon; 