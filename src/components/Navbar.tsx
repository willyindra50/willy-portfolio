'use client';

import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className='w-full py-4 px-6 flex justify-between items-center sticky top-0 bg-white dark:bg-black z-50 shadow-md'>
      <Link href='#' className='font-bold text-xl text-primary'>
        Willy
      </Link>
      <div className='flex items-center gap-4'>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className='text-gray-800 dark:text-gray-100 hover:text-primary transition'
          >
            {item.label}
          </a>
        ))}
        <DarkModeToggle />
      </div>
    </nav>
  );
}
