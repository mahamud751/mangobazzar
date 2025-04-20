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

export default async function BlogSection() {
  const blogPosts = await getBlogPosts();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#491D0B] mb-4">Our Latest Blog</h2>
          <p className="text-lg text-[#491D0B] max-w-2xl mx-auto">
            Stay up-to-date with the latest mango-related news and trends from Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
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
      </div>
    </section>
  );
}
