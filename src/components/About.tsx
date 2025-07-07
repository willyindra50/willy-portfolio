// components/About.tsx

export default function About() {
  return (
    <section
      className='py-20 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100'
      id='about'
    >
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6'>👨‍💻 About Me</h2>
        <p className='text-lg leading-8 text-gray-600'>
          I&apos;m Willy, a Frontend Developer with a strong interest in
          building fast, clean, and aesthetically pleasing web interfaces.
          I&apos;m currently focused on using{' '}
          <strong>React, Next.js, TypeScript</strong>, and{' '}
          <strong>Tailwind CSS</strong> to create amazing user experiences.
        </p>
        <p className='mt-4 text-lg leading-8 text-gray-600'>
          Coming from a maritime background as a former Second Officer in the
          merchant navy, I discovered coding as a space for limitless
          expression. I believe technology can be a form of art, and I&apos;m
          eager to keep growing in this field.
        </p>
      </div>
    </section>
  );
}
