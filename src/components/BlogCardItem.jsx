import Link from 'next/link';
import Image from 'next/image';

const BlogCardItem = ({ title, excerpt, date, author, imageUrl, slug }) => {
  return (
    <Link href={`/blog/${slug}`} passHref legacyBehavior>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full">
        {/* Image */}
        <div className="relative h-48 w-full">
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
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-[#C09A44]">{date}</span>
            <span className="text-sm text-[#491D0B]">By {author}</span>
          </div>
          <h3 className="text-xl font-bold text-[#491D0B] mb-2">{title}</h3>
          <p className="text-[#491D0B] mb-4 line-clamp-2">{excerpt}</p>
          <div className="text-[#C09A44] hover:text-[#491D0B] transition-colors">
            Read More →
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCardItem;