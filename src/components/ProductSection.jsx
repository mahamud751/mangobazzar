"use client";
import { mockProducts } from "@/app/data/mockProducts";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button3D from "./Button3D";
import Link from "next/link";

const STATIC_BG_MANGOES = [
  { left: "8%", top: "14%", size: "20px", duration: 12 },
  { left: "22%", top: "32%", size: "24px", duration: 14 },
  { left: "36%", top: "18%", size: "18px", duration: 10 },
  { left: "52%", top: "28%", size: "22px", duration: 13 },
  { left: "66%", top: "16%", size: "19px", duration: 11 },
  { left: "79%", top: "34%", size: "23px", duration: 15 },
  { left: "27%", top: "68%", size: "21px", duration: 12 },
  { left: "73%", top: "72%", size: "25px", duration: 14 },
];

export default function ProductSection() {
  const products = mockProducts.slice(0, 4);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger visibility immediately for faster load
    setIsVisible(true);

    // Fallback for intersection observer
    const timer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true);
      }
    }, 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" } // Trigger earlier with rootMargin
    );

    const section = document.getElementById("products-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      clearTimeout(timer);
    };
  }, [isVisible]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5, // Reduced from 0.8 to 0.5
        staggerChildren: 0.1, // Reduced from 0.2 to 0.1
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 50, // Reduced from 100
      opacity: 0,
      scale: 0.9, // Increased from 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200, // Increased from 100 for faster animation
        damping: 15,
      },
    },
  };

  const titleVariants = {
    hidden: {
      y: 30, // Reduced from 50
      opacity: 0,
      scale: 0.95, // Increased from 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150, // Increased from 120 for faster animation
        damping: 15,
        duration: 0.5, // Reduced from 0.8
      },
    },
  };

  return (
    <section
      id="products-section"
      className="relative py-16 overflow-hidden" // Reduced padding
      style={{
        background:
          "linear-gradient(135deg, #FAF5E9 0%, #fffbea 50%, #F5EFD6 100%)",
      }}
    >
      {/* Floating Background Elements - Reduced for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {STATIC_BG_MANGOES.map((mango, i) => (
          <motion.div
            key={`${mango.left}-${mango.top}`}
            className="absolute opacity-3" // Increased opacity visibility
            style={{
              left: mango.left,
              top: mango.top,
              fontSize: mango.size,
            }}
            animate={{
              y: [0, -20, 0], // Reduced animation range
              rotate: [0, 180], // Simplified rotation
              scale: [1, 1.1, 1], // Reduced scale
            }}
            transition={{
              duration: mango.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          >
            🥭
          </motion.div>
        ))}
      </div>

      {/* Geometric Background Shapes - Simplified */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-8 right-8 w-24 h-24 rounded-full opacity-5" // Reduced size and opacity
          style={{ background: "linear-gradient(45deg, #C09A44, #491D0B)" }}
          animate={{
            rotate: [0, 180], // Simplified rotation
            scale: [1, 1.1, 1], // Reduced scale
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-16 left-8 w-20 h-20 rounded-full opacity-5" // Reduced size and opacity
          style={{ background: "linear-gradient(45deg, #491D0B, #C09A44)" }}
          animate={{
            rotate: [180, 0], // Simplified rotation
            scale: [1, 1.1, 1], // Reduced scale
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-12" variants={titleVariants}>
          {" "}
          {/* Reduced margin */}
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold mb-4 text-3d" // Reduced font size and margin
            style={{
              backgroundImage:
                "linear-gradient(45deg, #C09A44, #491D0B, #C09A44)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Taste the Best of Summer
            <motion.span
              className="inline-block"
              animate={{
                rotate: [0, 10, -10, 0], // Reduced rotation
                scale: [1, 1.1, 1], // Reduced scale
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🥭
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-[#491D0B] max-w-2xl mx-auto leading-relaxed" // Reduced font size
            initial={{ opacity: 0, y: 15 }} // Reduced animation
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }} // Reduced delay and duration
          >
            Discover our handpicked,{" "}
            <strong className="text-[#C09A44]">farm-fresh mangoes</strong> –
            harvested with love and delivered with care. Book yours before the
            season ends!
          </motion.p>
          {/* Decorative Elements - Simplified */}
          <motion.div
            className="flex justify-center items-center gap-3 mt-4" // Reduced gap and margin
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }} // Reduced delay and duration
          >
            <motion.div
              className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#C09A44] to-transparent" // Reduced size
              animate={{
                scaleX: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="text-xl" // Reduced font size
              animate={{
                rotate: [0, 180], // Simplified rotation
                scale: [1, 1.1, 1], // Reduced scale
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ⭐
            </motion.div>
            <motion.div
              className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#C09A44] to-transparent" // Reduced size
              animate={{
                scaleX: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10" // Reduced gap and margin
          variants={containerVariants}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{
                y: -5, // Reduced hover effect
                scale: 1.01, // Reduced scale
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                variety={product.variety}
                price={product.price}
                originalPrice={product.originalPrice}
                discountedPrice={
                  product.price < product.originalPrice ? product.price : null
                }
                imageUrl={product.images?.[0] || "/default-mango.png"}
                slug={product.slug}
                rating={product.rating}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30, scale: 0.95 }} // Reduced animation
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.6, // Reduced delay
            type: "spring",
            stiffness: 150, // Increased stiffness for faster animation
            damping: 15,
          }}
        >
          <Link href="/shop">
            <Button3D size="medium" className="shadow-lg">
              {" "}
              {/* Reduced shadow */}
              <motion.span
                className="flex items-center gap-2" // Reduced gap
                whileHover={{ scale: 1.03 }} // Reduced hover effect
              >
                <span>Explore All Products</span>
                <motion.span
                  animate={{
                    x: [0, 3, 0], // Reduced animation
                  }}
                  transition={{
                    duration: 1.2, // Reduced duration
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </motion.span>
            </Button3D>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Wave Effect - Simplified */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-12 opacity-10" // Reduced height and opacity
        style={{
          background: "linear-gradient(45deg, #C09A44, #491D0B)",
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 30%)", // Simplified wave
        }}
        animate={{
          clipPath: [
            "polygon(0 100%, 100% 100%, 100% 0, 0 30%)",
            "polygon(0 100%, 100% 100%, 100% 10%, 0 50%)",
            "polygon(0 100%, 100% 100%, 100% 0, 0 30%)",
          ],
        }}
        transition={{
          duration: 6, // Reduced duration
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
