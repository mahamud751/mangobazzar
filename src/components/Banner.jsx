"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Banner() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0, rotateX: -30 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.5, opacity: 0, rotateY: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden animated-gradient">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 60 + 40}px`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🥭
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="container mx-auto px-4 py-16 pt-[120px] relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[80vh]">
          {/* Text content */}
          <motion.div
            className="lg:w-1/2 space-y-8 text-center lg:text-left"
            variants={itemVariants}
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${
                mousePosition.y * 0.5
              }px)`,
            }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold leading-tight text-3d text-glow"
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
                  rotateY: [0, 10, -10, 0],
                  scale: [1, 1.05, 1],
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

            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.h3
                className="text-2xl font-semibold text-[#491D0B]"
                whileHover={{ scale: 1.05, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                100% Carbide free{" "}
                <motion.span
                  className="text-[#C09A44] font-bold pulse-3d"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(192, 154, 68, 0.5)",
                      "0 0 20px rgba(192, 154, 68, 0.8)",
                      "0 0 5px rgba(192, 154, 68, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Premium mangoes
                </motion.span>
              </motion.h3>
              <motion.p
                className="text-[#6B4C3B] text-lg md:text-xl"
                variants={itemVariants}
              >
                Naturally ripened with a rich taste and aroma straight from
                Chapai Nawabganj.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/shop" className="inline-block">
                <motion.button
                  className="relative overflow-hidden bg-gradient-to-r from-[#C09A44] to-[#b58a35] text-white text-xl font-bold py-4 px-10 rounded-full shadow-2xl cursor-pointer"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(192, 154, 68, 0.4)",
                    y: -5,
                  }}
                  animate={{
                    boxShadow: [
                      "0 10px 20px rgba(192, 154, 68, 0.3)",
                      "0 15px 30px rgba(192, 154, 68, 0.5)",
                      "0 10px 20px rgba(192, 154, 68, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.span
                    className="relative z-10"
                    animate={{ rotateY: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Shop Now 🛒
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#b58a35] to-[#C09A44]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
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
              transform: `translate(${-mousePosition.x * 0.3}px, ${
                -mousePosition.y * 0.3
              }px)`,
            }}
          >
            <motion.div
              className="relative w-full h-96 md:h-[500px] max-w-[400px] sm:max-w-[500px] md:max-w-2xl"
              animate={{
                rotateY: [0, 5, -5, 0],
                rotateX: [0, 2, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glow Effect Background */}
              <motion.div
                className="absolute inset-0 rounded-3xl morphing-shape"
                style={{
                  background:
                    "linear-gradient(45deg, rgba(192, 154, 68, 0.3), rgba(73, 29, 11, 0.2))",
                  filter: "blur(20px)",
                  scale: 1.1,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1.1, 1.2, 1.1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Main Image Container */}
              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl glass-effect hover-lift"
                whileHover={{
                  scale: 1.05,
                  rotateY: 15,
                  rotateX: 10,
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

                {/* Shimmer Effect Overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 hover:opacity-30"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
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

              {/* Floating Mango Emojis around the image */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-4xl"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + (i % 2) * 70}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                >
                  🥭
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[#C09A44] rounded-full flex justify-center"
          whileHover={{ scale: 1.2 }}
        >
          <motion.div
            className="w-1 h-3 bg-[#C09A44] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
