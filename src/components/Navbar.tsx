// components/Navbar.tsx
'use client';

import Link from 'next/link';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className='w-full h-16 px-6 flex justify-between items-center sticky top-0 bg-gray-800 backdrop-blur z-50 shadow-md'>
      <Link href='#' className='font-bold text-xl text-blue-600'>
        Willy
      </Link>
      <div className='flex items-center gap-6'>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className='text-gray-800 dark:text-gray-100 hover:text-blue-600 transition'
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
