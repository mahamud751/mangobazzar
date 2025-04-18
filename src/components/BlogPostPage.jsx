import Image from 'next/image';

// This would fetch the actual blog post data from your CMS/API
const getBlogPost = async (slug) => {
  // In a real app, you would fetch this data based on the slug
  const blogPosts = {
    "health-benefits-organic-mangoes": {
      id: 1,
      title: "The Health Benefits of Organic Mangoes",
      content: `
        <p>Organic mangoes from Chapai Nawabganj are not just delicious but also packed with numerous health benefits. Unlike conventional mangoes, our organic varieties are grown without synthetic pesticides or fertilizers, making them healthier for you and the environment.</p>
        
        <h2>Nutritional Value</h2>
        <p>Our mangoes are rich in vitamins A, C, and E, as well as potassium and fiber. A single serving provides:</p>
        <ul>
          <li>67% of your daily vitamin C</li>
          <li>20% of your daily vitamin A</li>
          <li>10% of your daily vitamin E</li>
          <li>6% of your daily potassium</li>
        </ul>
        
        <h2>Antioxidant Properties</h2>
        <p>The antioxidants in our mangoes help combat oxidative stress and may reduce the risk of chronic diseases. Studies have shown that organic mangoes contain higher levels of antioxidants compared to conventionally grown ones.</p>
      `,
      date: "May 15, 2023",
      author: "Dr. Ayesha Rahman",
      authorBio: "Nutritionist with 10 years of experience in tropical fruits research",
      imageUrl: "/alphonso-mango.webp",
      readTime: "4 min read"
    },
    // ... other posts would be here
  };

  return blogPosts[slug] || null;
};

const BlogPostPage = async ({ params }) => {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-[#FFF9F0] py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Post Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#491D0B] mb-4">{post.title}</h1>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-[#C09A44]">{post.date}</span>
              <span className="text-sm text-[#491D0B]">• {post.readTime}</span>
            </div>
            <span className="text-sm text-[#491D0B]">By {post.author}</span>
          </div>
          
          <div className="relative h-96 w-full rounded-lg overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Post Content */}
        <div className="prose max-w-none">
          <div 
            className="text-[#491D0B]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Author Bio */}
        <div className="mt-12 pt-6 border-t border-[#C09A44BF]">
          <h3 className="text-lg font-semibold text-[#C09A44] mb-2">About the Author</h3>
          <p className="text-[#491D0B]">{post.authorBio}</p>
        </div>

        {/* Back to Blog Link */}
        <div className="mt-8">
          <a 
            href="/blog" 
            className="inline-flex items-center text-[#C09A44] hover:text-[#491D0B] transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;