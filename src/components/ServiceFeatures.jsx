"use client";
import { motion } from "framer-motion";

export default function ServiceFeatures() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
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
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #ffffff 0%, #fafafa 50%, #f5f5f5 100%)",
        }}
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-10"
          style={{ background: "linear-gradient(45deg, #C09A44, #491D0B)" }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 rounded-full opacity-10"
          style={{ background: "linear-gradient(45deg, #491D0B, #C09A44)" }}
          animate={{
            y: [0, 30, 0],
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-12 h-12 rounded-full opacity-10"
          style={{ background: "linear-gradient(45deg, #C09A44, #491D0B)" }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, -180, -360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-4 text-3d"
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
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Experience the difference with our premium service and quality
            commitment
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
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
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-50"
                style={{
                  background: `radial-gradient(circle, ${feature.shadowColor} 0%, transparent 70%)`,
                  filter: "blur(20px)",
                  scale: 1.1,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Card */}
              <motion.div
                className="relative bg-[#FAF5E9] p-8 rounded-3xl shadow-lg border border-[#f2e8d8] hover:border-[#C09A44] transition-all duration-300 overflow-hidden card-3d glass-effect"
                whileHover={{
                  boxShadow: `0 25px 50px ${feature.shadowColor}`,
                }}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
                  }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with 3D Effect */}
                  <motion.div
                    className="flex items-start gap-4 mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className={`text-5xl p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-lg`}
                      whileHover={{
                        rotateY: 15,
                        rotateX: 10,
                        scale: 1.1,
                      }}
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
                      <motion.span
                        className="block filter drop-shadow-lg"
                        style={{
                          filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                        }}
                      >
                        {feature.icon}
                      </motion.span>
                    </motion.div>

                    <div className="flex-1">
                      <motion.h3
                        className="text-xl md:text-2xl font-bold text-[#491D0B] mb-2"
                        whileHover={{
                          color: "#C09A44",
                          scale: 1.02,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {feature.title}
                      </motion.h3>
                    </div>
                  </motion.div>

                  <motion.p
                    className="text-[#6B4C3B] leading-relaxed text-justify"
                    whileHover={{ color: "#491D0B" }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Bottom Accent */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100`}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-16 opacity-5"
        style={{
          background: "linear-gradient(45deg, #C09A44, #491D0B)",
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 80%)",
        }}
        animate={{
          clipPath: [
            "polygon(0 100%, 100% 100%, 100% 0, 0 80%)",
            "polygon(0 100%, 100% 100%, 100% 20%, 0 60%)",
            "polygon(0 100%, 100% 100%, 100% 0, 0 80%)",
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
