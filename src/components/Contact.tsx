'use client';

import FadeIn from './FadeIn';

export default function Contact() {
  return (
    <section
      id='contact'
      className='py-20 px-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white'
    >
      <div className='max-w-2xl mx-auto text-center'>
        <FadeIn>
          <h2 className='text-4xl font-bold mb-6'>📫 Get in Touch</h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className='text-lg mb-6'>
            Have a question or just want to say hi? I&apos;d love to hear from
            you. Reach out via any platform below:
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className='flex justify-center gap-6 flex-wrap text-lg'>
            <a
              href='mailto:willyindra21@gmail.com'
              className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300'
            >
              ✉️ Email
            </a>
            <a
              href='https://linkedin.com/in/yourprofile'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300'
            >
              💼 LinkedIn
            </a>
            <a
              href='https://github.com/willyindra50'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300'
            >
              🐙 GitHub
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
