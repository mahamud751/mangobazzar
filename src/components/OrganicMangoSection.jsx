"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function OrganicMangoSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInView, setIsInView] = useState(false);
  const [colorPhase, setColorPhase] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );

  const smoothMouseX = useSpring(0, { stiffness: 300, damping: 30 });
  const smoothMouseY = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
        smoothMouseX.set((x - 0.5) * 50);
        smoothMouseY.set((y - 0.5) * 50);
      }
    };

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInView(isVisible);
      }
    };

    const colorCycle = () => {
      setColorPhase((prev) => (prev + 1) % 360);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    const colorInterval = setInterval(colorCycle, 50);

    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(colorInterval);
    };
  }, [smoothMouseX, smoothMouseY]);

  const mangoImages = [
    {
      src: "https://i.ibb.co/KjXpn0Pb/organic-mango-section-01.webp",
      alt: "Premium Organic Mango",
      gridClass: "col-span-1 row-span-3",
      delay: 0,
    },
    {
      src: "https://i.ibb.co/k7r5mf6/organic-mango-section-02.webp",
      alt: "Fazli Mango Variety",
      gridClass: "col-span-1 row-span-2",
      delay: 0.2,
    },
    {
      src: "https://i.ibb.co/wFZWqQmL/organic-mango-section-03.webp",
      alt: "Gauromoti Mango",
      gridClass: "col-span-1 row-span-3",
      delay: 0.4,
    },
    {
      src: "https://i.ibb.co/8gVgG1yR/organic-mango-section-04.webp",
      alt: "Gopalbhog Mango",
      gridClass: "col-span-1 row-span-2",
      delay: 0.6,
    },
  ];

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
    hidden: {
      y: 100,
      opacity: 0,
      scale: 0.8,
      rotateX: -30,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
      rotateY: -90,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  const getColorFromPhase = (phase, offset = 0) => {
    const hue = (phase + offset) % 360;
    return `hsl(${hue}, 70%, 60%)`;
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          hsl(${colorPhase}, 20%, 98%) 0%, 
          hsl(${(colorPhase + 60) % 360}, 15%, 96%) 50%, 
          hsl(${(colorPhase + 120) % 360}, 25%, 94%) 100%)
        `,
        y,
        opacity,
        scale,
      }}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Dynamic Color Orbs Following Mouse */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: mousePosition.x * 100 + "%",
          top: mousePosition.y * 100 + "%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 200 - i * 30,
              height: 200 - i * 30,
              background: `radial-gradient(circle, ${getColorFromPhase(
                colorPhase,
                i * 72
              )} 0%, transparent 70%)`,
              opacity: 0.1 - i * 0.02,
              filter: "blur(20px)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 60 + 30}px`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              color: getColorFromPhase(colorPhase, i * 30),
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

      {/* Morphing Geometric Background */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 opacity-20"
        style={{
          background: `conic-gradient(from ${colorPhase}deg, 
            ${getColorFromPhase(colorPhase)} 0deg, 
            ${getColorFromPhase(colorPhase, 120)} 120deg, 
            ${getColorFromPhase(colorPhase, 240)} 240deg, 
            ${getColorFromPhase(colorPhase)} 360deg)
          `,
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 opacity-15"
        style={{
          background: `linear-gradient(45deg, 
            ${getColorFromPhase(colorPhase, 180)}, 
            ${getColorFromPhase(colorPhase, 270)})
          `,
          borderRadius: "50%",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center lg:flex-row lg:gap-16"
          style={{
            x: smoothMouseX,
            y: smoothMouseY,
          }}
        >
          {/* Enhanced Image Grid - Left Side */}
          <motion.div
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            variants={itemVariants}
          >
            <motion.div
              className="grid grid-cols-2 grid-rows-6 gap-6 h-[700px] relative"
              style={{ perspective: "1000px" }}
            >
              {/* Glow Effect Behind Grid */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at center, 
                    ${getColorFromPhase(colorPhase, 0)} 0%, 
                    transparent 70%)
                  `,
                  filter: "blur(40px)",
                  scale: 1.2,
                }}
                animate={{
                  scale: [1.2, 1.4, 1.2],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {mangoImages.map((image, index) => (
                <motion.div
                  key={index}
                  className={`relative ${image.gridClass} rounded-2xl overflow-hidden group cursor-pointer`}
                  variants={imageVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    rotateX: 5,
                    z: 50,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Color-changing Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background: `linear-gradient(45deg, 
                        ${getColorFromPhase(colorPhase, index * 90)}, 
                        ${getColorFromPhase(colorPhase, (index + 1) * 90)})
                      `,
                      padding: "3px",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full bg-white rounded-2xl" />
                  </motion.div>

                  {/* Image Container */}
                  <motion.div className="relative w-full h-full overflow-hidden rounded-2xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index < 2}
                    />

                    {/* Color Overlay on Hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30"
                      style={{
                        background: `linear-gradient(135deg, 
                          ${getColorFromPhase(colorPhase, index * 60)} 0%, 
                          transparent 100%)
                        `,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-50"
                      style={{
                        background:
                          "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%)",
                      }}
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  {/* Floating Label */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm font-semibold text-[#491D0B] text-center">
                      {image.alt}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Text Content - Right Side */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            variants={itemVariants}
          >
            {/* Floating Color Orb */}
            <motion.div
              className="absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-20 pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${getColorFromPhase(
                  colorPhase
                )} 0%, transparent 70%)`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.h2
              className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight"
              style={{
                background: `linear-gradient(45deg, 
                  ${getColorFromPhase(colorPhase, 0)}, 
                  #491D0B, 
                  ${getColorFromPhase(colorPhase, 120)})
                `,
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Welcome to the World of{" "}
              <motion.span
                className="inline-block"
                animate={{
                  rotateY: [0, 10, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Mango Bazzar
              </motion.span>
            </motion.h2>

            <motion.div
              className="space-y-8 text-[#491D0B] text-justify relative"
              variants={itemVariants}
            >
              {[
                "Every bite rekindles childhood memories of juicy, tree-fresh mangoes. Our unrivaled orchards in Chapai Nawabganj grow the finest organic mangoes under the sun.",
                "The unique terrain, enriched with minerals and kissed by ideal humidity, creates the perfect conditions for exceptional mango harvests.",
                "Globally renowned for their fragrance, sweetness, and luscious texture — our mangoes are a true indulgence for the senses.",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.3,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                >
                  {/* Color Bar */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                    style={{
                      background: getColorFromPhase(colorPhase, index * 120),
                    }}
                    animate={{
                      scaleY: [0, 1],
                      opacity: [0, 1, 0.7],
                    }}
                    transition={{
                      delay: index * 0.3 + 0.5,
                      duration: 0.8,
                    }}
                  />

                  <motion.p
                    className="text-lg leading-relaxed pl-6"
                    whileHover={{
                      x: 10,
                      color: getColorFromPhase(colorPhase, index * 120),
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {text}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="flex items-center justify-center mt-12 gap-4"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="h-px flex-1 opacity-30"
                style={{
                  background: `linear-gradient(90deg, transparent, ${getColorFromPhase(
                    colorPhase
                  )}, transparent)`,
                }}
                animate={{
                  scaleX: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="text-3xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  filter: `drop-shadow(0 0 10px ${getColorFromPhase(
                    colorPhase
                  )})`,
                }}
              >
                🥭
              </motion.div>
              <motion.div
                className="h-px flex-1 opacity-30"
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
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 opacity-20"
        style={{
          background: `linear-gradient(45deg, 
            ${getColorFromPhase(colorPhase)}, 
            ${getColorFromPhase(colorPhase, 180)})
          `,
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 60%)",
        }}
        animate={{
          clipPath: [
            "polygon(0 100%, 100% 100%, 100% 0, 0 60%)",
            "polygon(0 100%, 100% 100%, 100% 30%, 0 80%)",
            "polygon(0 100%, 100% 100%, 100% 0, 0 60%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.section>
  );
}
