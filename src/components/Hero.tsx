'use client';

import Image from 'next/image';
import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section className='relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-6 bg-gradient-to-b bg-gray-900 pt-20'>
      {/* Top Wave */}
      <div className='absolute top-0 left-0 w-full overflow-hidden leading-none z-0 rotate-180'>
        <svg
          viewBox='0 0 1440 150'
          preserveAspectRatio='none'
          className='w-full h-24'
        >
          <defs>
            <linearGradient id='waveGradient' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor='#1f2937' />
              <stop offset='100%' stopColor='#111827' />
            </linearGradient>
          </defs>
          <path
            d='M0,0 C360,100 1080,0 1440,100 L1440,0 L0,0 Z'
            fill='url(#waveGradient)'
          />
        </svg>
      </div>

      <FadeIn yOffset={0} delay={0.1}>
        <div className='text-center md:text-left'>
          <h1 className='text-5xl md:text-6xl font-bold mb-4 text-white font-sans'>
            Hi, I&apos;m Willy 👋
          </h1>
          <p className='text-xl md:text-2xl text-white max-w-xl mx-auto md:mx-0'>
            I&apos;m a frontend developer passionate about building sleek,
            responsive web apps using <strong>React</strong>,{' '}
            <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>. I focus
            on clean code, intuitive UI, and great user experience.
          </p>
          <a
            href='/resume.pdf'
            className='mt-6 inline-block bg-blue-700 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-800 transition'
          >
            📄 Download Resume
          </a>
        </div>
      </FadeIn>

      <FadeIn yOffset={0} delay={0.2}>
        <div>
          <Image
            src='/willy-avatar.png'
            alt='Willy Avatar'
            width={160}
            height={160}
            className='rounded-xl shadow-lg w-40 h-40 md:w-56 md:h-56 object-cover mx-auto md:mx-0'
          />
        </div>
      </FadeIn>
    </section>
  );
}
