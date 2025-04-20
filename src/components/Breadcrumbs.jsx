'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  const paths = pathname.split('/').filter(Boolean);

  if (!paths.length) return null;

  return (
    <div className="w-full bg-gradient-to-r from-green-500 to-yellow-500 py-6 md:py-8">
      <div className="container mx-auto px-4">
        <nav className="flex items-center space-x-3 text-lg md:text-xl font-medium text-white">
          <Link href="/" className="hover:text-gray-100 transition-colors">
            Home
          </Link>
          
          {paths.map((path, index) => {
            const href = `/${paths.slice(0, index + 1).join('/')}`;
            const label = path
              .replace(/-/g, ' ')
              .replace(/\b\w/g, l => l.toUpperCase());

            return (
              <div key={href} className="flex items-center space-x-2">
                <span className="text-white">/</span>
                {index === paths.length - 1 ? (
                  <span className="font-semibold text-gray-100">{label}</span>
                ) : (
                  <Link href={href} className="hover:text-gray-200 transition-colors">
                    {label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
