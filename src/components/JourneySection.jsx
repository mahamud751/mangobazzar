'use client'

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function JourneySection() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [imageHeight, setImageHeight] = useState('auto');
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
      title: 'Farming',
      content: 'A rare blend of traditional farming experience of more than three generations and modern technology paired with the unique geography of Chapai-nawabganj, have enabled us to administer organic treatments for nutrient, pest and disease control to create a forest like environment in our orchards. Our natural and sustainable methods help us deliver organic mangoes to your plates across the globe.'
    },
    {
      title: 'Harvesting',
      content: 'Our mangolatiers have years of experience and a trained eye in picking mangoes at just the right time to ensure optimum sugar formation and maturity. These are ripened naturally in layers of penda (rice hay) in the old tradition completely untouched by chemicals and middlemen.'
    },
    {
      title: 'Selecting',
      content: 'A rigorous 3 stage sorting by size, shape and visual defects is done to exclude any fruits with spots, damages and skin flaws. From the farms to our distribution centres, our mangolitiers ensure that you get the finest product both inside and out!'
    },
    {
      title: 'Packaging',
      content: 'The best fruits are packed in our customized, export quality, 6 ply top bottom boxes. They are enclosed in sleeves to prevent bruising or damage during transportation and adequate ventilation is provided in both primary and secondary packaging.'
    },
    {
      title: 'Shipping',
      content: 'When an order is placed online, we work with our premium delivery partners to ship the mangoes to you and your loved ones at the earliest. Special care is taken for gifting orders since the mangoes are a token of your love and affection.'
    },
    {
      title: 'Enjoy!',
      content: 'Relish pure Chapai Mangoes. Get ready to cut open golden yellow fruits that fill your homes with sweet aroma and nostalgia. Our Organic Chapai Mango takes you back to the good old days of summer fun!'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#C09A44] mb-2">
            The Mango Bazar Journey
          </h1>
          <p className="text-3xl md:text-4xl font-bold text-[#491D0B]">
            From The Orchard To Your Hand
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image on Left */}
          <div 
            className="lg:w-1/2"
            ref={imageContainerRef}
            style={{ height: imageHeight }}
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