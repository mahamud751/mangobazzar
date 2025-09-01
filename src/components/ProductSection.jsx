"use client";
import { mockProducts } from "@/app/data/mockProducts";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button3D from "./Button3D";
import Link from "next/link";

export default function ProductSection() {
  const products = mockProducts.slice(0, 4);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("products-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      rotateX: -30,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const titleVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.8,
      rotateX: -20,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="products-section"
      className="relative py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FAF5E9 0%, #fffbea 50%, #F5EFD6 100%)",
      }}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 40 + 20}px`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🥭
          </motion.div>
        ))}
      </div>

      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 rounded-full opacity-10"
          style={{ background: "linear-gradient(45deg, #C09A44, #491D0B)" }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 rounded-full opacity-10"
          style={{ background: "linear-gradient(45deg, #491D0B, #C09A44)" }}
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
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
        <motion.div className="text-center mb-16" variants={titleVariants}>
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold mb-6 text-3d"
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
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Taste the Best of Summer
            <motion.span
              className="inline-block"
              animate={{
                rotate: [0, 20, -20, 0],
                scale: [1, 1.2, 1],
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
            className="text-lg md:text-xl text-[#491D0B] max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Discover our handpicked,{" "}
            <strong className="text-[#C09A44]">farm-fresh mangoes</strong> –
            harvested with love and delivered with care. Book yours before the
            season ends!
          </motion.p>

          {/* Decorative Elements */}
          <motion.div
            className="flex justify-center items-center gap-4 mt-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-transparent via-[#C09A44] to-transparent"
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="text-2xl"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ⭐
            </motion.div>
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-transparent via-[#C09A44] to-transparent"
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </motion.div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                rotateY: 5,
                rotateX: 5,
                scale: 1.02,
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
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 1.2,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        >
          <Link href="/shop">
            <Button3D size="large" className="shadow-2xl">
              <motion.span
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <span>Explore All Products</span>
                <motion.span
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
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

      {/* Bottom Wave Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-20 opacity-20"
        style={{
          background: "linear-gradient(45deg, #C09A44, #491D0B)",
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 50%)",
        }}
        animate={{
          clipPath: [
            "polygon(0 100%, 100% 100%, 100% 0, 0 50%)",
            "polygon(0 100%, 100% 100%, 100% 20%, 0 70%)",
            "polygon(0 100%, 100% 100%, 100% 0, 0 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
