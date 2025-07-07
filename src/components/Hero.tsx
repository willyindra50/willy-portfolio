// components/Hero.tsx

export default function Hero() {
  return (
    <section className='h-[85vh] flex flex-col justify-center items-center text-center px-6'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white leading-tight'>
        Hi, I&apos;m Willy <span className='inline-block animate-wave'>👋</span>
      </h1>
      <p className='text-lg sm:text-xl max-w-2xl text-gray-600 dark:text-gray-300'>
        Frontend Developer crafting beautiful and performant user interfaces
        with <strong className='text-gray-800 dark:text-gray-100'>React</strong>
        ,{' '}
        <strong className='text-gray-800 dark:text-gray-100'>TypeScript</strong>
        , and{' '}
        <strong className='text-gray-800 dark:text-gray-100'>
          Tailwind CSS
        </strong>
        .
      </p>
      <a
        href='/resume.pdf'
        download='Willy_Frontend_Resume.pdf'
        className='mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition'
      >
        Download Resume
      </a>
    </section>
  );
}
