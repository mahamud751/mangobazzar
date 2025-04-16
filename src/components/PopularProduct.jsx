import ProductCard from './ProductCard';

export default function PopularProduct() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Most Popular Mangoes in Bangladesh
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the true nature of the most popular mango variations in Bangladesh! Take a tasty tour highlighting the great variety of mangoes that are loved by mango lovers all around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            name="Amrapali Mango"
            variety="Shamir on"
            originalPrice="1,500.00৳"
            discountedPrice="1,350.00৳"
            actionText="READ MORE →"
            imageUrl="/amrapali-mango.png"
          />
          <ProductCard
            name="Amrapali Mango"
            variety="Shamir on"
            originalPrice="1,500.00৳"
            discountedPrice="1,350.00৳"
            actionText="READ MORE →"
            imageUrl="/katimon-mango.png"
          />
          
          <ProductCard
            name="Gopalbhog Mango"
            variety="Chmieon on"
            originalPrice="1,500.00৳"
            actionText="READ MORE →"
            imageUrl="/banana-mango.png"
          />
          
          <ProductCard
            name="Langra Mango"
            variety="Tikki on"
            originalPrice="1,500.00৳"
            actionText="READ MORE →"
            imageUrl="/gauromoti-mango.png"
          />
        </div>
      </div>
    </section>
  );
}