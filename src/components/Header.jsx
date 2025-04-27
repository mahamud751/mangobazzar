'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartHover, setCartHover] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { cartItems, removeFromCart } = useCart();

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    if (!price) return 0;
    const numericString = price.toString().replace(/[^\d.]/g, '');
    return parseFloat(numericString) || 0;
  };

  const total = cartItems.reduce(
    (acc, item) => acc + parsePrice(item.price) * (item.quantity || 1),
    0
  );

  if (!isClient) return null;

  return (
    <header className="bg-white shadow-md py-4 fixed top-0 left-0 w-full z-50 border-b border-gray-100 h-[80px]">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center w-[180px] h-[60px] relative flex-shrink-0">
          <Image
            src="https://i.ibb.co/RT3pvYMb/logo.png"
            alt="Mango Bazar"
            fill
            className="object-contain hover:opacity-90 transition-opacity"
            priority
          />
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

          {/* Cart Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCartHover(true)}
            onMouseLeave={() => setCartHover(false)}
          >
            <div className="relative cursor-pointer">
              <ShoppingCart className="text-[#491D0B]" size={24} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C09A44] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>

            <AnimatePresence>
              {cartHover && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-lg border border-gray-100 z-50"
                >
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-[#491D0B] mb-3">Your Cart</h4>

                    {cartItems.length === 0 ? (
                      <p className="text-gray-500 text-center py-4">Your cart is empty</p>
                    ) : (
                      <>
                        <div className="max-h-64 overflow-y-auto space-y-4 pr-2">
                          {cartItems.map((item) => {
                            const price = parsePrice(item.price);
                            const originalPrice = parsePrice(item.originalPrice);
                            const hasDiscount = item.discountedPrice && originalPrice > price;

                            return (
                              <div key={item.id} className="flex gap-3 py-2 border-b border-gray-100 last:border-0">
                                <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                                  <Image
                                    src={item.imageUrl}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="flex justify-between">
                                    <h5 className="text-sm font-medium text-[#491D0B] line-clamp-1">{item.name}</h5>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        removeFromCart(item.id);
                                      }}
                                      className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                                    >
                                      <Trash2 size={16} />
                                    </button>
                                  </div>
                                  <p className="text-xs text-gray-500 mb-1">{item.variety}</p>
                                  <div className="flex items-center justify-between">
                                    <div className="text-sm">
                                      {hasDiscount && (
                                        <span className="text-xs text-gray-400 line-through mr-1">
                                          ৳{originalPrice.toFixed(2)}
                                        </span>
                                      )}
                                      <span className={`font-medium ${hasDiscount ? 'text-[#C09A44]' : 'text-[#491D0B]'}`}>
                                        ৳{price.toFixed(2)}
                                      </span>
                                    </div>
                                    <span className="text-sm text-gray-600">{item.quantity || 1} kg</span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="flex justify-between mb-4">
                            <span className="font-medium">Total</span>
                            <span className="font-bold text-[#491D0B]">৳{total.toFixed(2)}</span>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <Link
                              href="/cart"
                              className="py-2 px-4 bg-[#491D0B] text-white text-center rounded-lg hover:bg-[#391509] transition text-sm font-medium"
                            >
                              View Cart
                            </Link>
                            <Link
                              href="/checkout"
                              className="py-2 px-4 bg-[#C09A44] text-white text-center rounded-lg hover:bg-[#ab883c] transition text-sm font-medium"
                            >
                              Checkout
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Cart and Menu */}
        <div className="md:hidden flex items-center space-x-4">
          <Link href="/cart" className="relative text-[#491D0B] hover:text-[#C09A44] transition-colors">
            <ShoppingCart size={28} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#C09A44] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
          <button
            className="text-[#491D0B]"
            onClick={() => {
              setMobileMenuOpen(true);
              setMenuVisible(true);
            }}
          >
            <Menu size={28} />
          </button>
        </div>

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
                onClick={() => {
                  setMenuVisible(false);
                  setMobileMenuOpen(false);
                }}
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
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setMenuVisible(false);
                    setMobileMenuOpen(false);
                  }}
                  className="text-2xl text-[#491D0B] hover:text-[#C09A44] font-semibold transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}