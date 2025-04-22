import Image from 'next/image';
import Link from 'next/link';

export default function WhyUs() {
  const features = [
    {
      icon: '/100-percent.svg',
      title: 'Guaranteed Freshness',
      description: 'Every mango is hand-checked and guaranteed to meet our high standards of taste and quality.',
      alt: '100% quality icon'
    },
    {
      icon: '/authentic-icon.svg',
      title: 'Grown in Chapai Nawabganj',
      description: 'Authentic mangoes straight from the mango capital of Bangladesh — no middlemen, no mixing.',
      alt: 'Authentic mango icon'
    },
    {
      icon: '/organic-icon.svg',
      title: 'Organically Grown',
      description: 'No chemicals, no shortcuts. Just pure mangoes grown with care and sustainability.',
      alt: 'Organic icon'
    },
    {
      icon: '/handpicked-icon.svg',
      title: 'Hand-Picked & Uniform',
      description: 'Each box includes mangoes of similar size and ripeness, hand-selected with precision.',
      alt: 'Hand-picked icon'
    },
    {
      icon: '/premium-icon.svg',
      title: 'Export-Quality Packaging',
      description: 'Delivered in 6-ply custom boxes that protect and preserve the freshness in every shipment.',
      alt: 'Premium packaging icon'
    },
    {
      title: 'Get the Real Taste of Chapai Mangoes',
      hasButton: true
    }
  ];

  return (
    <section className="py-16 bg-[#faf8f3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#C09A44] mb-2">
            Why Mango Bazar?
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-[#491D0B]">
            More Than Just Mangoes — It's a Promise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isLast = feature.hasButton;

            return (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-md border border-[#f0e6d2] hover:border-[#C09A44BF] hover:shadow-lg transition-all h-full ${
                  isLast
                    ? 'flex items-center justify-center text-center flex-col'
                    : 'flex flex-col justify-between'
                }`}
              >
                {!isLast ? (
                  <>
                    <div className="flex flex-col items-center text-center flex-grow">
                      {feature.icon && (
                        <div className="mb-4 w-16 h-16 relative">
                          <Image
                            src={feature.icon}
                            alt={feature.alt}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-[#491D0B] mb-1">
                        {feature.title}
                      </h3>
                      {feature.description && (
                        <p className="text-sm text-[#6B4B3E]">{feature.description}</p>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-[#491D0B] mb-4">
                      {feature.title}
                    </h3>
                    <Link href="/shop">
                      <button className="bg-[#C09A44] hover:bg-[#a8843a] text-white font-medium py-2 px-6 rounded-full cursor-pointer transition-colors">
                        Shop Now
                      </button>
                    </Link>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
