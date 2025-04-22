'use client';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

export default function PopularProduct() {
  const [popularProducts, setPopularProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/products/popular'); // New endpoint needed
        
        if (!response.ok) {
          throw new Error('Failed to fetch popular products');
        }

        const data = await response.json();
        setPopularProducts(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching popular products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#491D0B] mb-4">
              Explore Our <span className='text-[#C09A44]'>Most Loved</span> Mangoes!
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Loading our most popular mango selections...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-4 h-96 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#491D0B] mb-4">
            Explore Our <span className='text-[#C09A44]'>Most Loved</span> Mangoes!
          </h1>
          <p className="text-red-500 mb-6">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-[#C09A44] text-white py-2 px-6 rounded-lg"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#491D0B] mb-4">
            Explore Our <span className='text-[#C09A44]'>Most Loved</span> Mangoes!
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Taste the flavors that make our mangoes the best-selling in Bangladesh.
            Handpicked, fresh, and full of sweetness!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              variety={product.variety}
              price={`৳${product.price}`}
              originalPrice={`৳${product.originalPrice}`}
              imageUrl={product.images?.[0] || '/default-mango.png'}
              slug={product.slug}
              rating={product.rating}
              discount={product.discount}
              isNew={product.isNew}
              stock={product.stock}
            />
          ))}
        </div>
      </div>
    </section>
  );
}