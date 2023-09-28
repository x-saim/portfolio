import 'styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] }); //latin

export const metadata = {
  title: 'Saim Amir | Portfolio',
  description: 'A Full-Stack Web Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
