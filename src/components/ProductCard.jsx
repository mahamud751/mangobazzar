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
  actionLink = "#",
  imageUrl,
  slug,
  rating,
  discount,
  isNew
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
    <div className="bg-[#fff9eb] rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:border-[#C09A44BF] hover:shadow-xl transition-shadow duration-200 ease-in-out h-full flex flex-col">
      {/* Product Image - wrapped in Link */}
      <Link href={`/shop/${slug}`} className="block">
        <div className="relative h-60 w-full">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Product Name & Variety - wrapped in Link */}
        <Link href={`/shop/${slug}`} className="block">
          <div className="flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-[#491D0B]">{name}</h3>
            <p className="text-sm text-[#491D0B] opacity-70">{variety}</p>
          </div>
        </Link>

        {/* Price Section */}
        <div className="mt-4">
          {discountedPrice ? (
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#C09A44]">{discountedPrice}</span>
              <span className="text-sm line-through text-[#C09A44BF]">{originalPrice}</span>
            </div>
          ) : (
            <span className="text-xl font-bold text-[#491D0B]">{originalPrice}</span>
          )}
        </div>

        {/* Combined Amount Selector and Add to Cart */}
        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
            {/* Amount Selector */}
            <div className="flex flex-col w-full sm:w-auto">
              {/* <label className="text-sm font-medium text-[#491D0B] mb-1">Amount (kg)</label> */}
              <div className="flex items-center border border-[#C09A44] rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => setAmount(prev => Math.max(1, prev - 0.5))}
                  disabled={amount <= 1}
                  className={`px-3 py-2 text-[#C09A44] transition-colors ${amount <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#F5E8C4]'
                    }`}
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-2 text-center w-[60px] font-medium text-[#491D0B]">
                  {amount % 1 === 0 ? amount.toFixed(0) : amount.toFixed(1)}
                </span>
                <button
                  onClick={() => setAmount(prev => prev + 0.5)}
                  className="px-3 py-2 text-[#C09A44] hover:bg-[#F5E8C4] transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              className="flex-shrink-0 w-full sm:w-auto sm:px-6 py-3 bg-[#C09A44] text-white font-medium rounded-lg hover:bg-[#ab883c] transition duration-200 flex items-center justify-center gap-2"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="text-white" size={18} />
              <span className="text-sm">{actionText}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}