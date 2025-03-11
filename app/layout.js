import 'styles/globals.css';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://saimxamir.vercel.app'),
  title: {
    default: 'Saim Amir | Full-Stack Software Developer',
    template: '%s | Saim Amir'
  },
  description: 'Full-Stack Developer specializing in React, TypeScript, and AR development with engineering background',
  keywords: ['Full Stack Developer', 'Software Engineer', 'React', 'TypeScript', 'Node.js', 'AR Development', 'Unity', 'C#'],
  authors: [{ name: 'Saim Amir' }],
  creator: 'Saim Amir',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saimxamir.vercel.app',
    title: 'Saim Amir | Full-Stack Software Developer',
    description: 'Full-Stack Developer specializing in React, TypeScript, and AR development',
    siteName: 'Saim Amir Portfolio',
    images: [
      {
        url: '/og-image.png', // Create this image for social sharing
        width: 1200,
        height: 630,
        alt: 'Saim Amir - Full Stack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saim Amir | Full-Stack Software Developer',
    description: 'Full-Stack Developer specializing in React, TypeScript, and AR development',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className={`${inter.className} dark:bg-gray-900 dark:text-white`}>
        {children}
        <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'></div>
        <div className='bg-[#AD954C] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
        <SpeedInsights />
      </body>
    </html>
  );
}
