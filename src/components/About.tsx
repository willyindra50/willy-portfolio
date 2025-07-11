export default function About() {
  return (
    <section
      className='relative py-20 px-6 bg-gray-900 text-gray-100'
      id='about'
    >
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6'>👨‍💻 About Me</h2>
        <p className='text-lg leading-8 text-white'>
          I’m Willy — a frontend developer based in Indonesia with a passion for
          turning ideas into interactive, high-performance web experiences. I
          specialize in <strong>React</strong>, <strong>Next.js</strong>,{' '}
          <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>.
        </p>
        <p className='mt-4 text-lg leading-8 text-gray-100'>
          I come from a maritime background as a former Second Officer in the
          merchant navy, where I developed discipline, problem-solving, and
          attention to detail — all of which now fuel my journey in web
          development. I believe that technology is a powerful medium of
          expression, and I’m always eager to learn, collaborate, and build
          things that make an impact.
        </p>
      </div>

      {/* Wave Transition */}
      <div className='absolute bottom-0 left-0 w-full overflow-hidden leading-none'>
        <svg
          viewBox='0 0 500 50'
          preserveAspectRatio='none'
          className='w-full h-16 fill-gray-950 rotate-180'
        >
          <path d='M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z' />
        </svg>
      </div>
    </section>
  );
}
