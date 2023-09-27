import 'styles/globals.css';
// import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] }); //latin
const montSerrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });

export const metadata = {
  title: 'Saim Amir | Portfolio',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={montSerrat.className}>{children}</body>
    </html>
  );
}
