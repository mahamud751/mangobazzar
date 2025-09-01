"use client";
import { useState, useEffect, useCallback } from "react";
import { ShoppingCart, Plus, Minus, Star, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { cleanName } from "@/lib/utils";

export default function ProductCard({
  id,
  name,
  variety,
  price,
  originalPrice,
  discountedPrice,
  actionText = "ADD TO CART",
  imageUrl,
  slug,
  rating = 4.5,
}) {
  const cleanedName = cleanName(name);
  const { addToCart, cartItems } = useCart();
  const [amount, setAmount] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const cartItem = cartItems.find((item) => item.id === id);
    if (cartItem) {
      setAmount(cartItem.quantity);
    }
  }, [cartItems, id]);

  const handleAddToCart = useCallback(async () => {
    if (isAdding) return;
    setIsAdding(true);
    const product = {
      id,
      name,
      variety,
      price,
      originalPrice,
      discountedPrice,
      imageUrl,
      slug,
      quantity: amount,
    };
    try {
      await addToCart(product);
    } finally {
      setIsAdding(false);
    }
  }, [
    addToCart,
    id,
    name,
    variety,
    price,
    originalPrice,
    discountedPrice,
    imageUrl,
    slug,
    amount,
    isAdding,
  ]);

  const hasDiscount = discountedPrice && originalPrice > price;
  const discountPercentage = hasDiscount
    ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)
    : 0;

  const cardVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const imageVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full group cursor-pointer card-3d"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(45deg, rgba(192, 154, 68, 0.3), rgba(73, 29, 11, 0.2))",
          filter: "blur(20px)",
          scale: 1.1,
          zIndex: -1,
        }}
        animate={{
          opacity: isHovered ? 0.7 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Discount Badge */}
      {hasDiscount && (
        <motion.div
          className="absolute top-3 left-3 z-20 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            boxShadow: "0 5px 15px rgba(239, 68, 68, 0.4)",
          }}
        >
          -{discountPercentage}%
        </motion.div>
      )}

      {/* Wishlist Button */}
      <motion.button
        className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg"
        onClick={(e) => {
          e.preventDefault();
          setIsLiked(!isLiked);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          backgroundColor: isLiked ? "#ef4444" : "rgba(255, 255, 255, 0.8)",
        }}
      >
        <Heart
          size={16}
          className={`transition-colors ${
            isLiked ? "text-white fill-current" : "text-gray-600"
          }`}
        />
      </motion.button>

      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-to-br from-[#FAF5E9] to-[#fffbea] overflow-hidden">
        <Link
          href={{
            pathname: `/product/${encodeURIComponent(cleanedName)}`,
            query: { id: id },
          }}
          className="block w-full h-full"
        >
          <motion.div
            className="relative w-full h-full"
            variants={imageVariants}
          >
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 opacity-0"
              style={{
                background:
                  "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
              }}
              animate={{
                x: isHovered ? ["-100%", "100%"] : "-100%",
                opacity: isHovered ? [0, 1, 0] : 0,
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </Link>

        {/* Floating Rating */}
        <motion.div
          className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-md"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Star size={12} className="text-yellow-400 fill-current" />
          <span className="text-xs font-medium text-gray-700">{rating}</span>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        className="p-4 flex flex-col flex-grow relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Link
          href={{
            pathname: `/product/${encodeURIComponent(cleanedName)}`,
            query: { id: id },
          }}
          className="block mb-3"
        >
          <motion.h3
            className="font-semibold text-gray-900 text-sm line-clamp-2 leading-tight mb-1"
            whileHover={{
              color: "#C09A44",
              transition: { duration: 0.2 },
            }}
          >
            {name}
          </motion.h3>
          {variety && (
            <motion.p
              className="text-xs text-gray-500"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
            >
              {variety}
            </motion.p>
          )}
        </Link>

        <div className="mt-auto space-y-3">
          {/* Price */}
          <div className="flex items-baseline gap-2">
            <motion.span
              className="text-lg font-bold text-gray-900"
              whileHover={{ scale: 1.05 }}
            >
              ৳{hasDiscount ? discountedPrice : price}
            </motion.span>
            {hasDiscount && (
              <motion.span
                className="text-sm line-through text-gray-400"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
              >
                ৳{originalPrice}
              </motion.span>
            )}
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-3 w-full">
            {/* Quantity Selector */}
            <motion.div
              className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
              whileHover={{
                borderColor: "#C09A44",
                boxShadow: "0 4px 12px rgba(192, 154, 68, 0.2)",
              }}
            >
              <motion.button
                onClick={() => setAmount((prev) => Math.max(1, prev - 1))}
                disabled={amount <= 1}
                className={`px-3 py-2 transition-colors ${
                  amount <= 1 ? "opacity-30" : "hover:bg-gray-50"
                }`}
                whileHover={{ backgroundColor: "#f9fafb" }}
                whileTap={{ scale: 0.95 }}
              >
                <Minus size={14} strokeWidth={2.5} />
              </motion.button>
              <motion.span
                className="px-3 py-2 text-center min-w-[40px] font-semibold text-gray-900 text-sm"
                key={amount}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                {amount}
              </motion.span>
              <motion.button
                onClick={() => setAmount((prev) => prev + 1)}
                className="px-3 py-2 transition-colors hover:bg-gray-50"
                whileHover={{ backgroundColor: "#f9fafb" }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus size={14} strokeWidth={2.5} />
              </motion.button>
            </motion.div>

            {/* Add to Cart Button */}
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart();
              }}
              disabled={isAdding}
              className="flex-1 py-3 bg-gradient-to-r from-[#C09A44] to-[#b58a35] text-white rounded-xl transition-all flex items-center justify-center gap-2 text-sm font-semibold shadow-lg relative overflow-hidden"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 25px rgba(192, 154, 68, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: isAdding
                  ? "0 4px 15px rgba(192, 154, 68, 0.3)"
                  : "0 4px 15px rgba(192, 154, 68, 0.2)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#b58a35] to-[#C09A44]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="relative z-10 flex items-center gap-2"
                animate={{
                  rotate: isAdding ? [0, 10, -10, 0] : 0,
                }}
                transition={{ duration: 0.5, repeat: isAdding ? Infinity : 0 }}
              >
                <ShoppingCart size={16} strokeWidth={2.5} />
                <span>{isAdding ? "ADDING..." : actionText}</span>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Bottom Shine Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C09A44] to-[#b58a35] opacity-0"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
