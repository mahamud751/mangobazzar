import Image from 'next/image';

export default function OrganicMangoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center lg:flex-row gap-12">
          {/* Image Grid - Left Side */}
          <div className="lg:w-1/2 grid grid-cols-2 grid-rows-6 gap-4 h-[600px]">
            <div className="relative col-span-1 row-span-3 rounded-lg overflow-hidden">
              <Image
                src="/organic-mango-section-01.webp"
                alt="organic mango"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative col-span-1 row-span-2 rounded-lg overflow-hidden">
              <Image
                src="/organic-mango-section-02.webp"
                alt="Fazli Mango"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative col-span-1 row-span-3 rounded-lg overflow-hidden">
              <Image
                src="/organic-mango-section-03.webp"
                alt="Gauromoti Mango"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative col-span-1 row-span-2 rounded-lg overflow-hidden">
              <Image
                src="/organic-mango-section-04.webp"
                alt="Gopalbhog Mango"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#491D0B] mb-6">
              Welcome to the World of <span className="text-[#C09A44BF]">Mango Bazzar</span>
            </h2>

            <div className="space-y-6 text-[#491D0B] text-justify">
              <p>
                Every bite rekindles childhood memories of juicy, tree-fresh mangoes.
                Our unrivaled orchards in Chapai Nawabganj grow the finest organic mangoes under the sun.
              </p>

              <p>
                The unique terrain, enriched with minerals and kissed by ideal humidity,
                creates the perfect conditions for exceptional mango harvests.
              </p>

              <p>
                Globally renowned for their fragrance, sweetness, and luscious texture —
                our mangoes are a true indulgence for the senses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
