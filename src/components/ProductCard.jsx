'use client';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react'; // Import Cart icon from lucide-react
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({
  id,
  name,
  variety,
  price,
  originalPrice,
  discountedPrice,
  actionText = "BUY NOW",
  actionLink = "#",
  imageUrl,
  slug,
  rating,
  discount,
  isNew
}) {
  const { addToCart } = useCart();

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
    };
    addToCart(product); 
  };

  return (
    <div className="bg-[#fff9eb] rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:border-[#C09A44BF] hover:shadow-xl transition-shadow duration-200 ease-in-out h-full">
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
      <div className="p-5">
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

        {/* Action Button - NOT wrapped in Link */}
        <div className="mt-6 flex justify-center">
          <button
            className="w-full py-3 px-6 bg-[#C09A44] text-white font-medium rounded-md hover:bg-[#ab883c] transition duration-200 flex items-center justify-center gap-3 cursor-pointer"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="text-white" size={20} />
            {actionText}
          </button>
        </div>
      </div>
    </div>
  );
}
