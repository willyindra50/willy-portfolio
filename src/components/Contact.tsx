// components/Contact.tsx

export default function Contact() {
  return (
    <section className='py-20 px-6 bg-gray-100 text-gray-800' id='contact'>
      <div className='max-w-2xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6'>📫 Contact</h2>
        <p className='text-lg mb-6'>
          Want to connect? Feel free to send me a message or reach out through
          any of the platforms below:
        </p>
        <div className='flex justify-center gap-6 flex-wrap text-lg'>
          <a
            href='mailto:your.email@example.com'
            className='text-blue-600 hover:underline'
          >
            ✉️ Email
          </a>
          <a
            href='https://linkedin.com/in/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:underline'
          >
            💼 LinkedIn
          </a>
          <a
            href='https://github.com/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:underline'
          >
            🐙 GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
