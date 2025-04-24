import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import BackToTopButton from './BackToTopButton';

export default function Footer() {
  return (
    <footer className="bg-white text-[#491D0B] pt-20 pb-10 relative border-t border-[#f4f4f4]">
      {/* Soft Top Shadow */}
      <div className="absolute top-0 left-0 right-0 h-6 shadow-[0_-10px_20px_-10px_rgba(73,29,11,0.2)] z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="relative w-[180px] h-[60px] sm:w-[160px] sm:h-[50px] block"
            >
              <Image
                src="https://i.ibb.co/RT3pvYMb/logo.png"
                alt="Mango Bazar"
                fill
                className="object-contain hover:opacity-90 transition-opacity duration-300"
                priority
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-justify text-[#5c2b14] max-w-xs">
              A legacy of excellence in organic mangoes. Buy premium 100% organic mangoes & products in Bangladesh online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C09A44]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[ 
                { href: '/about', label: 'About Us' },
                { href: '/gifting', label: 'Gifting' },
                { href: '/shop', label: 'Buy Mangoes' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#C09A44] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C09A44]">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              {[ 
                { href: '/dubai', label: 'Dubai' },
                { href: '/singapore', label: 'Singapore' },
                { href: '/shipping', label: 'Shipping Policy' },
                { href: '/terms', label: 'Terms & Conditions' },
                { href: '/privacy', label: 'Privacy Policy' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#C09A44] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C09A44]">Connect & Follow</h3>
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="hover:scale-110 hover:text-[#C09A44] transition-all"
              >
                <Instagram size={24} className="text-[#5c2b14]" />
              </Link>
              <Link
                href="#"
                className="hover:scale-110 hover:text-[#C09A44] transition-all"
              >
                <Linkedin size={24} className="text-[#5c2b14]" />
              </Link>
              <Link
                href="#"
                className="hover:scale-110 hover:text-[#C09A44] transition-all"
              >
                <Facebook size={24} className="text-[#5c2b14]" />
              </Link>
              <Link
                href="#"
                className="hover:scale-110 hover:text-[#C09A44] transition-all"
              >
                <Youtube size={24} className="text-[#5c2b14]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-[#e9e4da] text-center text-sm text-[#5c2b14]">
          <p>Copyright © 2025. All rights reserved by <span className="font-semibold">Mango Bazar</span>.</p>
        </div>
      </div>

      <BackToTopButton />
    </footer>
  );
}
