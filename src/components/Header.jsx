import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
        {/* Logo section */}
        <div className="">
          <h2 className="text-3xl font-bold">
            <span className="text-[#491D0B]">Mango Bazar</span>
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <Link href="/" className="text-[#491D0B] hover:text-[#C09A44] font-medium duration-200 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-[#491D0B] hover:text-[#C09A44] font-medium duration-200 transition-colors">
            About
          </Link>
          <Link href="/shop" className="text-[#491D0B] hover:text-[#C09A44] font-medium duration-200 transition-colors">
            Shop
          </Link>
          <Link href="/blog" className="text-[#491D0B] hover:text-[#C09A44] font-medium duration-200 transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-[#491D0B] hover:text-[#C09A44] font-medium duration-200 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}