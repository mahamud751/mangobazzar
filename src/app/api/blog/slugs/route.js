import blogPosts from '@/app/data/blogPosts.json';

export async function GET() {
  const slugs = Object.keys(blogPosts);
  return new Response(JSON.stringify(slugs), {
    headers: { 'Content-Type': 'application/json' }
  });
}
