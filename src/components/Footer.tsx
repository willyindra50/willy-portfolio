export default function Footer() {
  return (
    <footer className='py-6 px-4 text-center bg-gray-900 text-gray-400 text-sm'>
      <p className='text-sm text-center'>
        © {new Date().getFullYear()} Willy Indra. All rights reserved.
      </p>
    </footer>
  );
}
