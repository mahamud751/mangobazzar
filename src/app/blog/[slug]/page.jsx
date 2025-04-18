// src/app/blog/[slug]/page.jsx
import { notFound } from 'next/navigation';

// Mock data - replace with real API calls
const blogPosts = {
  "health-benefits-organic-mangoes": {
    title: "The Health Benefits of Organic Mangoes",
    content: `
      <p>Organic mangoes from Chapai Nawabganj are rich in vitamins and antioxidants.</p>
      <h2>Nutritional Benefits</h2>
      <ul>
        <li>High in Vitamin C</li>
        <li>Good source of fiber</li>
        <li>Contains antioxidants</li>
      </ul>
    `,
    date: "May 15, 2023",
    author: "Dr. Ayesha Rahman",
    imageUrl: "/images/blog/alphonso-mango.webp"
  },
  // Add other posts
};

export default function BlogPost({ params }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#491D0B] mb-2">{post.title}</h1>
        <div className="flex flex-col text-sm">
          <span className="text-[#C09A44]">{post.date}</span>
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

// Generate static paths for SSG
export async function generateStaticParams() {
  return Object.keys(blogPosts).map(slug => ({
    slug
  }));
}