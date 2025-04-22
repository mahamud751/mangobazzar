'use client';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setProducts(data.slice(0, 4)); // Get first 4 products for homepage
      } catch (err) {
        setError(err.message);
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-[#FAF5E9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-[#C09A44] mb-4">
              Taste the Best of Summer 🍋
            </h2>
            <p className="text-lg text-[#491D0B] max-w-2xl mx-auto leading-relaxed">
              Loading our farm-fresh mangoes...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-4 h-96 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-[#FAF5E9]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#C09A44] mb-4">
            Taste the Best of Summer 🍋
          </h2>
          <p className="text-red-500 mb-6">Error loading products: {error}</p>
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
    <section className="py-20 bg-[#FAF5E9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-[#C09A44] mb-4">
            Taste the Best of Summer 🍋
          </h2>
          <p className="text-lg text-[#491D0B] max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked, <strong>farm-fresh mangoes</strong> – harvested with love and delivered with care. Book yours before the season ends!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              variety={product.variety}
              originalPrice={`৳${product.originalPrice}`}
              discountedPrice={`৳${product.price}`}
              imageUrl={product.images?.[0] || '/default-mango.png'}
              slug={product.slug}
              rating={product.rating}
              discount={product.discount}
              isNew={product.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
}