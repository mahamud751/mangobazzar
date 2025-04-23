"use client";
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';

const RelatedProducts = ({ currentProductId, currentProductVariety }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/products');

        if (!response.ok) {
          throw new Error('Failed to fetch related products');
        }

        const allProducts = await response.json();

        // Filter logic - get products of same variety (excluding current product)
        const filtered = allProducts.filter(product =>
          product.variety === currentProductVariety &&
          product.id !== currentProductId
        );

        // If not enough same-variety products, get random products
        const finalProducts = filtered.length >= 4
          ? filtered.slice(0, 4)
          : [...filtered, ...allProducts
            .filter(p => p.id !== currentProductId)
            .slice(0, 4 - filtered.length)];

        setRelatedProducts(finalProducts);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching related products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [currentProductId, currentProductVariety]);

  if (loading) {
    return (
      <section className="mt-16">
        <h3 className="text-2xl font-bold text-[#491D0B] mb-6">You May Also Like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-4 h-96 animate-pulse"></div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mt-16">
        <h3 className="text-2xl font-bold text-[#491D0B] mb-6">You May Also Like</h3>
        <p className="text-red-500">Error loading related products: {error}</p>
      </section>
    );
  }

  if (relatedProducts.length === 0) return null;

  const formatPrice = (price) => `৳${price}`;

  return (
    <section className="my-16">
      <h3 className="text-2xl font-bold text-[#491D0B] mb-6">You May Also Like</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map(product => (
          <div key={product.id} className="h-full">
            <ProductCard
              id={product.id}
              name={product.name}
              price={`৳${product.price}`}
              originalPrice={`৳${product.originalPrice}`}
              imageUrl={product.images[0]}
              slug={product.slug}
              rating={product.rating}
              discount={product.discount}
              isNew={product.isNew}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;