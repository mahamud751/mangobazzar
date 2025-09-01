"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ServiceFeatures() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure component is mounted before showing animations
    setIsMounted(true);
    // Trigger animations quickly for better perceived performance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50); // Reduced from 100ms to 50ms

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: "🚚",
      title: "Super Fast Delivery",
      description:
        "Doorstep delivery across Bangladesh – Dhaka, Savar, Gazipur, Tangail, Khulna, Sylhet & more within 3 to 5 days.",
      gradient: "from-blue-400 to-cyan-500",
      shadowColor: "rgba(59, 130, 246, 0.3)",
    },
    {
      icon: "👨‍🌾",
      title: "Trust & Service",
      description:
        "Farmer-owned. Freshly picked, no middlemen. Trusted by thousands of customers over 8+ years.",
      gradient: "from-green-400 to-emerald-500",
      shadowColor: "rgba(34, 197, 94, 0.3)",
    },
    {
      icon: "📞",
      title: "Customer Support",
      description:
        "Friendly support from order to delivery. Get email & SMS updates with real-time tracking.",
      gradient: "from-purple-400 to-pink-500",
      shadowColor: "rgba(168, 85, 247, 0.3)",
    },
  ];

  // Only render animations after component is properly mounted
  if (!isMounted) {
    return (
      <section className="relative py-16 overflow-hidden">
        {" "}
        {/* Reduced padding */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #ffffff 0%, #fafafa 50%, #f5f5f5 100%)",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            {" "}
            {/* Reduced margin */}
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-3"
              style={{
                background: "linear-gradient(45deg, #C09A44, #491D0B, #C09A44)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Why Choose MangoBazzar?
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              {" "}
              {/* Reduced font size */}
              Experience the difference with our premium service and quality
              commitment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {" "}
            {/* Reduced gap */}
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div
                  className="absolute inset-0 rounded-2xl opacity-0"
                  style={{
                    background: `radial-gradient(circle, ${feature.shadowColor} 0%, transparent 70%)`,
                    filter: "blur(20px)",
                    scale: 1.1,
                  }}
                />
                <div className="relative bg-[#FAF5E9] p-6 rounded-2xl shadow-md border border-[#f2e8d8] overflow-hidden">
                  {" "}
                  {/* Reduced padding and shadow */}
                  <div className="flex items-start gap-3 mb-4">
                    {" "}
                    {/* Reduced gap and margin */}
                    <div
                      className={`text-4xl p-3 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-md`}
                    >
                      {" "}
                      {/* Reduced padding and shadow */}
                      <span className="block filter drop-shadow-md">
                        {feature.icon}
                      </span>{" "}
                      {/* Reduced shadow */}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#491D0B] mb-1">
                        {feature.title}
                      </h3>{" "}
                      {/* Reduced font size and margin */}
                    </div>
                  </div>
                  <p className="text-[#6B4C3B] leading-relaxed text-justify text-sm">
                    {" "}
                    {/* Reduced font size */}
                    {feature.description}
                  </p>
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 overflow-hidden">
      {" "}
      {/* Reduced padding */}
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #ffffff 0%, #fafafa 50%, #f5f5f5 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }} // Reduced from 0.5
      />
      {/* Floating Geometric Shapes - Simplified */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-16 left-8 w-16 h-16 rounded-full opacity-5" // Reduced size and opacity
          style={{ background: "linear-gradient(45deg, #C09A44, #491D0B)" }}
          animate={{
            y: [0, -15, 0], // Reduced animation range
            rotate: [0, 180], // Simplified rotation
            scale: [1, 1.1, 1], // Reduced scale
          }}
          transition={{
            duration: 10, // Reduced from 15
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-32 right-16 w-12 h-12 rounded-full opacity-5" // Reduced size and opacity
          style={{ background: "linear-gradient(45deg, #491D0B, #C09A44)" }}
          animate={{
            y: [0, 20, 0], // Reduced animation range
            rotate: [180, 0], // Simplified rotation
            scale: [1, 1.1, 1], // Reduced scale
          }}
          transition={{
            duration: 8, // Reduced from 12
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-16 left-1/3 w-10 h-10 rounded-full opacity-5" // Reduced size and opacity
          style={{ background: "linear-gradient(45deg, #C09A44, #491D0B)" }}
          animate={{
            y: [0, -20, 0], // Reduced animation range
            rotate: [0, -180, -360],
            scale: [1, 1.1, 1], // Reduced scale
          }}
          transition={{
            duration: 12, // Reduced from 18
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12" // Reduced margin
          initial={{ opacity: 0, y: 30 }} // Reduced animation
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} // Reduced from 0.8
        >
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-3 text-3d" // Reduced font size and margin
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
            Why Choose MangoBazzar?
          </motion.h2>
          <motion.p
            className="text-base text-gray-600 max-w-2xl mx-auto" // Reduced font size
            initial={{ opacity: 0, y: 15 }} // Reduced animation
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }} // Reduced delay and duration
          >
            Experience the difference with our premium service and quality
            commitment
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6" // Reduced gap
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }} // Reduced from 0.8
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }} // Reduced animation
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              whileHover={{
                y: -5, // Reduced hover effect
                rotateY: 3, // Reduced rotation
                rotateX: 3, // Reduced rotation
                scale: 1.01, // Reduced scale
              }}
              transition={{
                type: "spring",
                stiffness: 200, // Increased from 300 for better performance
                damping: 20,
              }}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30" // Reduced opacity
                style={{
                  background: `radial-gradient(circle, ${feature.shadowColor} 0%, transparent 70%)`,
                  filter: "blur(15px)", // Reduced blur
                  scale: 1.05, // Reduced scale
                }}
                transition={{ duration: 0.2 }} // Reduced duration
              />

              {/* Card */}
              <motion.div
                className="relative bg-[#FAF5E9] p-6 rounded-2xl shadow-md border border-[#f2e8d8] hover:border-[#C09A44] transition-all duration-200 overflow-hidden card-3d glass-effect" // Reduced padding, shadow, and transition duration
                whileHover={{
                  boxShadow: `0 15px 30px ${feature.shadowColor}`, // Reduced shadow
                }}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20" // Reduced opacity
                  style={{
                    background:
                      "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)", // Reduced opacity
                  }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5, // Reduced from 2
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with 3D Effect */}
                  <motion.div
                    className="flex items-start gap-3 mb-4" // Reduced gap and margin
                    whileHover={{ scale: 1.03 }} // Reduced hover effect
                  >
                    <motion.div
                      className={`text-4xl p-3 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-md`} // Reduced padding and shadow
                      whileHover={{
                        rotateY: 8, // Reduced rotation
                        rotateX: 5, // Reduced rotation
                        scale: 1.05, // Reduced scale
                      }}
                      animate={{
                        rotateY: [0, 3, -3, 0], // Reduced rotation
                        rotateX: [0, 1, -1, 0], // Reduced rotation
                      }}
                      transition={{
                        duration: 5, // Reduced from 6
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.span
                        className="block filter drop-shadow-md" // Reduced shadow
                        style={{
                          filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))", // Reduced shadow
                        }}
                      >
                        {feature.icon}
                      </motion.span>
                    </motion.div>

                    <div className="flex-1">
                      <motion.h3
                        className="text-xl font-bold text-[#491D0B] mb-1" // Reduced font size and margin
                        whileHover={{
                          color: "#C09A44",
                          scale: 1.01, // Reduced scale
                        }}
                        transition={{ duration: 0.1 }} // Reduced duration
                      >
                        {feature.title}
                      </motion.h3>
                    </div>
                  </motion.div>

                  <motion.p
                    className="text-[#6B4C3B] leading-relaxed text-justify text-sm" // Reduced font size
                    whileHover={{ color: "#491D0B" }}
                    transition={{ duration: 0.1 }} // Reduced duration
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Bottom Accent */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100`} // Reduced height
                  transition={{ duration: 0.2 }} // Reduced duration
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Bottom Wave - Simplified */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-12 opacity-5" // Reduced height and opacity
        style={{
          background: "linear-gradient(45deg, #C09A44, #491D0B)",
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 60%)", // Simplified wave
        }}
        animate={{
          clipPath: [
            "polygon(0 100%, 100% 100%, 100% 0, 0 60%)",
            "polygon(0 100%, 100% 100%, 100% 10%, 0 80%)",
            "polygon(0 100%, 100% 100%, 100% 0, 0 60%)",
          ],
        }}
        transition={{
          duration: 6, // Reduced from 8
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
