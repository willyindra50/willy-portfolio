'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeIn from './FadeIn';

const projects = [
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
    <section className='py-20 px-6 bg-gray-100 dark:bg-gray-900' id='projects'>
      <h2 className='text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white font-sans'>
        Projects <span className='text-5xl align-middle'>✨</span>
      </h2>
      <div className='grid md:grid-cols-2 gap-10 max-w-5xl mx-auto'>
        {projects.map((project, index) => (
          <FadeIn key={index} delay={index * 0.2}>
            <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition hover:scale-[1.02] duration-300'>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={350}
                className='object-cover w-full h-60'
              />
              <div className='p-6'>
                <h3 className='text-2xl font-semibold mb-2 text-gray-900 dark:text-white font-sans flex items-center gap-2'>
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
                  className='text-blue-600 dark:text-blue-400 font-semibold hover:underline'
                >
                  View Project →
                </Link>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
