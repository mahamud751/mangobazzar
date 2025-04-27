'use client';
import { useState, useEffect, useCallback } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { cleanName } from '@/lib/utils';

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
  rating,
}) {
  const cleanedName = cleanName(name);
  const { addToCart, cartItems } = useCart();
  const [amount, setAmount] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

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
  }, [addToCart, id, name, variety, price, originalPrice, discountedPrice, imageUrl, slug, amount, isAdding]);

  const hasDiscount = discountedPrice && originalPrice > price;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 flex flex-col h-full group">
      <div className="relative aspect-square bg-gray-50">
        <Link
          href={{
            pathname: `/product/${encodeURIComponent(cleanedName)}`,
            query: { id: id },
          }}
          className="block w-full h-full"
        >
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-90"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </div>

      <div className="p-3 flex flex-col flex-grow">
        <Link
          href={{
            pathname: `/product/${encodeURIComponent(cleanedName)}`,
            query: { id: id },
          }}
          className="block mb-2"
        >
          <h3 className="font-medium text-gray-900 text-sm line-clamp-2 leading-tight">
            {name}
          </h3>
          {variety && (
            <p className="text-xs text-gray-500 mt-1">{variety}</p>
          )}
        </Link>

        <div className="mt-auto">
          <div className="mb-3">
            <div className="flex items-baseline gap-2">
              <span className="text-base font-bold text-gray-900">
                ৳{hasDiscount ? discountedPrice : price}
              </span>
              {hasDiscount && (
                <span className="text-xs line-through text-gray-400">
                  ৳{originalPrice}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 w-full">
            <div className="flex items-center border border-gray-200 rounded-md overflow-hidden bg-white">
              <button
                onClick={() => setAmount((prev) => Math.max(1, prev - 1))}
                disabled={amount <= 1}
                className={`px-2 py-1.5 text-gray-600 cursor-pointer transition-colors ${amount <= 1 ? "opacity-30" : "hover:bg-gray-50"}`}
              >
                <Minus size={12} strokeWidth={3} />
              </button>
              <span className="px-2 py-1.5 text-center w-8 font-medium text-gray-900 text-xs">
                {amount}
              </span>
              <button
                onClick={() => setAmount((prev) => prev + 1)}
                className="px-2 py-1.5 text-gray-600 cursor-pointer transition-colors hover:bg-gray-50"
              >
                <Plus size={12} strokeWidth={3} />
              </button>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart();
              }}
              disabled={isAdding}
              className={`flex-1 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-md transition-all flex items-center justify-center gap-1.5 text-xs font-medium whitespace-nowrap cursor-pointer ${isAdding ? "opacity-80" : "hover:shadow-md hover:from-amber-600 hover:to-amber-700"}`}
            >
              <ShoppingCart size={14} strokeWidth={2.5} />
              <span>{isAdding ? "ADDING..." : actionText}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}