import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Portfolio
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="text-lg text-gray-300 hover:text-white transition-colors duration-300">
            About
          </Link>
          <Link href="#projects" className="text-lg text-gray-300 hover:text-white transition-colors duration-300">
            Projects
          </Link>
          <Link href="#contact" className="text-lg text-gray-300 hover:text-white transition-colors duration-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
