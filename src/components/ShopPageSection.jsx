"use client"
import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';

const rawProducts = [
  {
    id: 1,
    name: "Organic Himsagar Mango",
    price: 450,
    originalPrice: 550,
    imageUrl: "/images/products/amrapali-mango.png",
    rating: 4.8,
    discount: "18% OFF",
    isNew: true,
    slug: "organic-himsagar-mango"
  },
  {
    id: 2,
    name: "Premium Langra Mango",
    price: 500,
    originalPrice: 600,
    imageUrl: "/images/products/banana-mango.png",
    rating: 4.7,
    discount: "17% OFF",
    isNew: false,
    slug: "premium-langra-mango"
  },
  {
    id: 3,
    name: "Gopalbhog Mango",
    price: 400,
    originalPrice: 480,
    imageUrl: "/images/products/fazli-mango.png",
    rating: 4.5,
    discount: "17% OFF",
    isNew: true,
    slug: "gopalbhog-mango"
  },
  {
    id: 4,
    name: "Fazli Mango (Seasonal)",
    price: 550,
    originalPrice: 650,
    imageUrl: "/images/products/langra-mango.png",
    rating: 4.9,
    discount: "15% OFF",
    isNew: false,
    slug: "fazli-mango"
  },

];

const formatPrice = (price) => `৳${price}`;

const ShopPageSection = () => {
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const sortedProducts = useMemo(() => {
    let sorted = [...rawProducts];
    if (sortOption === 'Price: Low to High') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'Price: High to Low') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'Customer Rating') {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'Newest Arrivals') {
      sorted.sort((a, b) => b.id - a.id);
    }
    return sorted;
  }, [sortOption]);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1); // Reset to page 1 on sort change
  };

  return (
    <div className="bg-[#FFF9F0] py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#491D0B] mb-4">Mango Bazar Shop</h1>
          <p className="text-xl text-[#491D0B] max-w-2xl mx-auto">
            Premium organic mangoes from Chapai Nawabganj, delivered fresh to your doorstep
          </p>
        </div>

        {/* Filter/Sort Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="text-[#491D0B]">
            Showing {paginatedProducts.length} of {sortedProducts.length} products
          </div>

          <div className="w-full md:w-auto">
            <label htmlFor="sort" className="sr-only">Sort</label>
            <select
              id="sort"
              value={sortOption}
              onChange={handleSortChange}
              className="border border-[#C09A44] rounded px-4 py-2 text-[#491D0B] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C09A44]"
            >
              <option value="">Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {paginatedProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              variety={product.variety}
              price={formatPrice(product.price)}
              originalPrice={formatPrice(product.originalPrice)}
              discountedPrice={product.discountedPrice}
              imageUrl={product.imageUrl}
              slug={product.slug}
              rating={product.rating}
              discount={product.discount}
              isNew={product.isNew}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 border border-[#C09A44] text-[#C09A44] rounded cursor-pointer hover:bg-[#C09A44] hover:text-white transition"
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${currentPage === i + 1
                  ? 'bg-[#C09A44] text-white'
                  : 'border border-[#C09A44] text-[#C09A44] hover:bg-[#C09A44] hover:text-white transition'
                  }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="px-4 py-2 border border-[#C09A44] text-[#C09A44] rounded cursor-pointer hover:bg-[#C09A44] hover:text-white transition"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ShopPageSection;
