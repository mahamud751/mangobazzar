import ProductCard from './ProductCard';

export default function ProductSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#491D0B] mb-4">
            Best Quality Mango Price in 2025
          </h1>
          <p className="text-lg text-[#491D0B] max-w-2xl mx-auto">
            Get the best quality mangoes from this <strong>Best Online Mango Shop</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            name="Khirsapat Mango"
            variety="Rashmo on"
            originalPrice="1,700.00৳"
            discountedPrice="1,650.00৳"
            actionText="BUY NOW"
            imageUrl="/khirsapat-mango.png"
          />
          
          <ProductCard
            name="Amrapali Mango"
            variety="Shamir on"
            originalPrice="1,500.00৳"
            discountedPrice="1,350.00৳"
            actionText="BUY NOW"
            imageUrl="/amrapali-mango.png"
          />
          
          <ProductCard
            name="Gopalbhog Mango"
            variety="Chmieon on"
            originalPrice="1,500.00৳"
            actionText="BUY NOW"
            imageUrl="/gopalbhog-mango.png"
          />
          
          <ProductCard
            name="Langra Mango"
            variety="Tikki on"
            originalPrice="1,500.00৳"
            actionText="BUY NOW"
            imageUrl="/langra-mango.png"
          />
          <ProductCard
            name="Khirsapat Mango"
            variety="Rashmo on"
            originalPrice="1,700.00৳"
            discountedPrice="1,650.00৳"
            actionText="BUY NOW"
            imageUrl="/fazli-mango.png"
          />
          
          <ProductCard
            name="Amrapali Mango"
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