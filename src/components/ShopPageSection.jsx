'use client';
import { useState, useMemo, useRef } from "react";
import ProductCard from "@/components/ProductCard";
import { mockProducts } from "@/app/data/mockProducts";

const ShopPageSection = () => {
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const productGridRef = useRef(null);

  const products = mockProducts;

  const sortedProducts = useMemo(() => {
    let sorted = [...products];
    if (sortOption === "Price: Low to High") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      sorted.sort((a, b) => b.price - b.price);
    } else if (sortOption === "Customer Rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "Newest Arrivals") {
      sorted.sort((a, b) => b.isNew - a.isNew || b.id - a.id);
    }
    return sorted;
  }, [sortOption, products]);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (productGridRef.current) {
      productGridRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (!products) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C09A44]"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFF9F0] py-14">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#491D0B] mb-3">
            Mango Bazar Shop
          </h1>
          <p className="text-lg md:text-xl text-[#491D0B] max-w-3xl mx-auto">
            Premium organic mangoes from Chapai Nawabganj, delivered fresh to
            your doorstep
          </p>
        </div>

        {/* Sort & Count */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-10 gap-4">
          <div className="text-[#491D0B] font-medium">
            Showing {paginatedProducts.length} of {sortedProducts.length}{" "}
            products
          </div>

          <div className="w-full md:w-auto">
            <label htmlFor="sort" className="sr-only">
              Sort
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={handleSortChange}
              className="border border-[#C09A44] bg-white rounded px-4 py-2 text-[#491D0B] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C09A44]"
            >
              <option value="">Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div
          ref={productGridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {paginatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              variety={product.variety}
              price={product.price} 
              originalPrice={product.originalPrice}
              discountedPrice={product.price < product.originalPrice ? product.price : null} 
              imageUrl={product.images[0]}
              slug={product.slug}
              rating={product.rating}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-14">
            <nav className="flex flex-wrap gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 border rounded transition ${
                  currentPage === 1
                    ? "text-gray-400 border-gray-300 cursor-not-allowed"
                    : "border-[#C09A44] text-[#C09A44] hover:bg-[#C09A44] hover:text-white"
                }`}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-4 py-2 rounded transition ${
                    currentPage === i + 1
                      ? "bg-[#C09A44] text-white"
                      : "border border-[#C09A44] text-[#C09A44] hover:bg-[#C09A44] hover:text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 border rounded transition ${
                  currentPage === totalPages
                    ? "text-gray-400 border-gray-300 cursor-not-allowed"
                    : "border-[#C09A44] text-[#C09A44] hover:bg-[#C09A44] hover:text-white"
                }`}
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPageSection;