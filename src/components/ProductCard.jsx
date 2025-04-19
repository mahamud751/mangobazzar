import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({
  name,
  variety,
  originalPrice,
  discountedPrice,
  actionText = "BUY NOW",
  actionLink = "#",
  imageUrl,
  slug
}) {
  return (
    <Link href={`/shop/${slug}`} className="block h-full">
      <div className="bg-[#fff9eb] rounded-lg shadow-md overflow-hidden border border-gray-100 hover:border-[#C09A44BF] duration-200 hover:shadow-lg transition-shadow">
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
              <h3 className="text-lg font-semibold text-[#491D0B]">{name}</h3>
              <p className="text-sm text-[#491D0B]">{variety}</p>
            </div>
          </div>

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
          <div className="flex items-center gap-4 mt-4">
            <div className="border border-[#b2aca7] px-4 py-2 flex items-center justify-center cursor-pointer">
              <Image
                src='/cart-icon.png'
                alt='cart icon'
                width={20}
                height={20}
                className="object-cover"
              />
            </div>
            <Link href={actionLink} className="flex-1">
              <button className="w-full py-2 px-4 bg-[#C09A44] text-white font-medium cursor-pointer">
                {actionText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}