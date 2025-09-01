"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Banner() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Trigger immediately for faster load
  }, []);

  const getBackgroundGradient = () => {
    return "linear-gradient(135deg, #FAF5E9 0%, #fffbea 50%, #F5EFD6 100%)";
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden transition-all duration-1000"
      style={{ background: getBackgroundGradient() }}
    >
      {/* Enhanced floating elements (more visually prominent) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5 w-20 h-20 rounded-full opacity-30 bg-amber-200 animate-float-slow"></div>
        <div className="absolute top-3/4 right-10 w-16 h-16 rounded-full opacity-30 bg-amber-300 animate-float-medium animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-14 h-14 rounded-full opacity-30 bg-amber-400 animate-float-fast animation-delay-2000"></div>
        <div className="absolute top-1/4 right-1/3 w-18 h-18 rounded-full opacity-30 bg-amber-500 animate-float-slow animation-delay-1500"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 pt-[120px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 min-h-[80vh]">
          {/* Text content with fade-in animation */}
          <div
            className={`lg:w-1/2 space-y-6 text-center lg:text-left transition-all duration-700 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#491D0B]">
              Mango Season <br />
              <span className="inline-block text-amber-600 animate-pulse">
                Bookings Started
              </span>
            </h1>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#491D0B]">
                100% Carbide free{" "}
                <span className="text-amber-600 font-bold">
                  Premium mangoes
                </span>
              </h3>
              <p className="text-[#6B4C3B] text-base md:text-lg">
                Naturally ripened with a rich taste and aroma straight from
                Chapai Nawabganj.
              </p>
            </div>

            <div className="transform transition-transform hover:scale-105">
              <Link href="/shop" className="inline-block">
                <button className="relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-700 text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg cursor-pointer hover:from-amber-600 hover:to-amber-800 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Shop Now</span>
                    <span className="animate-bounce">🛒</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Image section with subtle entrance animation and new 3D mango */}
          <div
            className={`lg:w-1/2 flex justify-center w-full relative transition-all duration-1000 delay-300 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-full h-80 md:h-[450px] max-w-[400px] sm:max-w-[450px] md:max-w-xl">
              {/* Pulsing background behind the image */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-200/40 to-amber-400/40 blur-xl scale-105 animate-pulse-slow"></div>

              {/* Main 3D Mango Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-white transform transition-transform hover:scale-105">
                <Image
                  src="https://i.ibb.co/pjpGRSFz/green-mango-fruit-on-a-branch-with-leaves-on-transparent-background-png.webp"
                  alt="Premium 3D Mangoes from Chapai Nawabganj"
                  fill
                  className="object-contain" // Use object-contain to ensure the whole mango is visible
                  priority
                />
              </div>

              {/* Floating mangoes around the main image with varying animations */}
              <div className="absolute text-4xl -top-8 left-1/4 animate-float-medium z-20">
                🥭
              </div>
              <div className="absolute text-3xl top-1/4 -right-10 animate-float-slow z-20">
                🥭
              </div>
              <div className="absolute text-5xl -bottom-10 left-10 animate-float-fast z-20">
                🥭
              </div>
              <div className="absolute text-3xl bottom-1/2 -left-10 animate-float-medium z-20">
                🥭
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with bounce animation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-[#491D0B] rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[#491D0B] rounded-full mt-1"></div>
        </div>
      </div>

      {/* Tailwind CSS keyframes for custom animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) translateX(5px) rotate(2deg);
          }
          50% {
            transform: translateY(5px) translateX(-5px) rotate(-2deg);
          }
          75% {
            transform: translateY(-5px) translateX(5px) rotate(1deg);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          30% {
            transform: translateY(-15px) translateX(8px) rotate(3deg);
          }
          60% {
            transform: translateY(8px) translateX(-8px) rotate(-3deg);
          }
        }
        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          40% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
          }
          80% {
            transform: translateY(10px) translateX(-10px) rotate(-5deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1.05);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.6;
          }
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
