import ProductCard from './ProductCard';

const homepageProducts = [
  {
    id: 1,
    name: "Khirsapat Mango",
    variety: "Rashmo on",
    originalPrice: "1,700.00৳",
    discountedPrice: "1,650.00৳",
    imageUrl: "/khirsapat-mango.png",
    slug: "khirsapat-mango"
  },
  {
    id: 2,
    name: "Amrapali Mango",
    variety: "Shamir on",
    originalPrice: "1,500.00৳",
    discountedPrice: "1,350.00৳",
    imageUrl: "/amrapali-mango.png",
    slug: "amrapali-mango"
  },
  {
    id: 3,
    name: "Gopalbhog Mango",
    variety: "Chmieon on",
    originalPrice: "1,500.00৳",
    discountedPrice: "1,400.00৳",
    imageUrl: "/gopalbhog-mango.png",
    slug: "gopalbhog-mango"
  },
  {
    id: 4,
    name: "Langra Mango",
    variety: "Tikki on",
    originalPrice: "1,500.00৳",
    discountedPrice: "1,450.00৳",
    imageUrl: "/langra-mango.png",
    slug: "langra-mango"
  },
  {
    id: 5,
    name: "Fazli Mango",
    variety: "Seasonal",
    originalPrice: "1,600.00৳",
    discountedPrice: "1,550.00৳",
    imageUrl: "/fazli-mango.png",
    slug: "fazli-mango"
  },
  {
    id: 6,
    name: "Himsagar Mango",
    variety: "Organic",
    originalPrice: "1,800.00৳",
    discountedPrice: "1,750.00৳",
    imageUrl: "/katimon-mango.png",
    slug: "himsagar-mango"
  },
  {
    id: 7,
    name: "Raspuri Mango",
    variety: "Hybrid",
    originalPrice: "1,400.00৳",
    discountedPrice: "1,350.00৳",
    imageUrl: "/banana-mango.png",
    slug: "raspuri-mango"
  },
  {
    id: 8,
    name: "Kesar Mango",
    variety: "Premium",
    originalPrice: "2,000.00৳",
    discountedPrice: "1,900.00৳",
    imageUrl: "/alphonso-mango.webp",
    slug: "kesar-mango"
  }
];

export default function ProductSection() {
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
          {homepageProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              variety={product.variety}
              originalPrice={product.originalPrice}
              discountedPrice={product.discountedPrice}
              imageUrl={product.imageUrl}
              slug={product.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
