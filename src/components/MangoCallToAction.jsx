"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function MangoCallToAction() {
  const [colorPhase, setColorPhase] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const colorCycle = () => {
      setColorPhase((prev) => (prev + 1) % 360);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    // Slowed down from 30ms to 100ms
    const colorInterval = setInterval(colorCycle, 100);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(colorInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const getColorFromPhase = (phase, offset = 0) => {
    const hue = (phase + offset) % 360;
    return `hsl(${hue}, 70%, 60%)`;
  };

  return (
    <motion.section
      className="relative py-20 overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at ${mousePosition.x}% ${
          mousePosition.y
        }%, 
          hsl(${colorPhase}, 30%, 96%) 0%, 
          hsl(${(colorPhase + 120) % 360}, 20%, 98%) 50%, 
          hsl(${(colorPhase + 240) % 360}, 25%, 95%) 100%)`,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      // Slowed down from 1s to 2s
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 80 + 40}px`,
              color: getColorFromPhase(colorPhase, i * 45),
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              scale: [1, 1.4, 1],
            }}
            transition={{
              // Slowed down from 20-45s to 40-90s
              duration: Math.random() * 20 + 40,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🥭
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          style={{
            background: `linear-gradient(45deg, 
              ${getColorFromPhase(colorPhase, 0)}, 
              #491D0B, 
              ${getColorFromPhase(colorPhase, 180)})`,
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          // Slowed down from default to 2s
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          Ready to Taste Paradise?
        </motion.h2>

        <motion.p
          className="text-xl text-[#491D0B] mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // Slowed down from 0.8s to 1.5s
          transition={{ delay: 0.3, duration: 1.5 }}
          viewport={{ once: true }}
        >
          Don't miss out on the season's freshest mangoes. Order now and
          experience the authentic taste of Chapai Nawabganj's finest organic
          produce.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // Slowed down from 0.8s to 1.5s
          transition={{ delay: 0.6, duration: 1.5 }}
          viewport={{ once: true }}
        >
          <Link href="/shop">
            <motion.button
              className="relative px-8 py-4 text-lg font-bold text-white rounded-full overflow-hidden shadow-2xl group"
              style={{
                background: `linear-gradient(45deg, 
                  ${getColorFromPhase(colorPhase, 0)}, 
                  ${getColorFromPhase(colorPhase, 60)})`,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 20px 40px ${getColorFromPhase(colorPhase, 30)}40`,
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                background: `linear-gradient(45deg, 
                  ${getColorFromPhase(colorPhase, 0)}, 
                  ${getColorFromPhase(colorPhase, 60)})`,
              }}
              // Slowed down spring animation
              transition={{ type: "spring", stiffness: 150 }}
            >
              <motion.span
                className="relative z-10 flex items-center gap-3"
                animate={
                  {
                    // Removed rotateY property that may cause compatibility issues
                  }
                }
                transition={{
                  // Slowed down from 4s to 8s
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Shop Now 🛒
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    // Slowed down from 2s to 4s
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </motion.span>

              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
                }}
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  // Slowed down from 1.5s to 3s
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.button>
          </Link>

          <Link href="/about">
            <motion.button
              className="relative px-8 py-4 text-lg font-bold rounded-full border-2 overflow-hidden group"
              style={{
                borderColor: getColorFromPhase(colorPhase, 120),
                color: getColorFromPhase(colorPhase, 120),
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: getColorFromPhase(colorPhase, 120),
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                borderColor: getColorFromPhase(colorPhase, 120),
                color: getColorFromPhase(colorPhase, 120),
              }}
              // Slowed down spring animation
              transition={{ type: "spring", stiffness: 150 }}
            >
              <motion.span
                className="relative z-10 flex items-center gap-3"
                animate={
                  {
                    // Removed rotateX property that may cause compatibility issues
                  }
                }
                transition={{
                  // Slowed down from 5s to 10s
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Learn More 📖
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="flex items-center justify-center mt-16 gap-6"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // Slowed down from 0.8s to 1.5s
          transition={{ delay: 1, duration: 1.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="h-px w-20"
            style={{
              background: `linear-gradient(90deg, transparent, ${getColorFromPhase(
                colorPhase
              )}, transparent)`,
            }}
            animate={{
              scaleX: [0, 1, 0],
            }}
            transition={{
              // Slowed down from 3s to 6s
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="text-4xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              // Slowed down from 6s to 12s
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter: `drop-shadow(0 0 15px ${getColorFromPhase(colorPhase)})`,
            }}
          >
            ⭐
          </motion.div>
          <motion.div
            className="h-px w-20"
            style={{
              background: `linear-gradient(90deg, transparent, ${getColorFromPhase(
                colorPhase,
                180
              )}, transparent)`,
            }}
            animate={{
              scaleX: [0, 1, 0],
            }}
            transition={{
              // Slowed down from 3s to 6s
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              // Slowed down delay from 1.5s to 3s
              delay: 3,
            }}
          />
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // Slowed down from 0.8s to 1.5s
          transition={{ delay: 1.2, duration: 1.5, staggerChildren: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { icon: "🚚", text: "Free Delivery", color: 0 },
            { icon: "🌱", text: "100% Organic", color: 120 },
            { icon: "⭐", text: "Premium Quality", color: 240 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2 p-6 rounded-2xl backdrop-blur-sm"
              style={{
                background: `linear-gradient(135deg, 
                  ${getColorFromPhase(colorPhase, item.color)}20, 
                  ${getColorFromPhase(colorPhase, item.color + 60)}10)`,
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              // Slowed down spring animation
              transition={{ type: "spring", stiffness: 150 }}
            >
              <motion.div
                className="text-3xl"
                animate={{
                  // Removed rotateY property that may cause compatibility issues
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  // Slowed down from 4-6s to 8-12s
                  duration: 8 + index * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  filter: `drop-shadow(0 0 10px ${getColorFromPhase(
                    colorPhase,
                    item.color
                  )})`,
                }}
              >
                {item.icon}
              </motion.div>
              <motion.p
                className="font-semibold text-[#491D0B]"
                whileHover={{
                  color: getColorFromPhase(colorPhase, item.color),
                }}
                transition={{ duration: 0.6 }}
              >
                {item.text}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
