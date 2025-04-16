import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ 
  name, 
  variety, 
  originalPrice, 
  discountedPrice, 
  actionText = "ADD TO CART →",
  actionLink = "#",
  imageUrl
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      {/* Product Image */}
      <div className="relative h-48 w-full">
        <Image 
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500">{variety}</p>
          </div>
        </div>

        <div className="mt-4">
          {discountedPrice ? (
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-green-600">{discountedPrice}</span>
              <span className="text-sm line-through text-gray-400">{originalPrice}</span>
            </div>
          ) : (
            <span className="text-xl font-bold text-gray-800">{originalPrice}</span>
          )}
        </div>

        <Link href={actionLink} className="mt-4 inline-block w-full">
          <button className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors text-center">
            {actionText}
          </button>
        </Link>
      </div>
    </div>
  );
}