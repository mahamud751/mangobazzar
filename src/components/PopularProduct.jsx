import ProductCard from './ProductCard';

export default function PopularProduct() {
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
          <ProductCard
            name="Amrapali Mango"
            variety="Shamir on"
            originalPrice="1,500.00৳"
            discountedPrice="1,350.00৳"
            actionText="BUY NOW"
            imageUrl="/amrapali-mango.png"
          />
          <ProductCard
            name="Katimon Mango"
            variety="Shamir on"
            originalPrice="1,500.00৳"
            discountedPrice="1,350.00৳"
            actionText="BUY NOW"
            imageUrl="/katimon-mango.png"
          />

          <ProductCard
            name="Gopalbhog Mango"
            variety="Chmieon on"
            originalPrice="1,500.00৳"
            actionText="BUY NOW"
            imageUrl="/banana-mango.png"
          />

          <ProductCard
            name="Langra Mango"
            variety="Tikki on"
            originalPrice="1,500.00৳"
            actionText="BUY NOW"
            imageUrl="/gauromoti-mango.png"
          />
        </div>
      </div>
    </section>
  );
}
