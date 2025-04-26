"use client";
import { blogPosts } from "@/app/data/blogPosts";
import { notFound, useSearchParams } from "next/navigation";

export default async function BlogPost() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }
  return (
    <article className="max-w-4xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#491D0B] mb-2">{post.title}</h1>
        <div className="flex flex-col text-sm">
          <span className="text-[#C09A44]">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="text-[#491D0B]">By {post.author}</span>
        </div>
      </header>

      <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="object-cover w-full h-full"
        />
      </div>

      <div
        className="prose text-[#491D0B]"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
