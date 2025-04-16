import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top Section */}
      <div className="bg-[#384a5e]">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <Image 
                  src="/logo.png" 
                  alt="Mango Vaiya Logo" 
                  width={120}
                  height={60}
                />
              </div>
              <p className="text-white">
                Welcome to Mango Vaiya, where Fresh, Authentic & Safe mangoes from Chapai Nawabganj await you
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-white hover:text-green-600 transition">Home</Link></li>
                <li><Link href="/about" className="text-white hover:text-green-600 transition">About</Link></li>
                <li><Link href="/shop" className="text-white hover:text-green-600 transition">Shop</Link></li>
                <li><Link href="/blog" className="text-white hover:text-green-600 transition">Blog</Link></li>
                <li><Link href="/contact" className="text-white hover:text-green-600 transition">Contact</Link></li>
              </ul>
            </div>

            {/* Mango Varieties */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Our Mangoes</h4>
              <ul className="space-y-2">
                <li><Link href="/mango/kintsapat" className="text-white hover:text-green-600 transition">Kintsapat Mango</Link></li>
                <li><Link href="/mango/amrapali" className="text-white hover:text-green-600 transition">Amrapali Mango</Link></li>
                <li><Link href="/mango/langra" className="text-white hover:text-green-600 transition">Langra Mango</Link></li>
                <li><Link href="/mango/gopalbhog" className="text-white hover:text-green-600 transition">Gopalbhog Mango</Link></li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
              <p className="text-white mb-4">
                Don't miss our future updates! Follow us on social media.
              </p>
              <div className="flex space-x-4">
                {/* <Link href="https://facebook.com" className="text-white hover:text-green-600 flex items-center justify-center w-12 h-12 border-gray-100 border-2 fill-white rounded-full transition">
                  <Image src="/fb-icon.svg" width={18} height={18} alt="Facebook" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-green-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200 text-sm">©2024 Mango Vaiya. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <Link href="/terms" className="text-green-200 hover:text-white text-sm">Terms</Link>
              <Link href="/privacy" className="text-green-200 hover:text-white text-sm">Privacy</Link>
              <Link href="/sitemap" className="text-green-200 hover:text-white text-sm">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}