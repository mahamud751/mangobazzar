// app/api/blog/route.js
import blogPosts from '@/app/data/blogPosts.json';

export async function GET() {
  const posts = Object.entries(blogPosts).map(([slug, post]) => ({
    slug,
    ...post,
  }));

  return new Response(JSON.stringify(posts), {
    headers: { 'Content-Type': 'application/json' },
  });
}