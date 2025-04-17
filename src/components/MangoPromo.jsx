import Image from 'next/image';
import Link from 'next/link';

export default function MangoPromo() {
  return (
    <section className="relative overflow-hidden h-[400px] md:h-[400px] my-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/mango-promo-banner.png"
          alt="Mango orchard background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#C09A44] to-transparent"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why you are late in testing the best mango from the orchard of Chapel Nawabganj?
            </h2>

            <p className="text-lg text-white mb-8 leading-relaxed">
              We believe in the magic of love, and what better way to express it than through the golden goodness of our handpicked mangoes. Each piece is a symbol of our commitment to quality, freshness, and the irresistible allure of nature's sweetest gift.
            </p>

            <Link href="/shop" className="inline-block space-y-4">
              <button className="bg-[#491D0B] text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg cursor-pointer transition-all transform hover:scale-105">
                Shop Now Quickly
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}