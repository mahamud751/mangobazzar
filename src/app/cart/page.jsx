'use client';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Minus, Plus, ShoppingCart } from 'lucide-react';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    if (!price) return 0;
    const numericString = price.toString().replace(/[^\d.]/g, '');
    return parseFloat(numericString) || 0;
  };

  const handleAmountChange = (itemId, newAmount) => {
    const roundedAmount = Math.max(1, Math.round(newAmount));
    updateQuantity(itemId, roundedAmount);
  };

  const handleInputChange = (itemId, e) => {
    const value = parseInt(e.target.value) || 1;
    handleAmountChange(itemId, value);
  };

  const total = cartItems.reduce((acc, item) => {
    const price = parsePrice(item.price);
    const amount = parseFloat(item.quantity) || 1;
    return acc + price * amount;
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#491D0B]">Your Shopping Cart</h1>
        <span className="text-gray-600 text-sm sm:text-base">
          {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
        </span>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <ShoppingCart size={40} className="mx-auto" />
          </div>
          <p className="text-lg sm:text-xl text-gray-600 mb-4">Your cart is empty</p>
          <Link
            href="/shop"
            className="inline-block px-6 py-2.5 bg-[#C09A44] text-white rounded-lg hover:bg-[#ab883c] transition text-sm sm:text-base"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => {
              const price = parsePrice(item.price);
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
                  <div className="w-full sm:w-32 h-32 sm:h-32 relative aspect-square">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 128px"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 p-4 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-base sm:text-lg font-semibold text-[#491D0B] line-clamp-1">{item.name}</h2>
                        <p className="text-xs sm:text-sm text-gray-500 mb-2">{item.variety}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    {/* Price Display */}
                    <div className="mt-2 mb-3">
                      {hasDiscount && (
                        <span className="text-xs sm:text-sm text-gray-400 line-through mr-2">
                          ৳{originalPrice.toFixed(2)}
                        </span>
                      )}
                      <span className={`font-medium text-sm sm:text-base ${hasDiscount ? 'text-[#C09A44]' : 'text-[#491D0B]'}`}>
                        ৳{price.toFixed(2)}
                      </span>
                    </div>

                    {/* Amount Controls */}
                    <div className="mt-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                      <div className="w-full sm:w-auto">
                        <label className="text-xs sm:text-sm font-medium text-[#491D0B] mb-1 block">Amount (kg)</label>
                        <div className="flex items-center border border-[#C09A44] rounded-lg overflow-hidden bg-white w-fit">
                          <button
                            onClick={() => handleAmountChange(item.id, amount - 1)}
                            disabled={amount <= 1}
                            className={`px-2.5 py-1.5 text-[#C09A44] transition-colors cursor-pointer ${
                              amount <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#F5E8C4]'
                            }`}
                          >
                            <Minus size={14} />
                          </button>
                          <input
                            type="number"
                            min="1"
                            value={amount}
                            onChange={(e) => handleInputChange(item.id, e)}
                            className="min-w-[4rem] px-2 py-1.5 text-center border-l border-r border-[#C09A44] focus:outline-none focus:ring-1 focus:ring-[#C09A44] text-sm"
                          />
                          <button
                            onClick={() => handleAmountChange(item.id, amount + 1)}
                            className="px-2.5 py-1.5 text-[#C09A44] hover:bg-[#F5E8C4] transition-colors cursor-pointer"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs sm:text-sm text-gray-500">Subtotal</span>
                        <p className="font-semibold text-sm sm:text-base text-[#491D0B]">৳{subtotal.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6 lg:sticky lg:top-4">
              <h2 className="text-lg sm:text-xl font-bold text-[#491D0B] mb-5">Order Summary</h2>

              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">৳{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">৳0.00</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-3 text-sm sm:text-base">
                  <span className="text-gray-600">Estimated Total</span>
                  <span className="font-bold text-[#491D0B]">৳{total.toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="block w-full max-w-md mx-auto py-2.5 sm:py-3 bg-[#C09A44] text-white text-center rounded-lg hover:bg-[#ab883c] transition text-sm sm:text-base font-medium"
              >
                Proceed to Checkout
              </Link>
              <Link
                href="/shop"
                className="block w-full max-w-md mx-auto py-2.5 sm:py-3 mt-3 border border-[#C09A44] text-[#C09A44] text-center rounded-lg hover:bg-[#faf6ed] transition text-sm sm:text-base font-medium"
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