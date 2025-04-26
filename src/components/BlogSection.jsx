import { blogPosts } from "@/app/data/blogPosts";
import BlogCardItem from "./BlogCardItem";

export default function BlogSection() {
  const topPosts = blogPosts.slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#491D0B] mb-4">
            Our Latest <span className="text-[#C09A44]">Blog</span>
          </h2>
          <p className="text-lg text-[#491D0B] max-w-2xl mx-auto">
            Stay up-to-date with the latest mango-related news and trends from
            Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topPosts.map((post) => (
            <BlogCardItem
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author}
              imageUrl={post.imageUrl}
              id={post.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
