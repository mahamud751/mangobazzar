import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-[#491D0B] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2 max-w-xs">
            <div className="">
              <h2 className="text-3xl font-bold">
                <span className="text-[#491D0B]">Mango Bazzar</span>
              </h2>
            </div>
            <p className="text-[#491D0B] text-justify mt-4">
              A legacy of excellence in organic mangoes. Buy premium 100% organic mangoes & products in Bangladesh online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C09A44]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-[#491D0B] hover:text-white transition">About Us</Link></li>
              <li><Link href="/gifting" className="text-[#491D0B] hover:text-white transition">Gifting</Link></li>
              <li><Link href="/shop" className="text-[#491D0B] hover:text-white transition">Buy Mangoes</Link></li>
              <li><Link href="/blog" className="text-[#491D0B] hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="text-[#491D0B] hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C09A44]">Useful Links</h3>
            <ul className="space-y-2">
              <li><Link href="/dubai" className="text-[#491D0B] hover:text-white transition">Dubai</Link></li>
              <li><Link href="/singapore" className="text-[#491D0B] hover:text-white transition">Singapore</Link></li>
              <li><Link href="/shipping" className="text-[#491D0B] hover:text-white transition">Shipping Policy</Link></li>
              <li><Link href="/terms" className="text-[#491D0B] hover:text-white transition">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-[#491D0B] hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C09A44]">Connect & Follow</h3>
            <div className="flex space-x-4 mb-6">
              <Link href="#" className="text-gray-300 hover:text-white transition">
                <Image src="/instagram-icon.svg" width={24} height={24} alt="Instagram" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition">
                <Image src="/linkedin-icon.svg" width={24} height={24} alt="Linkedin" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition overflow-hidden">
                <Image src="/facebook-icon.svg" width={14} height={14} alt="Facebook" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition">
                <Image src="/youtube-icon.svg" width={24} height={24} alt="YouTube" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#C09A44BF] mt-12 pt-6 text-center text-[#491D0B]">
          <p>Copyright © 2025. All rights reserved by Mango Bazzar</p>
        </div>
      </div>
    </footer>
  );
}