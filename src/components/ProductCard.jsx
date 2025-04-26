'use client';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Plus, Minus, Eye } from 'lucide-react';
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
  actionText = "VIEW DETAILS",
  imageUrl,
  slug,
  rating,
  discount,
  isNew,
  stock
}) {
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

        {/* View Details Button - FIXED LAYOUT */}
        <div className="mt-auto">
          <Link 
            href={`/product/${slug}`}
            className="w-full py-2 bg-[#C09A44] text-white rounded-md hover:bg-[#B08C3E] transition flex items-center justify-center gap-1 text-sm whitespace-nowrap cursor-pointer"
          >
            <Eye size={16} />
            <span>{actionText}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}