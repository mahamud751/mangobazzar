'use client';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Minus, Plus, ShoppingCart } from 'lucide-react';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const parsePrice = (priceString) => {
    if (typeof priceString === 'number') return priceString;
    if (!priceString) return 0;
    const numericString = priceString.toString().replace(/[^\d.]/g, '');
    return parseFloat(numericString) || 0;
  };

  const handleAmountChange = (itemId, newAmount) => {
    const roundedAmount = Math.max(1, Math.round(newAmount)); // Remove 0.5kg increments
    updateQuantity(itemId, roundedAmount);
  };

  const handleInputChange = (itemId, e) => {
    const value = parseInt(e.target.value) || 1;
    handleAmountChange(itemId, value);
  };

  const total = cartItems.reduce((acc, item) => {
    const price = parsePrice(item.discountedPrice || item.originalPrice);
    const amount = parseFloat(item.quantity) || 1;
    return acc + price * amount;
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
              const amount = parseFloat(item.quantity) || 1;
              const subtotal = price * amount;
              const originalPrice = parsePrice(item.originalPrice);
              const hasDiscount = item.discountedPrice && originalPrice > price;

              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center sm:flex-row bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  {/* Image */}
                  <div className="w-full sm:w-40 h-40 flex-shrink-0 relative">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 160px"
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
                        className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
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

                    {/* Amount Controls */}
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex flex-col w-full sm:w-auto">
                        <label className="text-sm font-medium text-[#491D0B] mb-1">Amount (kg)</label>
                        <div className="flex items-center border border-[#C09A44] rounded-lg overflow-hidden bg-white">
                          <button
                            onClick={() => handleAmountChange(item.id, amount - 1)}
                            disabled={amount <= 1}
                            className={`px-3 py-2 text-[#C09A44] transition-colors cursor-pointer ${
                              amount <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#F5E8C4]'
                            }`}
                          >
                            <Minus size={16} />
                          </button>
                          <input
                            type="number"
                            min="1"
                            value={amount}
                            onChange={(e) => handleInputChange(item.id, e)}
                            className="w-16 px-2 py-2 text-center border-l border-r border-[#C09A44] focus:outline-none focus:ring-1 focus:ring-[#C09A44]"
                          />
                          <button
                            onClick={() => handleAmountChange(item.id, amount + 1)}
                            className="px-3 py-2 text-[#C09A44] hover:bg-[#F5E8C4] transition-colors cursor-pointer"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
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