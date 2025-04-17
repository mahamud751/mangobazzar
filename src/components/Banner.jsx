import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
    return (
        <div className="bg-gradient-to-b from-[#ebebeb] to-yellow-50">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Text content */}
                    <div className="lg:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#C09A44]">
                            Mango Season <br />
                            Bookings Started
                        </h1>

                        <div className="space-y-4">
                            <h3 className='text-[#491D0B] text-xl font-bold'>
                                100% Carbide free <span className='font-bold text-[#C09A44]'>Premium mangoes</span>
                            </h3>
                            <p className='text-[#491D0B]'>Naturally ripened, Rich taste aroma</p>
                        </div>
                        <Link href="/shop" className="inline-block space-y-4">
                            <button className="bg-[#C09A44] text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg cursor-pointer transition-all transform hover:scale-105">
                                Shop Now Quickly
                            </button>
                        </Link>
                    </div>

                    {/* Image section */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative w-full h-64 md:h-96">
                            <Image
                                src="/banner-mango22.png"
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