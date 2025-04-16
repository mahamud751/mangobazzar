// components/BlogCard.js
import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({
    title,
    imageUrl = "/blog-placeholder.jpg",
    date = "16",
    month
}) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-5">
            {/* Date Badge */}


            {/* Blog Image */}
            <div className="relative h-48 w-full">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                />
                <div className="absolute -bottom-7 bg-green-600 text-white w-12 h-12 flex flex-col items-center justify-center text-sm m-2 rounded-full z-10">
                <span className='font-bold'>{date}</span><span className='text-xs'>{month}</span>
                </div>
            </div>

            {/* Blog Content */}
            <div className="p-4 mt-5">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{title}</h3>
            </div>
        </div>
    );
}