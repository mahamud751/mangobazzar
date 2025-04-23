import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className="bg-gradient-to-b from-[#FAF5E9] to-[#fffbea]">
      <div className="container mx-auto px-4 py-16 pt-[100px]">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#C09A44]">
              Mango Season <br />
              Bookings Started
            </h1>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#491D0B]">
                100% Carbide free{' '}
                <span className="text-[#C09A44] font-bold">Premium mangoes</span>
              </h3>
              <p className="text-[#6B4C3B] text-base md:text-lg">
                Naturally ripened with a rich taste and aroma straight from Chapai Nawabganj.
              </p>
            </div>

            <Link href="/shop" className="inline-block">
              <button className="bg-[#C09A44] text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md cursor-pointer hover:shadow-lg hover:bg-[#b58a35] transition-all duration-200 ease-in-out">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Image section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full h-72 md:h-[420px] max-w-lg rounded-3xl overflow-hidden shadow-lg border border-[#f1e6cc]">
              <Image
                src="https://i.ibb.co/nM8yGVfF/banner-mango.webp"
                alt="Fresh Mangoes from Chapai Nawabganj"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

