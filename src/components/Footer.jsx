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
          <div className="md:col-span-2 max-w-sm">
            <h2 className="text-3xl font-bold text-[#491D0B]">
              Mango <span className="text-[#C09A44]">Bazar</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-justify text-[#5c2b14]">
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
              {[
                { href: '#', src: '/instagram-icon.svg', alt: 'Instagram' },
                { href: '#', src: '/linkedin-icon.svg', alt: 'LinkedIn' },
                { href: '#', src: '/facebook-icon.svg', alt: 'Facebook', size: 16 },
                { href: '#', src: '/youtube-icon.svg', alt: 'YouTube' },
              ].map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  className="hover:scale-110 hover:drop-shadow-[0_2px_4px_rgba(192,154,68,0.4)] transition-transform"
                >
                  <Image src={social.src}
                    width={social.size || 24}  
                    height={social.size || 24}
                    alt={social.alt} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-[#e9e4da] text-center text-sm text-[#5c2b14]">
          <p>Copyright © 2025. All rights reserved by <span className="font-semibold">Mango Bazar</span>.</p>
        </div>
      </div>

      <BackToTopButton/>
    </footer>
  );
}
