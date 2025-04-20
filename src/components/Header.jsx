'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartHover, setCartHover] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();
  const cartCount = 2;

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100%' },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const dummyItems = [
    { id: 1, name: 'Alphonso Mango', qty: 1, price: '$15' },
    { id: 2, name: 'Langra Mango', qty: 2, price: '$25' },
  ];

  const handleNavigate = async (href) => {
    setMenuVisible(false);
    // wait for animation to finish before navigating
    setTimeout(() => {
      setMobileMenuOpen(false);
      router.push(href);
    }, 300); // should match animation duration
  };

  return (
    <header className="bg-white shadow-md py-4 fixed top-0 left-0 w-full z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-[#491D0B]">
          Mango <span className="text-[#C09A44]">Bazar</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 relative">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/shop', label: 'Shop' },
            { href: '/blog', label: 'Blog' },
            { href: '/contact', label: 'Contact' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#491D0B] hover:text-[#C09A44] font-medium transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}

          {/* Cart Icon with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCartHover(true)}
            onMouseLeave={() => setCartHover(false)}
          >
            <ShoppingCart className="text-[#491D0B]" size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#C09A44] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}

            {/* Dropdown */}
            <AnimatePresence>
              {cartHover && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-4 w-72 bg-white rounded-lg shadow-lg p-4 z-50"
                >
                  <h4 className="text-[#491D0B] font-semibold text-lg mb-2">Cart Preview</h4>
                  <div className="space-y-2 max-h-48 overflow-auto">
                    {dummyItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm text-gray-700">
                        <span>{item.name} (x{item.qty})</span>
                        <span>{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between space-x-2">
                    <Link href="/cart" className="w-1/2 text-center text-sm py-2 bg-[#491D0B] text-white rounded hover:bg-[#391509] transition">
                      Go to Cart
                    </Link>
                    <Link href="/checkout" className="w-1/2 text-center text-sm py-2 bg-[#C09A44] text-white rounded hover:bg-[#ab883c] transition">
                      Checkout
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#491D0B]"
          onClick={() => {
            setMobileMenuOpen(true);
            setMenuVisible(true);
          }}
        >
          <Menu size={28} />
        </button>

        {/* Mobile Menu Overlay with Animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate={menuVisible ? 'visible' : 'exit'}
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-10"
            >
              <button
                className="absolute top-6 right-6 text-[#491D0B]"
                onClick={() => setMenuVisible(false)}
              >
                <X size={32} />
              </button>

              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/shop', label: 'Shop' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigate(item.href)}
                  className="text-2xl text-[#491D0B] hover:text-[#C09A44] font-semibold transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}

              {/* Cart for Mobile */}
              <button
                onClick={() => handleNavigate('/cart')}
                className="relative text-[#491D0B] hover:text-[#C09A44] transition-colors"
              >
                <ShoppingCart size={28} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-[#C09A44] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
