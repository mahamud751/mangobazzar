import { notFound } from 'next/navigation';
import blogPosts from '@/app/data/blogPosts.json';

export async function GET(request, { params }) {
  const { slug } = params;

  const post = blogPosts[slug];

  if (!post) {
    return new Response(JSON.stringify({ error: 'Post not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify(post), {
    headers: { 'Content-Type': 'application/json' }
  });
}
