import BlogCardItem from './BlogCardItem';

const getBlogPosts = async () => {
  return [
    {
      id: 1,
      title: "The Health Benefits of Organic Mangoes",
      excerpt: "Discover why organic mangoes from Chapai Nawabganj are packed with more nutrients and flavor than conventional varieties. Our mangoes are grown without harmful pesticides.",
      date: "May 15, 2023",
      author: "Dr. Ayesha Rahman",
      imageUrl: "/alphonso-mango.webp",
      slug: "health-benefits-organic-mangoes"
    },
    {
      id: 2,
      title: "Mango Festival 2023: A Sweet Success",
      excerpt: "Our annual mango festival attracted thousands of visitors this year. Highlights included rare mango varieties and cooking demonstrations by celebrity chefs.",
      date: "June 2, 2023",
      author: "Mango Bazar Team",
      imageUrl: "/mango-festival.webp",
      slug: "mango-festival-2023"
    },
    {
      id: 3,
      title: "Growing Mangoes Sustainably in Bangladesh",
      excerpt: "Learn about our eco-friendly farming practices that produce premium mangoes while protecting the environment and supporting local communities.",
      date: "April 28, 2023",
      author: "Farid Ahmed",
      imageUrl: "/sustainable-farming.webp",
      slug: "sustainable-mango-farming"
    },
    {
      id: 4,
      title: "How to Select the Perfect Mango",
      excerpt: "Expert tips for choosing ripe, flavorful mangoes every time. Learn how to identify the best mangoes by their color, fragrance, and texture.",
      date: "May 5, 2023",
      author: "Mango Bazar Team",
      imageUrl: "/selecting-mangoes.webp",
      slug: "select-perfect-mango"
    }
  ];
};

const BlogPageSection = async () => {
  const blogPosts = await getBlogPosts();

  return (
    <div className="bg-[#FFF9F0] py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#491D0B] mb-4">Mango Bazar Blog</h1>
          <p className="text-xl text-[#491D0B] max-w-2xl mx-auto">
            Discover the latest news, recipes, and insights about our premium organic mangoes.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map(post => (
            <BlogCardItem
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author}
              imageUrl={post.imageUrl}
              slug={post.slug}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-[#C09A44] text-[#C09A44] rounded hover:bg-[#C09A44] hover:text-white transition">
              Previous
            </button>
            <button className="px-4 py-2 bg-[#C09A44] text-white rounded">1</button>
            <button className="px-4 py-2 border border-[#C09A44] text-[#C09A44] rounded hover:bg-[#C09A44] hover:text-white transition">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BlogPageSection;