'use client';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
  discount,
  isNew,
  stock
}) {
  const { addToCart } = useCart();
  const [amount, setAmount] = useState(1);

  const handleAddToCart = () => {
    const product = {
      id,
      name,
      variety,
      price,
      originalPrice,
      discountedPrice,
      imageUrl,
      slug,
      quantity: amount
    };
    addToCart(product);
  };

  return (
    <div className="bg-[#fff9eb] rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:border-[#C09A44] hover:shadow-xl transition-all duration-200 flex flex-col h-full">
      {/* Product Image */}
      <Link href={`/product/${slug}`} className="block relative aspect-square">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {isNew && (
          <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
            NEW
          </span>
        )}
        {discount && (
          <span className="absolute top-2 right-2 bg-[#C09A44] text-white text-xs px-2 py-1 rounded-full">
            {discount}
          </span>
        )}
      </Link>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Product Info */}
        <Link href={`/product/${slug}`} className="block mb-3">
          <h3 className="font-semibold text-lg text-[#491D0B] line-clamp-2">{name}</h3>
          {variety && (
            <p className="text-sm text-[#491D0B] opacity-75 mt-1">{variety}</p>
          )}
        </Link>

        {/* Price Section */}
        <div className="mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#C09A44]">
              {discountedPrice || `৳${price}`}
            </span>
            {originalPrice && (
              <span className="text-sm line-through text-gray-500">
                {typeof originalPrice === 'number' ? `৳${originalPrice}` : originalPrice}
              </span>
            )}
          </div>
          {stock !== undefined && (
            <p className="text-xs text-gray-500 mt-1">
              {stock > 0 ? `${stock} kg available` : 'Out of stock'}
            </p>
          )}
        </div>

        {/* Quantity and Add to Cart - FIXED LAYOUT */}
        <div className="mt-auto">
          <div className="flex items-center gap-2 w-full">
            {/* Quantity Selector */}
            <div className="flex items-center border border-[#C09A44] rounded-md overflow-hidden bg-white flex-shrink-0">
              <button
                onClick={() => setAmount(prev => Math.max(1, prev - 0.5))}
                disabled={amount <= 1}
                className={`px-2 py-2 text-[#C09A44] transition-colors cursor-pointer ${
                  amount <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#F5E8C4]'
                }`}
              >
                <Minus size={16} />
              </button>
              <span className="px-2 py-2 text-center w-12 font-medium text-[#491D0B] text-sm">
                {amount % 1 === 0 ? amount : amount.toFixed(1)}
              </span>
              <button
                onClick={() => setAmount(prev => prev + 0.5)}
                className="px-2 py-2 text-[#C09A44] hover:bg-[#F5E8C4] transition-colors cursor-pointer"
              >
                <Plus size={16} />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={stock === 0}
              className={`flex-1 py-2 bg-[#C09A44] text-white rounded-md hover:bg-[#B08C3E] transition flex items-center justify-center gap-1 text-sm whitespace-nowrap cursor-pointer ${
                stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <ShoppingCart size={16} />
              <span>{actionText}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}