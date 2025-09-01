"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function ScrollReveal3D({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 100,
  rotate = { x: 0, y: 0, z: 0 },
  scale = 0.8,
  threshold = 0.1,
  triggerOnce = true,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce]);

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: distance };
    }
  };

  const initialPosition = getInitialPosition();

  const variants = {
    hidden: {
      opacity: 0,
      scale,
      x: initialPosition.x,
      y: initialPosition.y,
      rotateX: rotate.x,
      rotateY: rotate.y,
      rotateZ: rotate.z,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

// Staggered reveal for multiple children
export function StaggeredReveal3D({
  children,
  className = "",
  staggerDelay = 0.1,
  threshold = 0.1,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      rotateX: -20,
      scale: 0.9,
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
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
}
