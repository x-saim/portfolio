import 'styles/globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Saim Amir | Portfolio',
  description: 'A Full-Stack Web Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className={`${inter.className} dark:bg-gray-900 dark:text-white`}>
        {children}=
        <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'></div>
        <div className='bg-[#AD954C] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
      </body>
    </html>
  );
}
