"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

      imageContainerRef.current.style.transition = "height 0.3s ease";
      imageContainerRef.current.style.height = `${newHeight}px`;

      const timer = setTimeout(() => {
        if (imageContainerRef.current) {
          imageContainerRef.current.style.transition = "none";
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [activeAccordion]);

  const sections = [
    {
      title: "Nurturing the Orchard",
      content:
        "With three generations of mango-growing wisdom and the rich soil of Chapai Nawabganj, we blend tradition with technology. Our orchards mimic forest ecosystems using organic treatments that nourish the trees and protect the fruit without a single drop of harmful chemicals.",
    },
    {
      title: "Harvested at the Perfect Moment",
      content:
        "Our experienced mangolatiers know precisely when a mango is ready. Harvested with care, our mangoes are never rushed. They’re gently ripened the traditional way — in soft rice hay (penda) — untouched by artificial chemicals.",
    },
    {
      title: "Curated with Precision",
      content:
        "Every mango is hand-sorted in three meticulous stages — for size, shape, and skin quality. Only the finest fruits make it past this stage, ensuring what reaches you is as perfect outside as it is inside.",
    },
    {
      title: "Packed with Purpose",
      content:
        "Each mango is nestled into a protective sleeve and housed in custom export-grade 6-ply boxes. Our packaging is designed to guard against bruises and keep your mangoes fresh and safe in transit.",
    },
    {
      title: "Swift & Secure Delivery",
      content:
        "Once you place an order, our logistics team and trusted delivery partners jump into action. Whether it’s for yourself or a heartfelt gift, we ensure every box arrives on time — and in perfect condition.",
    },
    {
      title: "Experience the Magic",
      content:
        "Peel back the skin and let the aroma transport you. Our mangoes are more than fruit — they’re a nostalgic return to childhood summers, filled with joy, flavor, and the taste of tradition.",
    },
  ];

  return (
    <section className="py-16 relative">
      {/* Background with gradient and decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-100/30 to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#C09A44] mb-2">
            The Chapai Mango Bazar Journey
          </h1>
          <p className="text-3xl md:text-4xl font-bold text-[#491D0B]">
            From Our Orchard to Your Hands, Naturally
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image on Left */}
          <motion.div
            className="lg:w-1/2"
            ref={imageContainerRef}
            style={{ height: "auto" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="https://i.ibb.co/TxxN3fGd/journey.webp"
                alt="Chapai Mango Bazar Journey"
                fill
                className="object-cover"
                priority
              />
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#C09A44]"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#C09A44]"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#C09A44]"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#C09A44]"></div>
            </div>
          </motion.div>

          {/* Accordion Content on Right */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4" ref={contentRef}>
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <button
                    className={`w-full px-6 py-4 text-left font-medium flex justify-between items-center transition-all duration-300 ${
                      activeAccordion === index
                        ? "bg-gradient-to-r from-amber-50 to-orange-50 text-[#C09A44]"
                        : "text-[#491D0B] hover:bg-amber-50"
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-lg">{section.title}</span>
                    <motion.span
                      className="text-2xl"
                      animate={{ rotate: activeAccordion === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      +
                    </motion.span>
                  </button>
                  <motion.div
                    className={`px-6 pb-4 pt-2 bg-white transition-all duration-500 overflow-hidden ${
                      activeAccordion === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                    initial={false}
                  >
                    <div className="text-[#491D0B] text-justify">
                      {section.content}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
