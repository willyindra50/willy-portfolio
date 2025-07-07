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
    <html lang='en'>
      <body
        className={`${inter.className} bg-white text-gray-800 dark:bg-gray-900 dark:text-white`}
      >
        <Navbar />
        <main className='pt-20'>{children}</main>
      </body>
    </html>
  );
}
