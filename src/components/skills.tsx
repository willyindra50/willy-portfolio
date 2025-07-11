export default function Skills() {
  return (
    <section className='relative py-20 px-6 bg-gray-950 text-white' id='skills'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-8'>💼 Tech Stack & Skills</h2>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-lg'>
          <div className='bg-gray-800 py-3 px-4 rounded-lg shadow'>Next.js</div>
          <div className='bg-gray-800 py-3 px-4 rounded-lg shadow'>React</div>
          <div className='bg-gray-800 py-3 px-4 rounded-lg shadow'>
            TypeScript
          </div>
          <div className='bg-gray-800 py-3 px-4 rounded-lg shadow'>
            Tailwind CSS
          </div>
          <div className='bg-gray-800 py-3 px-4 rounded-lg shadow'>
            Framer Motion
          </div>
          <div className='bg-gray-800 py-3 px-4 rounded-lg shadow'>
            React Query
          </div>
          <div className='bg-gray-800 py-3 px-4 rounded-lg shadow'>
            ShadCN UI
          </div>
          <div className='bg-gray-800 py-3 px-4 rounded-lg shadow'>
            Git & GitHub
          </div>
          <div className='bg-gray-800 py-3 px-4 rounded-lg shadow'>
            Figma to Code
          </div>
          <div className='bg-gray-800 py-3 px-4 rounded-lg shadow'>
            REST API
          </div>
        </div>
      </div>

      {/* Wave Transition */}
      <div className='absolute bottom-0 left-0 w-full overflow-hidden leading-none'>
        <svg
          viewBox='0 0 500 50'
          preserveAspectRatio='none'
          className='w-full h-16 fill-gray-900'
        >
          <path d='M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z' />
        </svg>
      </div>
    </section>
  );
}
