"use client";
import { motion } from "framer-motion";

export default function Loading3D({ size = "medium", text = "Loading..." }) {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-16 h-16",
    large: "w-24 h-24",
  };

  const textSizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* 3D Mango Spinner */}
      <div className="relative">
        {/* Outer Ring */}
        <motion.div
          className={`${sizeClasses[size]} border-4 border-transparent rounded-full`}
          style={{
            borderTopColor: "#C09A44",
            borderRightColor: "#491D0B",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner Ring */}
        <motion.div
          className={`absolute inset-2 border-2 border-transparent rounded-full`}
          style={{
            borderBottomColor: "#C09A44",
            borderLeftColor: "#491D0B",
          }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Center Mango */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🥭
        </motion.div>
      </div>

      {/* Loading Text */}
      <motion.p
        className={`${textSizes[size]} font-medium text-[#491D0B] text-center`}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.p>

      {/* Floating Dots */}
      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-[#C09A44] rounded-full"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Full Screen Loading Component
export function FullScreenLoading3D() {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-[#FAF5E9] to-[#fffbea] flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Floating Background Mangoes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🥭
          </motion.div>
        ))}
      </div>

      {/* Main Loading Content */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0.5, rotateY: -180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Loading3D size="large" text="Loading your mango experience..." />
      </motion.div>

      {/* Ripple Effect */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
      >
        <div className="w-32 h-32 border-2 border-[#C09A44] rounded-full opacity-20" />
      </motion.div>
    </motion.div>
  );
}
