'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeIn from './FadeIn';

const projects = [
  {
    title: 'Olshop',
    emoji: '🛒',
    description:
      'An elegant online shop UI built with Next.js and Tailwind CSS.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    image: '/olshop-thumbnail.png', // pastikan kamu punya file ini di /public
    url: 'https://willy-olshop.vercel.app/',
  },
  {
    title: 'Blog Article',
    emoji: '📝',
    description:
      'A blogging platform with markdown support and minimalist design.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/blog-thumbnail.png',
    url: 'https://blog-artikel-willy.vercel.app/',
  },
  {
    title: 'Movie App',
    emoji: '🎬',
    description: 'A movie search app using data from TMDB API.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/movie-thumbnail.jpg',
    url: 'https://movie-willy.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section className='py-20 px-6 bg-gray-900 text-white' id='projects'>
      <h2 className='text-4xl font-bold text-center mb-4 font-sans'>
        Projects <span className='text-5xl align-middle'>✨</span>
      </h2>
      <p className='text-center text-lg text-gray-600 dark:text-gray-300 mb-12'>
        Here are a few things I’ve built recently.
      </p>

      <div className='grid md:grid-cols-2 gap-10 max-w-5xl mx-auto'>
        {projects.map((project, index) => (
          <FadeIn key={index} delay={index * 0.2}>
            <div className='h-full'>
              <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full'>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={350}
                  className='object-cover w-full h-60'
                />
                <div className='p-6 flex flex-col flex-grow'>
                  <h3 className='text-2xl font-semibold mb-2 flex items-center gap-2'>
                    {project.title}
                    <span className='text-2xl'>{project.emoji}</span>
                  </h3>
                  <p className='text-gray-700 dark:text-gray-300 mb-4'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className='bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 dark:text-blue-400 font-semibold hover:underline mt-auto'
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <hr className='mt-20 border-gray-300 dark:border-gray-700 w-3/4 mx-auto' />
    </section>
  );
}
