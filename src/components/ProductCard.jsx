"use client";
import { useCart } from "@/context/CartContext";
import { cleanName } from "@/lib/utils";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

export default function ProductCard({
  id,
  name,
  variety,
  price,
  originalPrice,
  discountedPrice,
  actionText = "ADD",
  imageUrl,
  slug,
  rating,
}) {
  const cleanedName = cleanName(name);
  const { addToCart, cartItems } = useCart();
  const [amount, setAmount] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const cartItem = cartItems.find((item) => item.id === id);
    if (cartItem) {
      console.log('ProductCard: syncing amount', cartItem.quantity);
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
  }, [addToCart, id, name, variety, price, originalPrice, discountedPrice, imageUrl, slug, amount, isAdding]);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-[#C09A44]/50 hover:shadow-md transition-all duration-300 flex flex-col h-[360px] w-full max-w-[240px] transform hover:scale-105">
      {/* Image Section: Smaller, with fade-in effect */}
      <Link
        href={{
          pathname: `/product/${encodeURIComponent(cleanedName)}`,
          query: { id: id },
        }}
        className="block relative aspect-[4/3] overflow-hidden"
      >
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-opacity duration-500 hover:opacity-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </Link>

      {/* Content Section: Compact, elegant typography */}
      <div className="p-3 flex flex-col flex-grow">
        <Link
          href={{
            pathname: `/product/${encodeURIComponent(cleanedName)}`,
            query: { id: id },
          }}
          className="block mb-2"
        >
          <h3 className="font-semibold text-base text-[#491D0B] line-clamp-1 font-[--font-geist-sans]">
            {name}
          </h3>
          {variety && (
            <p className="text-xs text-[#491D0B]/70 mt-0.5 line-clamp-1">{variety}</p>
          )}
        </Link>

        {/* Price: Smaller, aligned */}
        <div className="mb-2">
          <div className="flex items-center gap-1.5">
            <span className="text-base font-bold text-[#C09A44]">
              {discountedPrice || `৳${price}`}
            </span>
            {originalPrice && (
              <span className="text-xs line-through text-gray-400">
                {typeof originalPrice === "number" ? `৳${originalPrice}` : originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Controls: Compact stepper and gradient button */}
        <div className="mt-auto">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center border border-[#C09A44]/50 rounded-full bg-white">
              <button
                onClick={() => setAmount((prev) => Math.max(1, prev - 1))}
                disabled={amount <= 1}
                className={`p-1.5 text-[#C09A44] rounded-full cursor-pointer transition-colors ${
                  amount <= 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#FFF9F0]"
                }`}
              >
                <Minus size={14} />
              </button>
              <span className="px-2 text-center w-8 font-medium text-[#491D0B] text-xs">
                {amount}
              </span>
              <button
                onClick={() => setAmount((prev) => prev + 1)}
                className="p-1.5 text-[#C09A44] rounded-full cursor-pointer transition-colors hover:bg-[#FFF9F0]"
              >
                <Plus size={14} />
              </button>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart();
              }}
              disabled={isAdding}
              className={`flex-1 py-1.5 px-2 bg-gradient-to-r from-[#C09A44] to-[#B08C3E] text-white rounded-full text-xs font-medium transition-all flex items-center justify-center gap-1 cursor-pointer ${
                isAdding
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:from-[#B08C3E] hover:to-[#A07A2C] hover:shadow-lg"
              }`}
            >
              <ShoppingCart size={14} />
              <span>{isAdding ? "Adding..." : actionText}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}