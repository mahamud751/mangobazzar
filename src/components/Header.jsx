import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
        {/* Logo section */}
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="MangoBazzar Logo"
            width={180} 
            height={50}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="/shop" className="text-gray-700 hover:text-gray-900 transition-colors">
            Shop
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}