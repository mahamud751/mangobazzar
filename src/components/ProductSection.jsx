"use client";
import { mockProducts } from "@/app/data/mockProducts";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  const products = mockProducts.slice(0, 4);

  return (
    <section className="py-20 bg-[#FAF5E9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-[#C09A44] mb-4">
            Taste the Best of Summer 🍋
          </h2>
          <p className="text-lg text-[#491D0B] max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked, <strong>farm-fresh mangoes</strong> –
            harvested with love and delivered with care. Book yours before the
            season ends!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              variety={product.variety}
              originalPrice={`৳${product.originalPrice}`}
              discountedPrice={`৳${product.price}`}
              imageUrl={product.images?.[0] || "/default-mango.png"}
              slug={product.slug}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
