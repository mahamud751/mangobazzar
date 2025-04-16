import BlogCard from './BlogCard';

export default function BlogSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Latest Blog</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay up-to-date with the latest mango-related news and trends from Bangladesh. 
            Explore our blog to learn about the most recent information, insightful articles, 
            and fascinating stories related to Bangladesh's mango industry.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard 
            title="10 Powerful Benefits of Green Mango You Should Know" 
            date="16"
            month='Apr'
            imageUrl="/green-mango-benefits.png"
          />
          
          <BlogCard 
            title="Mango Packaging for Export: Best Practices to Ensure Freshness"
            date="10"
            month='Mar'
            imageUrl="/mango-packaging.png"
          />
          
          <BlogCard 
            title="Mango Buds Development Cycle: Key Factors & Blooming Process"
            date="10"
            month='Feb'
            imageUrl="/mango-buds.png"
          />
        </div>
      </div>
    </section>
  );
}