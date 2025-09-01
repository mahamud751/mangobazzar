"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <section className="py-20 relative">
      {/* Background with decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-100/20 to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#C09A44] text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          className="text-xl text-[#491D0B] text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Trusted by mango lovers across the country 🍋
        </motion.p>

        <div className="relative max-w-3xl mx-auto">
          {/* Review Card */}
          <motion.div
            className="bg-white px-6 py-10 rounded-3xl shadow-xl border border-[#f0e6d2] text-center relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Decorative background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-10 left-10 w-32 h-32 border-2 border-amber-300 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-orange-300 rounded-full"></div>
            </div>

            <div className="flex flex-col items-center relative z-10">
              {/* Avatar with decorative ring */}
              <motion.div
                className="w-24 h-24 mb-5 relative rounded-full overflow-hidden border-4 border-white shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300 z-0"></div>
                <div className="absolute inset-1 rounded-full overflow-hidden z-10">
                  <Image
                    src={reviews[currentSlide].avatar}
                    alt={reviews[currentSlide].author}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Review Text */}
              <motion.p
                className="text-gray-700 italic mb-6 leading-relaxed max-w-xl text-lg"
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                “{reviews[currentSlide].text}”
              </motion.p>

              {/* Author */}
              <div>
                <motion.h4
                  className="text-[#491D0B] font-semibold text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {reviews[currentSlide].author}
                </motion.h4>
                <motion.p
                  className="text-sm text-gray-500 mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {reviews[currentSlide].role}
                </motion.p>
              </div>

              {/* Decorative quote marks */}
              <div className="absolute top-4 left-4 text-5xl text-amber-200 font-serif">
                "
              </div>
              <div className="absolute bottom-4 right-4 text-5xl text-amber-200 font-serif rotate-180">
                "
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            aria-label="Previous review"
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 bg-white border-2 border-[#C09A44] p-3 rounded-full cursor-pointer shadow-lg hover:bg-[#C09A44] hover:text-white transition-all duration-300"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 15px -3px rgba(192, 154, 68, 0.3)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            aria-label="Next review"
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 bg-white border-2 border-[#C09A44] p-3 rounded-full cursor-pointer shadow-lg hover:bg-[#C09A44] hover:text-white transition-all duration-300"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 15px -3px rgba(192, 154, 68, 0.3)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {reviews.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === i
                    ? "bg-[#C09A44] scale-125"
                    : "bg-gray-300 hover:bg-amber-400"
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
