'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ReviewSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "The variety, quality, and quantity from MangoBazar is amazing. I ordered several types of mangoes including the Khiraapat and each one was delicious. If you're looking for the best mangoes from Chapainawabganj, MangoBazar is the place to go!",
      author: "Abdus Sobhan",
      role: "Govt Service Holder",
      avatar: "https://i.ibb.co/W4gHGZ4K/avatar.webp",
    },
    {
      id: 2,
      text: "MangoBazar is my go-to mango supplier. Their Gopalbhog and Fazli mangoes are unbeatable. Great quality, fast delivery, and very professional service. Perfect for anyone who loves premium mangoes!",
      author: "Umme Kulsum",
      role: "Banker",
      avatar: "https://i.ibb.co/Nd2nDrX2/avatar2.webp",
    },
    {
      id: 3,
      text: "Absolutely the best mangoes I've ever had! MangoBazar delivered fresh, premium Chapainawabganj mangoes right to my doorstep. The quality and flavor were exceptional. Highly recommend them!",
      author: "Delwar Hossain",
      role: "Software Engineer",
      avatar: "https://i.ibb.co/W4gHGZ4K/avatar.webp",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-[#faf8f3]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#C09A44] text-center mb-2">
          What Our Clients Say
        </h2>
        <p className="text-xl text-[#491D0B] text-center mb-12">
          Trusted by mango lovers across the country 🍋
        </p>

        <div className="relative max-w-3xl mx-auto">
          {/* Review Card */}
          <div className="bg-white px-6 py-10 rounded-2xl shadow-lg border border-[#f0e6d2] hover:border-[#C09A44BF] transition-all duration-300 text-center">
            <div className="flex flex-col items-center">
              {/* Avatar */}
              <div className="w-20 h-20 mb-5 relative rounded-full overflow-hidden border-2 border-[#C09A44] shadow-sm">
                <Image
                  src={reviews[currentSlide].avatar}
                  alt={reviews[currentSlide].author}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Review Text */}
              <p className="text-gray-700 italic mb-6 leading-relaxed max-w-xl">
                “{reviews[currentSlide].text}”
              </p>

              {/* Author */}
              <div>
                <h4 className="text-[#491D0B] font-semibold text-lg">
                  {reviews[currentSlide].author}
                </h4>
                <p className="text-sm text-gray-500">{reviews[currentSlide].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous review"
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 bg-white border border-[#C09A44] p-3 rounded-full cursor-pointer shadow-sm hover:bg-[#C09A44] hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next review"
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 bg-white border border-[#C09A44] p-3 rounded-full cursor-pointer shadow-sm hover:bg-[#C09A44] hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all ${currentSlide === i ? 'bg-[#C09A44]' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
