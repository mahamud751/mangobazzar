"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhyUs() {
  const features = [
    {
      emoji: "🥭",
      title: "Guaranteed Freshness",
      description:
        "Every mango is hand-checked and guaranteed to meet our high standards of taste and quality.",
    },
    {
      emoji: "🌳",
      title: "Grown in Chapai Nawabganj",
      description:
        "Authentic mangoes straight from the mango capital of Bangladesh — no middlemen, no mixing.",
    },
    {
      emoji: "🌿",
      title: "Organically Grown",
      description:
        "No chemicals, no shortcuts. Just pure mangoes grown with care and sustainability.",
    },
    {
      emoji: "👐",
      title: "Hand-Picked & Uniform",
      description:
        "Each box includes mangoes of similar size and ripeness, hand-selected with precision.",
    },
    {
      emoji: "📦",
      title: "Export-Quality Packaging",
      description:
        "Delivered in 6-ply custom boxes that protect and preserve the freshness in every shipment.",
    },
    {
      title: "Get the Real Taste of Chapai Mangoes",
      hasButton: true,
    },
  ];

  return (
    <section className="py-16 relative">
      {/* Background with decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/50 to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#C09A44] mb-2">
            Why Mango Bazar?
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-[#491D0B]">
            More Than Just Mangoes — It's a Promise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isLast = feature.hasButton;

            return (
              <motion.div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-lg border border-[#f0e6d2] h-full flex flex-col transition-all duration-300 ${
                  isLast
                    ? "items-center justify-center text-center"
                    : "justify-between"
                }`}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {!isLast ? (
                  <>
                    <div className="flex flex-col items-center text-center flex-grow">
                      {feature.emoji && (
                        <motion.div
                          className="mb-4 text-5xl"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span role="img" aria-label={feature.title}>
                            {feature.emoji}
                          </span>
                        </motion.div>
                      )}
                      <motion.h3
                        className="text-lg font-semibold text-[#491D0B] mb-1"
                        whileHover={{ color: "#C09A44" }}
                      >
                        {feature.title}
                      </motion.h3>
                      {feature.description && (
                        <p className="text-sm text-[#6B4B3E] mt-2">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <motion.h3
                      className="text-xl font-semibold text-[#491D0B] mb-4 text-center"
                      whileHover={{ color: "#C09A44" }}
                    >
                      {feature.title}
                    </motion.h3>
                    <Link href="/shop">
                      <motion.button
                        className="bg-gradient-to-r from-[#C09A44] to-amber-600 hover:from-amber-600 hover:to-[#C09A44] text-white font-medium py-3 px-8 rounded-full cursor-pointer transition-all duration-300 shadow-md"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 15px -3px rgba(192, 154, 68, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Shop Now
                      </motion.button>
                    </Link>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
