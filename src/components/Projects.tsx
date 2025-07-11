'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeIn from './FadeIn';

const projects = [
  {
    title: 'Olshop',
    emoji: '🛒',
    description:
      'A responsive online shop UI built with Next.js and Tailwind CSS. Features interactive product cards, cart system, quantity controls, and clean UI using shadcn/ui.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    image: '/olshop-thumbnail.png',
    url: 'https://willy-olshop.vercel.app/',
  },
  {
    title: 'Blog Article',
    emoji: '📝',
    description:
      'A blogging platform with dynamic routing, article detail pages, and search functionality. Integrated with Blogger-WPH API and optimized with React Query for fast data fetching.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Query'],
    image: '/blog-thumbnail.png',
    url: 'https://blog-artikel-willy.vercel.app/',
  },
  {
    title: 'Movie App',
    emoji: '🎬',
    description:
      'A sleek movie discovery app that fetches real-time data from The Movie DB API. Includes trending sections, infinite scroll, responsive design, and dark mode UI.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'TMDB API'],
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
      <p className='text-center text-lg text-white mb-12 max-w-xl mx-auto'>
        A selection of real-world projects I’ve built using modern frontend
        technologies. Each one focuses on performance, accessibility, and clean
        UI/UX.
      </p>

      <div className='grid md:grid-cols-2 gap-10 max-w-5xl mx-auto'>
        {projects.map((project, index) => (
          <FadeIn key={index} delay={index * 0.2}>
            <div className='h-full'>
              <div className='bg-gray-800 rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full'>
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
                  <p className='text-white mb-4'>{project.description}</p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className='bg-blue-900 text-blue-100 px-3 py-1 rounded-full text-sm'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 font-semibold hover:underline mt-auto'
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
