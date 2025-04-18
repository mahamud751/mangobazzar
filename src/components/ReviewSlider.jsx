'use client'

import { useState } from 'react';
import Image from 'next/image';

export default function ReviewSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "The variety, quality and Quantity from MangoBazar is amazing. I ordered several types of mangoes including the Khiraapat and each one was delicious. If you're looking for the best mangoes from Chapainawabgani, MangoBazar is the place to go! Thanks MangoBazar",
      author: "Abdus Sobhan",
      role: "Govt Service Holder",
      avatar: "/avatar.png"
    },
    {
      id: 2,
      text: "MangoBazar is my go-to mango supplier. Their Gopalbhog and Fazli mangoes are unbeatable. Great quality, fast delivery, and very professional service. Perfect for anyone who loves premium mangoes!",
      author: "Umme Kulsum",
      role: "Banker",
      avatar: "/avatar2.png"
    },
    {
      id: 3,
      text: "Absolutely the best mangoes I've ever had! MangoBazar delivered fresh, premium Chapainawabgani mangoes right to my doorstep. The quality and flavor were exceptional. Highly recommend them to anyone looking for top-quality mangoes!",
      author: "Delwar Hossain",
      role: "Software Engineer",
      avatar: "/avatar.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-[#faf8f3]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#491D0B] text-center mb-12">
          Clients Review
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Review Card */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-[#f0e6d2] hover:border-[#C09A44BF] hover:shadow-lg duration-200 transition-all">
            <div className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="mb-6 w-20 h-20 relative rounded-full overflow-hidden border-2 border-[#C09A44]">
                <Image
                  src={reviews[currentSlide].avatar}
                  alt={reviews[currentSlide].author}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Review Text */}
              <p className="text-gray-700 italic mb-6">
                "{reviews[currentSlide].text}"
              </p>
              
              {/* Author Info */}
              <div>
                <h4 className="font-bold text-[#491D0B]">{reviews[currentSlide].author}</h4>
                <p className="text-gray-600 text-sm">{reviews[currentSlide].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-[#C09A44] hover:text-white transition-colors"
            aria-label="Previous review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-[#C09A44] hover:text-white transition-colors"
            aria-label="Next review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === index ? 'bg-[#C09A44]' : 'bg-gray-300'}`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}