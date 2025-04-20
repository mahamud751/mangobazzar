'use client';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Minus, Plus } from 'lucide-react';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const parsePrice = (priceString) => {
    if (typeof priceString === 'number') return priceString;
    if (!priceString) return 0;
    
    const numericString = priceString.toString()
      .replace(/[^\d.]/g, '');
    
    return parseFloat(numericString) || 0;
  };

  const handleQuantityChange = (itemId, newQty) => {
    if (newQty > 0) {
      updateQuantity(itemId, newQty);
    }
  };

  const total = cartItems.reduce((acc, item) => {
    const price = parsePrice(item.discountedPrice || item.originalPrice);
    const qty = parseInt(item.qty) || 0;
    return acc + price * qty;
  }, 0);

  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#491D0B]">Your Shopping Cart</h1>
        <span className="text-gray-600">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-gray-400 mb-4">
            <ShoppingCart size={48} className="mx-auto" />
          </div>
          <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
          <Link 
            href="/shop" 
            className="inline-block px-6 py-3 bg-[#C09A44] text-white rounded-lg hover:bg-[#ab883c] transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => {
              const price = parsePrice(item.discountedPrice || item.originalPrice);
              const qty = parseInt(item.qty) || 0;
              const subtotal = price * qty;
              const originalPrice = parsePrice(item.originalPrice);
              const hasDiscount = item.discountedPrice && originalPrice > price;

              return (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  {/* Image */}
                  <div className="w-full sm:w-40 h-40 flex-shrink-0 relative">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 p-4 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-lg font-semibold text-[#491D0B]">{item.name}</h2>
                        <p className="text-sm text-gray-500 mb-2">{item.variety}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    {/* Price Display */}
                    <div className="mt-2 mb-4">
                      {hasDiscount && (
                        <span className="text-sm text-gray-400 line-through mr-2">
                          ৳{originalPrice.toFixed(2)}
                        </span>
                      )}
                      <span className={`font-medium ${hasDiscount ? 'text-[#C09A44]' : 'text-[#491D0B]'}`}>
                        ৳{price.toFixed(2)}
                      </span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => handleQuantityChange(item.id, qty - 1)}
                          className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-1 text-center w-12 font-medium">
                          {qty}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, qty + 1)}
                          className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-500">Subtotal</span>
                        <p className="font-semibold text-[#491D0B]">৳{subtotal.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-4">
              <h2 className="text-xl font-bold text-[#491D0B] mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">৳{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">৳0.00</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-4">
                  <span className="text-gray-600">Estimated Total</span>
                  <span className="font-bold text-[#491D0B]">৳{total.toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="block w-full py-3 bg-[#C09A44] text-white text-center rounded-lg hover:bg-[#ab883c] transition mb-4 font-medium"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/shop"
                className="block w-full py-3 border border-[#C09A44] text-[#C09A44] text-center rounded-lg hover:bg-[#faf6ed] transition font-medium"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}