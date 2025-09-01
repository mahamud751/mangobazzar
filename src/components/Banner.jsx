"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Banner() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Reduce delay for faster initial load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50); // Reduced from default to 50ms for faster load

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5, // Reduced from 1 to 0.5 for faster animation
        staggerChildren: 0.1, // Reduced from 0.3 to 0.1 for faster stagger
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 }, // Reduced animation intensity
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.4, // Reduced from 0.8 to 0.4 for faster animation
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -90 }, // Reduced animation intensity
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6, // Reduced from 1.2 to 0.6 for faster animation
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden animated-gradient">
      {/* Floating Background Elements - Reduced number for better performance */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map(
          (
            _,
            i // Reduced from 8 to 5 elements
          ) => (
            <motion.div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 40 + 20}px`, // Reduced size range
              }}
              animate={{
                y: [0, -20, 0], // Reduced animation range
                rotate: [0, 180], // Simplified rotation
                scale: [1, 1.1, 1], // Reduced scale range
              }}
              transition={{
                duration: Math.random() * 5 + 5, // Reduced duration for better performance
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🥭
            </motion.div>
          )
        )}
      </div>

      {/* Main Content */}
      <motion.div
        className="container mx-auto px-4 py-16 pt-[120px] relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 min-h-[80vh]">
          {" "}
          {/* Reduced gap */}
          {/* Text content */}
          <motion.div
            className="lg:w-1/2 space-y-6 text-center lg:text-left" // Reduced space-y
            variants={itemVariants}
            style={{
              transform: `translate(${mousePosition.x * 0.3}px, ${
                // Reduced mouse effect intensity
                mousePosition.y * 0.3
              }px)`,
            }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight text-3d text-glow" // Reduced font size
              style={{
                background: "linear-gradient(45deg, #C09A44, #491D0B, #C09A44)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Mango Season <br />
              <motion.span
                className="inline-block"
                animate={{
                  rotateY: [0, 5, -5, 0], // Reduced rotation
                  scale: [1, 1.03, 1], // Reduced scale
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Bookings Started
              </motion.span>
            </motion.h1>

            <motion.div className="space-y-3" variants={itemVariants}>
              {" "}
              {/* Reduced space-y */}
              <motion.h3
                className="text-xl font-semibold text-[#491D0B]" // Reduced font size
                whileHover={{ scale: 1.02, rotateX: 2 }} // Reduced hover effect
                transition={{ type: "spring", stiffness: 300 }}
              >
                100% Carbide free{" "}
                <motion.span
                  className="text-[#C09A44] font-bold pulse-3d"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(192, 154, 68, 0.5)",
                      "0 0 15px rgba(192, 154, 68, 0.8)", // Reduced shadow intensity
                      "0 0 5px rgba(192, 154, 68, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Premium mangoes
                </motion.span>
              </motion.h3>
              <motion.p
                className="text-[#6B4C3B] text-base md:text-lg" // Reduced font size
                variants={itemVariants}
              >
                Naturally ripened with a rich taste and aroma straight from
                Chapai Nawabganj.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }} // Reduced hover effect
              whileTap={{ scale: 0.98 }} // Reduced tap effect
            >
              <Link href="/shop" className="inline-block">
                <motion.button
                  className="relative overflow-hidden bg-gradient-to-r from-[#C09A44] to-[#b58a35] text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg cursor-pointer" // Reduced padding and font size
                  whileHover={{
                    boxShadow: "0 10px 20px rgba(192, 154, 68, 0.4)", // Reduced shadow
                    y: -3, // Reduced movement
                  }}
                  animate={{
                    boxShadow: [
                      "0 5px 10px rgba(192, 154, 68, 0.3)", // Reduced shadow
                      "0 10px 20px rgba(192, 154, 68, 0.5)", // Reduced shadow
                      "0 5px 10px rgba(192, 154, 68, 0.3)", // Reduced shadow
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.span
                    className="relative z-10"
                    animate={{ rotateY: [0, 3, -3, 0] }} // Reduced rotation
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Shop Now 🛒
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#b58a35] to-[#C09A44]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.2 }} // Reduced duration
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          {/* Image section */}
          <motion.div
            className="lg:w-1/2 flex justify-center w-full relative"
            variants={imageVariants}
            style={{
              transform: `translate(${-mousePosition.x * 0.2}px, ${
                // Reduced mouse effect intensity
                -mousePosition.y * 0.2
              }px)`,
            }}
          >
            <motion.div
              className="relative w-full h-80 md:h-[400px] max-w-[350px] sm:max-w-[400px] md:max-w-xl" // Reduced sizes
              animate={{
                rotateY: [0, 3, -3, 0], // Reduced rotation
                rotateX: [0, 1, -1, 0], // Reduced rotation
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glow Effect Background - Simplified */}
              <motion.div
                className="absolute inset-0 rounded-2xl" // Reduced border radius
                style={{
                  background:
                    "linear-gradient(45deg, rgba(192, 154, 68, 0.2), rgba(73, 29, 11, 0.1))", // Reduced opacity
                  filter: "blur(15px)", // Reduced blur
                  scale: 1.05, // Reduced scale
                }}
                animate={{
                  rotate: [0, 180], // Simplified rotation
                  scale: [1.05, 1.1, 1.05], // Reduced scale range
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Main Image Container */}
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl glass-effect" // Reduced effects
                whileHover={{
                  scale: 1.02, // Reduced scale
                  rotateY: 5, // Reduced rotation
                  rotateX: 3, // Reduced rotation
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="https://i.ibb.co/pjpGRSFz/green-mango-fruit-on-a-branch-with-leaves-on-transparent-background-png.webp"
                  alt="Fresh Mangoes from Chapai Nawabganj"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Shimmer Effect Overlay - Simplified */}
                <motion.div
                  className="absolute inset-0 opacity-0 hover:opacity-20" // Reduced opacity
                  style={{
                    background:
                      "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)", // Reduced opacity
                  }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Floating Mango Emojis - Reduced number */}
              {[...Array(4)].map(
                (
                  _,
                  i // Reduced from 6 to 4 elements
                ) => (
                  <motion.div
                    key={i}
                    className="absolute text-3xl" // Reduced font size
                    style={{
                      left: `${25 + i * 20}%`, // Adjusted positioning
                      top: `${15 + (i % 2) * 60}%`, // Adjusted positioning
                    }}
                    animate={{
                      y: [0, -15, 0], // Reduced animation range
                      rotate: [0, 5, -5, 0], // Reduced rotation
                      scale: [1, 1.1, 1], // Reduced scale
                    }}
                    transition={{
                      duration: 3 + i * 0.3, // Reduced delay
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1, // Reduced delay
                    }}
                  >
                    🥭
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Simplified */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2" // Reduced bottom spacing
        animate={{ y: [0, 5, 0] }} // Reduced animation range
        transition={{ duration: 1.5, repeat: Infinity }} // Reduced duration
      >
        <motion.div
          className="w-5 h-8 border-2 border-[#C09A44] rounded-full flex justify-center" // Reduced size
          whileHover={{ scale: 1.1 }} // Reduced hover effect
        >
          <motion.div
            className="w-1 h-2 bg-[#C09A44] rounded-full mt-1" // Reduced size
            animate={{ y: [0, 8, 0] }} // Reduced animation range
            transition={{ duration: 1, repeat: Infinity }} // Reduced duration
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
