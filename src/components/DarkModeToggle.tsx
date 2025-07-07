'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const classList = document.documentElement.classList;
    if (classList.contains('dark')) setIsDark(true);
  }, []);

  const toggleDark = () => {
    const classList = document.documentElement.classList;
    classList.toggle('dark');
    setIsDark(classList.contains('dark'));
  };

  return (
    <button
      onClick={toggleDark}
      className='p-2 rounded-xl border hover:bg-gray-200 dark:hover:bg-gray-700 transition'
      aria-label='Toggle dark mode'
    >
      {isDark ? <Sun className='w-5 h-5' /> : <Moon className='w-5 h-5' />}
    </button>
  );
}
