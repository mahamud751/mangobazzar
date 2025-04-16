import Image from 'next/image';
import Link from 'next/link';

export default function MangoNutrition() {
  return (
    <section className="bg-gray-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content - Left Side */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Unlocking the Power of Mango Nutrition
            </h1>
            
            <div className="space-y-4 text-gray-300">
              <p>
                Mango is a very nutritious fruit. In terms of food quality, mango ranks high among other native fruits. 
                Ripe mangoes contain considerable amounts of carotene or vitamin A. In terms of vitamin A, mango is at 
                the top of almost all fruits in the world.
              </p>
              <p>
                Vitamin C content in mangoes is also satisfactory. Vitamin C is found in raw and ripe mangoes. However, 
                raw mangoes contain more vitamin C. Also, 165 g of freshly harvested pulp contains 99.0 calories of energy, 
                1.35 g of protein, 0.63 g of fat, 24.7 g of carbohydrates, 22.5 g of sugar and 2.64 g of fiber.
              </p>
              <p>
                Join us on this deliciously healthy journey and unlock the full potential of mango nutrition!
              </p>
            </div>

            <Link href="/blogs" className="mt-8 inline-block">
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
                Read More Blogs
              </button>
            </Link>
          </div>

          {/* Image - Right Side */}
          <div className="md:w-1/2">
            <div className="relative h-80 md:h-96 w-sm rounded-lg overflow-hidden">
              <Image
                src="/mango-nutrition.png"
                alt="Nutritious mangoes from Chapai Nawabganj"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}