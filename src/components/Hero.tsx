import Image from 'next/image';

export default function Hero() {
  return (
    <section className='min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-6 gap-10'>
      <div>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Hi, I&apos;m Willy 👋
        </h1>
        <p className='text-xl max-w-xl text-gray-600'>
          A passionate Frontend Developer crafting elegant UIs with React,
          TypeScript, and Tailwind CSS.
        </p>
        <a
          href='/resume.pdf'
          className='mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition'
        >
          Download Resume
        </a>
      </div>
      <div>
        <Image
          src='/willy-avatar.png'
          alt='Willy Avatar'
          width={300}
          height={300}
          className='rounded-full mx-auto'
          priority
        />
      </div>
    </section>
  );
}
