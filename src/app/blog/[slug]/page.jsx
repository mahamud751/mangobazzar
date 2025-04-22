// app/blog/[slug]/page.js
import { notFound } from 'next/navigation';

export default async function BlogPost({ params }) {
  try {
    const response = await fetch(`http://localhost:3000/api/blog/${params.slug}`, {
      cache: 'no-store'
    });

    if (!response.ok) {
      if (response.status === 404) {
        notFound();
      }
      throw new Error('Failed to fetch post');
    }

    const post = await response.json();

    return (
      <article className="max-w-4xl mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#491D0B] mb-2">{post.title}</h1>
          <div className="flex flex-col text-sm">
            <span className="text-[#C09A44]">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
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
  } catch (error) {
    console.error('Error fetching blog post:', error);
    notFound();
  }
}

// Generate static paths for SSG
export async function generateStaticParams() {
  // Fetch all slugs from your API
  const response = await fetch('http://localhost:3000/api/blog/slugs');
  const slugs = await response.json();
  
  return slugs.map(slug => ({
    slug
  }));
}