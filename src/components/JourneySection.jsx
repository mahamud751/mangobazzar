'use client'

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function JourneySection() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const contentRef = useRef(null);
  const imageContainerRef = useRef(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  useEffect(() => {
    if (contentRef.current && imageContainerRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      const minHeight = 400;
      const newHeight = Math.max(contentHeight, minHeight);

      imageContainerRef.current.style.transition = 'height 0.3s ease';
      imageContainerRef.current.style.height = `${newHeight}px`;

      const timer = setTimeout(() => {
        if (imageContainerRef.current) {
          imageContainerRef.current.style.transition = 'none';
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [activeAccordion]);

  const sections = [
    {
      title: 'Nurturing the Orchard',
      content:
        'With three generations of mango-growing wisdom and the rich soil of Chapai Nawabganj, we blend tradition with technology. Our orchards mimic forest ecosystems using organic treatments that nourish the trees and protect the fruit without a single drop of harmful chemicals.',
    },
    {
      title: 'Harvested at the Perfect Moment',
      content:
        'Our experienced mangolatiers know precisely when a mango is ready. Harvested with care, our mangoes are never rushed. They’re gently ripened the traditional way — in soft rice hay (penda) — untouched by artificial chemicals.',
    },
    {
      title: 'Curated with Precision',
      content:
        'Every mango is hand-sorted in three meticulous stages — for size, shape, and skin quality. Only the finest fruits make it past this stage, ensuring what reaches you is as perfect outside as it is inside.',
    },
    {
      title: 'Packed with Purpose',
      content:
        'Each mango is nestled into a protective sleeve and housed in custom export-grade 6-ply boxes. Our packaging is designed to guard against bruises and keep your mangoes fresh and safe in transit.',
    },
    {
      title: 'Swift & Secure Delivery',
      content:
        'Once you place an order, our logistics team and trusted delivery partners jump into action. Whether it’s for yourself or a heartfelt gift, we ensure every box arrives on time — and in perfect condition.',
    },
    {
      title: 'Experience the Magic',
      content:
        'Peel back the skin and let the aroma transport you. Our mangoes are more than fruit — they’re a nostalgic return to childhood summers, filled with joy, flavor, and the taste of tradition.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#C09A44] mb-2">
            The Mango Bazar Journey
          </h1>
          <p className="text-3xl md:text-4xl font-bold text-[#491D0B]">
            From Our Orchard to Your Hands, Naturally
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image on Left */}
          <div 
            className="lg:w-1/2"
            ref={imageContainerRef}
            style={{ height: 'auto' }}
          >
            <div className="relative h-full w-full rounded-lg overflow-hidden">
              <Image
                src="/journey.webp"
                alt="Mango Bazar Journey"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Accordion Content on Right */}
          <div className="lg:w-1/2">
            <div className="space-y-4" ref={contentRef}>
              {sections.map((section, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className={`w-full px-6 py-3 text-left font-medium flex justify-between items-center transition-colors ${activeAccordion === index ? 'bg-[#faf8f3] text-[#C09A44]' : 'text-[#491D0B]'}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{section.title}</span>
                    <span className="text-xl">
                      {activeAccordion === index ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    className={`px-6 pb-4 pt-2 bg-white transition-all duration-300 overflow-hidden ${activeAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="text-[#491D0B] text-justify">
                      {section.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
