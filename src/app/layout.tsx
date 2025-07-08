// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Willy Portfolio',
  description: 'Personal portfolio of Willy - Frontend Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.className} min-h-screen text-gray-800 dark:bg-gray-900 dark:text-white`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
