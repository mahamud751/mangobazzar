"use client";
import ProductCard from '@/components/ProductCard';

const RelatedProducts = ({ currentProductId }) => {

  const relatedProducts = [
    {
      id: 2,
      name: "Premium Langra Mango",
      price: 500,
      originalPrice: 600,
      imageUrl: "/images/products/langra-mango.png",
      rating: 4.7,
      discount: "17% OFF",
      isNew: false,
      slug: "premium-langra-mango"
    },
    {
      id: 3,
      name: "Gopalbhog Mango",
      price: 400,
      originalPrice: 480,
      imageUrl: "/images/products/banana-mango.png",
      rating: 4.5,
      discount: "17% OFF",
      isNew: true,
      slug: "gopalbhog-mango"
    },
    {
      id: 4,
      name: "Fazli Mango (Seasonal)",
      price: 550,
      originalPrice: 650,
      imageUrl: "/images/products/fazli-mango.png",
      rating: 4.9,
      discount: "15% OFF",
      isNew: false,
      slug: "fazli-mango"
    },
    {
      id: 5,
      name: "Amrapali Mango",
      price: 480,
      originalPrice: 580,
      imageUrl: "/images/products/amrapali-mango.png",
      rating: 4.6,
      discount: "17% OFF",
      isNew: true,
      slug: "amrapali-mango"
    }
  ];

  // Filter out the current product
  const filteredProducts = relatedProducts.filter(product => product.id !== currentProductId);

  if (filteredProducts.length === 0) return null;

  const formatPrice = (price) => `৳${price}`;

  return (
    <section className="mt-16">
      <h3 className="text-2xl font-bold text-[#491D0B] mb-6">You May Also Like</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={formatPrice(product.price)}
            originalPrice={formatPrice(product.originalPrice)}
            imageUrl={product.imageUrl}
            rating={product.rating}
            discount={product.discount}
            isNew={product.isNew}
            slug={product.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;