// components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20'>
      <div className='text-center md:text-left'>
        <h1 className='text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white font-sans'>
          Hi, I&apos;m Willy 👋
        </h1>
        <p className='text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-xl'>
          A passionate Frontend Developer crafting elegant UIs with React,
          TypeScript, and Tailwind CSS.
        </p>
        <a
          href='/resume.pdf'
          className='mt-6 inline-block bg-blue-700 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-800 transition'
        >
          📄 Download Resume
        </a>
      </div>
      <div>
        <Image
          src='/willy-avatar.png'
          alt='Willy Avatar'
          width={220}
          height={220}
          className='rounded-full shadow-lg'
        />
      </div>
    </section>
  );
}
