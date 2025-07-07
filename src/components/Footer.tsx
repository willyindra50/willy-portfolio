export default function Footer() {
  return (
    <footer className='bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 px-6'>
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
        <p className='text-sm text-center md:text-left'>
          © {new Date().getFullYear()} Willy Indra. All rights reserved.
        </p>
        <div className='flex gap-6 text-lg'>
          <a
            href='mailto:willyindra21@gmail.com'
            className='hover:text-blue-600 dark:hover:text-blue-400 transition'
            aria-label='Email'
          >
            ✉️
          </a>
          <a
            href='https://github.com/willyindra50'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-600 dark:hover:text-blue-400 transition'
            aria-label='GitHub'
          >
            🐙
          </a>
          <a
            href='https://linkedin.com/in/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-600 dark:hover:text-blue-400 transition'
            aria-label='LinkedIn'
          >
            💼
          </a>
        </div>
      </div>
    </footer>
  );
}
