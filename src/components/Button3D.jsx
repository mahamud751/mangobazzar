"use client";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const Button3D = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "medium",
      className = "",
      disabled = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary: {
        gradient: "from-[#C09A44] to-[#b58a35]",
        shadow: "rgba(192, 154, 68, 0.4)",
        text: "text-white",
      },
      secondary: {
        gradient: "from-[#491D0B] to-[#3d1609]",
        shadow: "rgba(73, 29, 11, 0.4)",
        text: "text-white",
      },
      outline: {
        gradient: "from-transparent to-transparent border-2 border-[#C09A44]",
        shadow: "rgba(192, 154, 68, 0.2)",
        text: "text-[#C09A44]",
      },
    };

    const sizes = {
      small: "px-4 py-2 text-sm",
      medium: "px-6 py-3 text-base",
      large: "px-8 py-4 text-lg",
    };

    const currentVariant = variants[variant];
    const currentSize = sizes[size];

    return (
      <motion.button
        ref={ref}
        className={`
        relative overflow-hidden font-semibold rounded-xl
        bg-gradient-to-r ${currentVariant.gradient} ${
          currentVariant.text
        } ${currentSize}
        transition-all duration-300 cursor-pointer
        transform-gpu perspective-1000
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
        disabled={disabled}
        onClick={onClick}
        initial={{ scale: 1 }}
        whileHover={{
          scale: disabled ? 1 : 1.05,
          boxShadow: disabled ? "none" : `0 15px 35px ${currentVariant.shadow}`,
        }}
        whileTap={{
          scale: disabled ? 1 : 0.95,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        {...props}
      >
        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 opacity-0"
          style={{
            background:
              "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
          }}
          whileHover={{
            opacity: disabled ? 0 : [0, 1, 0],
            x: disabled ? 0 : ["-100%", "100%"],
          }}
          transition={{ duration: 0.8 }}
        />

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0"
          style={{
            background: `radial-gradient(circle, ${currentVariant.shadow} 0%, transparent 70%)`,
          }}
          whileHover={{
            opacity: disabled ? 0 : 0.6,
            scale: disabled ? 1 : 1.2,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Button Content */}
        <motion.span
          className="relative z-10 flex items-center justify-center gap-2"
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>

        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-current opacity-0"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </motion.button>
    );
  }
);

Button3D.displayName = "Button3D";

export default Button3D;
