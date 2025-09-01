"use client";
import {
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BackToTopButton from "./BackToTopButton";

export default function Footer() {
  const [colorPhase, setColorPhase] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const colorCycle = () => setColorPhase((prev) => (prev + 0.5) % 360);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const colorInterval = setInterval(colorCycle, 50);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(colorInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const getColor = (offset = 0) =>
    `hsl(${(colorPhase + offset) % 360}, 60%, 55%)`;

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.footer
      className="relative overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at ${mousePosition.x}% ${
          mousePosition.y
        }%, 
          hsl(${colorPhase}, 25%, 98%) 0%, 
          hsl(${(colorPhase + 60) % 360}, 15%, 96%) 50%, 
          hsl(${(colorPhase + 120) % 360}, 20%, 94%) 100%)
        `,
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 20}px`,
              color: getColor(i * 36),
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
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

      {/* Top Wave */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-12 opacity-30"
        style={{
          background: `linear-gradient(45deg, ${getColor()}, ${getColor(120)})`,
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 80%)",
        }}
        animate={{
          clipPath: [
            "polygon(0 100%, 100% 100%, 100% 0, 0 80%)",
            "polygon(0 100%, 100% 100%, 100% 20%, 0 60%)",
            "polygon(0 100%, 100% 100%, 100% 0, 0 80%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {/* Brand */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} className="mb-4">
              <Link href="/" className="relative w-[180px] h-[60px] block">
                <Image
                  src="https://i.ibb.co/RT3pvYMb/logo.png"
                  alt="Mango Bazar"
                  fill
                  className="object-contain brightness-110"
                  priority
                />
              </Link>
            </motion.div>
            <p className="text-[#491D0B] text-sm mb-4">
              A legacy of excellence in organic mangoes with{" "}
              <motion.span
                className="inline-flex items-center gap-1 font-medium"
                animate={{ color: getColor() }}
              >
                <Heart size={14} /> love
              </motion.span>
            </p>
            {/* Contact */}
            <div className="space-y-2">
              {[
                { Icon: Mail, text: "info@mangobazzar.com" },
                { Icon: Phone, text: "+880 1234 567890" },
                { Icon: MapPin, text: "Chapai Nawabganj, BD" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 text-[#6B4C3B] text-sm"
                  whileHover={{ x: 5, color: getColor(i * 120) }}
                >
                  <motion.div animate={{ color: getColor(i * 120) }}>
                    <item.Icon size={14} />
                  </motion.div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-lg font-bold mb-4"
              animate={{ color: getColor(60) }}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us", icon: "🏢" },
                { href: "/shop", label: "Shop", icon: "🛒" },
                { href: "/blog", label: "Blog", icon: "📝" },
                { href: "/contact", label: "Contact", icon: "📞" },
              ].map((link) => (
                <motion.li key={link.href} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[#6B4C3B] hover:text-[#491D0B] text-sm transition-colors duration-300"
                  >
                    <motion.span
                      animate={{ color: getColor(link.href.length * 30) }}
                    >
                      {link.icon}
                    </motion.span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Useful Links */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-lg font-bold mb-4"
              animate={{ color: getColor(120) }}
            >
              Policies
            </motion.h3>
            <ul className="space-y-2">
              {[
                { href: "/shipping", label: "Shipping", icon: "🚚" },
                { href: "/terms", label: "Terms", icon: "📋" },
                { href: "/privacy", label: "Privacy", icon: "🔒" },
              ].map((link) => (
                <motion.li key={link.href} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[#6B4C3B] hover:text-[#491D0B] text-sm transition-colors duration-300"
                  >
                    <motion.span
                      animate={{ color: getColor(link.href.length * 25) }}
                    >
                      {link.icon}
                    </motion.span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-lg font-bold mb-4"
              animate={{ color: getColor(180) }}
            >
              Follow Us
            </motion.h3>
            <div className="flex gap-3 mb-4">
              {[
                { Icon: Instagram, href: "#", color: "#E4405F" },
                { Icon: Facebook, href: "#", color: "#1877F2" },
                { Icon: Youtube, href: "#", color: "#FF0000" },
              ].map((social, i) => (
                <Link key={i} href={social.href}>
                  <motion.div
                    className="p-2 rounded-lg backdrop-blur-sm border-2 border-gray-200 shadow-sm bg-white/70 hover:bg-white transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      rotateY: 15,
                      boxShadow: `0 8px 25px ${social.color}40`,
                    }}
                    style={{
                      borderColor: `${social.color}30`,
                    }}
                  >
                    <social.Icon size={20} style={{ color: social.color }} />
                  </motion.div>
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-lg bg-white border-2 border-gray-200 text-[#491D0B] text-sm focus:outline-none focus:border-[#C09A44] transition-colors shadow-sm"
              />
              <motion.button
                className="w-full py-2 rounded font-semibold text-sm"
                style={{
                  background: `linear-gradient(45deg, ${getColor()}, ${getColor(
                    60
                  )})`,
                }}
                whileHover={{ scale: 1.02 }}
                animate={{
                  background: `linear-gradient(45deg, ${getColor()}, ${getColor(
                    60
                  )})`,
                }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="mt-12 pt-6 border-t border-gray-200 text-center relative"
          variants={itemVariants}
        >
          {/* Animated Divider */}
          <motion.div
            className="absolute top-0 left-0 h-px"
            style={{
              background: `linear-gradient(90deg, 
                transparent, 
                ${getColor()}, 
                ${getColor(120)}, 
                ${getColor(240)}, 
                transparent)
              `,
            }}
            animate={{
              width: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.p
            className="text-[#6B4C3B] text-sm"
            whileHover={{ color: getColor() }}
          >
            © 2025{" "}
            <motion.span
              className="font-bold"
              animate={{ color: getColor(120) }}
            >
              Chapai Mango Bazar
            </motion.span>
            . Made with{" "}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ❤️
            </motion.span>
          </motion.p>
        </motion.div>
      </div>

      <BackToTopButton />
    </motion.footer>
  );
}
