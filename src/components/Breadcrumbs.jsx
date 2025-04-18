'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  const paths = pathname.split('/').filter(Boolean);

  if (!paths.length) return null;

  return (
    <div className="w-full bg-gradient-to-r from-green-500 to-yellow-500 py-14">
      <div className="container mx-auto">
        <nav className="flex items-center justify-center text-3xl md:text-5xl font-medium text-white">
          <Link href="/" className="hover:text-gray-100 transition-colors">
            Home
          </Link>
          
          {paths.map((path, index) => {
            const href = `/${paths.slice(0, index + 1).join('/')}`;
            const label = path
              .replace(/-/g, ' ')
              .replace(/\b\w/g, l => l.toUpperCase());

            return (
              <div key={href} className="flex items-center">
                <span className="mx-2">/</span>
                {index === paths.length - 1 ? (
                  <span className="font-semibold">{label}</span>
                ) : (
                  <Link href={href} className="hover:text-gray-100 transition-colors">
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