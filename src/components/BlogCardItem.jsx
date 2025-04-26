import Link from 'next/link';
import Image from 'next/image';

const BlogCardItem = ({ title, excerpt, date, author, imageUrl, slug }) => {
  return (
    <Link href={`/blog/${slug}`} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
      {/* Image */}
      <div className="relative h-56 w-full">
        <Image 
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-[#C09A44] font-semibold">{date}</span>
          <span className="text-sm text-[#491D0B] font-semibold">By {author}</span>
        </div>
        <h3 className="text-2xl font-semibold text-[#491D0B] mb-3">{title}</h3>
        <p className="text-[#491D0B] mb-4 line-clamp-3">{excerpt}</p>
        <div className="text-[#C09A44] hover:text-[#491D0B] transition-colors">
          Read More →
        </div>
      </div>
    </Link>
  );
};

export default BlogCardItem;
