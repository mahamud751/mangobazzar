"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cleanName } from "@/lib/utils";

const BlogCardItem = ({ title, excerpt, date, author, imageUrl, id }) => {
  const cleanedName = cleanName(title);
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full border border-[#f0e6d2]"
      whileHover={{
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <motion.span
            className="text-sm text-[#C09A44] font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            {date}
          </motion.span>
          <motion.span
            className="text-sm text-[#491D0B] font-semibold"
            whileHover={{ color: "#C09A44" }}
          >
            By {author}
          </motion.span>
        </div>
        <motion.h3
          className="text-2xl font-semibold text-[#491D0B] mb-3 line-clamp-2"
          whileHover={{ color: "#C09A44" }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-[#491D0B] mb-4 line-clamp-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {excerpt}
        </motion.p>
        <Link
          href={{
            pathname: `/blog/${encodeURIComponent(cleanedName)}`,
            query: { id: id },
          }}
        >
          <motion.div
            className="inline-flex items-center text-[#C09A44] hover:text-[#491D0B] transition-colors font-medium"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCardItem;
