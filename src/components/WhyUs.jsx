import Image from 'next/image';

export default function WhyUs() {
  const features = [
    {
      icon: '/100-percent.svg',
      title: '100% Quality guarantee for every mango',
      alt: '100% quality icon'
    },
    {
      icon: '/authentic-icon.svg',
      title: 'Authentic Chapai-Nawabganj Mangoes',
      alt: 'Authentic mango icon'
    },
    {
      icon: '/organic-icon.svg',
      title: 'Naturally Produced Organic Mangoes',
      alt: 'Organic icon'
    },
    {
      icon: '/handpicked-icon.svg',
      title: 'Hand-picked, uniform quality and size in one box',
      alt: 'Hand-picked icon'
    },
    {
      icon: '/premium-icon.svg',
      title: 'Premium export quality packaging',
      alt: 'Premium packaging icon'
    },
    {
      title: 'Buy Original Chapai Mangoes',
      hasButton: true
    }
  ];

  return (
    <section className="py-16 bg-[#faf8f3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#491D0B]">
            Why Mango Bazar?
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-[#f0e6d2] hover:border-[#C09A44BF] hover:shadow-lg transition-all flex flex-col h-full"
            >
              <div className={`flex flex-col items-center text-center flex-grow ${feature.hasButton ? 'justify-center' : ''}`}>
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
                <h3 className="text-lg font-semibold text-[#491D0B]">
                  {feature.title}
                </h3>
              </div>
              
              {feature.hasButton && (
                <div className="text-center">
                  <button className="bg-[#C09A44] hover:bg-[#a8843a] text-white font-medium py-2 px-6 rounded-full cursor-pointer transition-colors">
                    Buy Mangoes
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}