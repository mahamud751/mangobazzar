"use client";
import { useState } from "react";
import BlogCardItem from "./BlogCardItem";
import { blogPosts } from "@/app/data/blogPosts";

const BlogPageSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <div className="bg-[#FFF9F0] py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#491D0B] mb-4">
            Mango Bazar Blog
          </h1>
          <p className="text-xl text-[#491D0B] max-w-2xl mx-auto">
            Discover the latest news, recipes, and insights about our premium
            organic mangoes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentPosts.map((post) => (
            <BlogCardItem
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author}
              imageUrl={post.imageUrl}
              id={post.id} // Use id instead of slug
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-[#C09A44] text-[#C09A44] rounded hover:bg-[#C09A44] hover:text-white transition disabled:opacity-50"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded ${
                    currentPage === i + 1
                      ? "bg-[#C09A44] text-white"
                      : "border border-[#C09A44] text-[#C09A44] hover:bg-[#C09A44] hover:text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-[#C09A44] text-[#C09A44] rounded hover:bg-[#C09A44] hover:text-white transition disabled:opacity-50"
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

export default BlogPageSection;
