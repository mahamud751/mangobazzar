"use client";

import ProductCard from "./ProductCard";
import { mockProducts } from "@/app/data/mockProducts";

export default function PopularProduct() {
  const products = mockProducts;

  const popularProducts = products
    .filter((product) => product.rating >= 4.5)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  if (!popularProducts || popularProducts.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#491D0B] mb-4">
              Explore Our <span className="text-[#C09A44]">Most Loved</span>{" "}
              Mangoes!
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Loading our most popular mango selections...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow p-4 h-96 animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#491D0B] mb-4">
            Explore Our <span className="text-[#C09A44]">Most Loved</span>{" "}
            Mangoes!
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Taste the flavors that make our mangoes the best-selling in
            Bangladesh. Handpicked, fresh, and full of sweetness!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              variety={product.variety}
              price={`৳${product.price}`}
              originalPrice={`৳${product.originalPrice}`}
              imageUrl={product.images?.[0] || "/default-mango.png"}
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
