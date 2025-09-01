"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function OrganicMangoSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Trigger visibility immediately for faster load
    setIsLoaded(true);

    // Simple scroll handler for basic effects
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        // We can add simple visibility effects here if needed
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mangoImages = [
    {
      src: "https://i.ibb.co/KjXpn0Pb/organic-mango-section-01.webp",
      alt: "Premium Organic Mango",
      gridClass: "col-span-1 row-span-3",
    },
    {
      src: "https://i.ibb.co/k7r5mf6/organic-mango-section-02.webp",
      alt: "Fazli Mango Variety",
      gridClass: "col-span-1 row-span-2",
    },
    {
      src: "https://i.ibb.co/wFZWqQmL/organic-mango-section-03.webp",
      alt: "Gauromoti Mango",
      gridClass: "col-span-1 row-span-3",
    },
    {
      src: "https://i.ibb.co/8gVgG1yR/organic-mango-section-04.webp",
      alt: "Gopalbhog Mango",
      gridClass: "col-span-1 row-span-2",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FAF5E9 0%, #fffbea 50%, #F5EFD6 100%)",
      }}
    >
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 right-16 w-24 h-24 rounded-full opacity-5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
        <div className="absolute bottom-16 left-16 w-20 h-20 rounded-full opacity-5 bg-gradient-to-r from-amber-600 to-amber-400"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center lg:flex-row lg:gap-12">
          {/* Simplified Image Grid */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="grid grid-cols-2 grid-rows-6 gap-4 h-[600px] relative">
              {mangoImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative ${image.gridClass} rounded-xl overflow-hidden group cursor-pointer`}
                >
                  {/* Simplified hover effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 bg-amber-400 transition-opacity duration-200"></div>

                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority={index < 2}
                    />
                  </div>

                  {/* Simplified label */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/80 backdrop-blur-sm rounded-md p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <p className="text-xs font-semibold text-[#491D0B] text-center">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Simplified Text Content */}
          <div className="w-full lg:w-1/2 relative">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-[#491D0B]">
              Welcome to the World of{" "}
              <span className="text-amber-600">Mango Bazzar</span>
            </h2>

            <div className="space-y-6 text-[#491D0B] text-justify">
              {[
                "Every bite rekindles childhood memories of juicy, tree-fresh mangoes. Our unrivaled orchards in Chapai Nawabganj grow the finest organic mangoes under the sun.",
                "The unique terrain, enriched with minerals and kissed by ideal humidity, creates the perfect conditions for exceptional mango harvests.",
                "Globally renowned for their fragrance, sweetness, and luscious texture — our mangoes are a true indulgence for the senses.",
              ].map((text, index) => (
                <div
                  key={index}
                  className="relative pl-4 border-l-2 border-amber-400"
                >
                  <p className="text-base leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* Simplified decorative elements */}
            <div className="flex items-center justify-center mt-8 gap-3">
              <div className="h-px flex-1 bg-amber-200"></div>
              <div className="text-2xl text-amber-500">🥭</div>
              <div className="h-px flex-1 bg-amber-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
