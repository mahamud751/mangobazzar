'use client';
import { useCart } from '@/context/CartContext';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ProductDetails({ product }) {
  const {
    id,
    name,
    variety,
    price,
    originalPrice,
    discountedPrice,
    imageUrl,
    slug,
    description,
    stock,
    isNew,
    discount
  } = product;

  const { addToCart, productQuantities, setProductQuantity } = useCart();
  const initialQuantity = productQuantities?.[id] || 1;
  const [amount, setAmount] = useState(initialQuantity);

  useEffect(() => {
    setProductQuantity(id, amount);
  }, [amount, id, setProductQuantity]);

  const handleAddToCart = () => {
    const item = {
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
    addToCart(item);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Image */}
      <div className="relative aspect-square w-full">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover rounded-md"
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
      </div>

      {/* Info */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold text-[#491D0B] mb-2">{name}</h1>
        {variety && (
          <p className="text-[#491D0B] opacity-80 mb-4">{variety}</p>
        )}

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-[#C09A44]">
              {discountedPrice || `৳${price}`}
            </span>
            {originalPrice && (
              <span className="text-md line-through text-gray-500">
                {typeof originalPrice === 'number' ? `৳${originalPrice}` : originalPrice}
              </span>
            )}
          </div>
          {stock !== undefined && (
            <p className="text-sm text-gray-500 mt-1">
              {stock > 0 ? `${stock} kg available` : 'Out of stock'}
            </p>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-[#491D0B] opacity-90 mb-6">{description}</p>
        )}

        {/* Quantity and Add to Cart */}
        <div className="flex items-center gap-4 mt-auto">
          {/* Quantity */}
          <div className="flex items-center border border-[#C09A44] rounded-md overflow-hidden bg-white">
            <button
              onClick={() => setAmount(prev => Math.max(1, prev - 1))}
              disabled={amount <= 1}
              className={`px-3 py-2 text-[#C09A44] ${
                amount <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#F5E8C4]'
              }`}
            >
              <Minus size={16} />
            </button>
            <span className="px-4 py-2 text-[#491D0B] font-medium">{amount}</span>
            <button
              onClick={() => setAmount(prev => prev + 1)}
              disabled={stock !== undefined && amount >= stock}
              className={`px-3 py-2 text-[#C09A44] ${
                stock !== undefined && amount >= stock
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-[#F5E8C4]'
              }`}
            >
              <Plus size={16} />
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={stock === 0}
            className={`flex-1 py-2 px-4 bg-[#C09A44] text-white rounded-md hover:bg-[#B08C3E] transition flex items-center justify-center gap-2 text-sm ${
              stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <ShoppingCart size={16} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
