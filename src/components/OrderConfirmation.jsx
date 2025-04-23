'use client';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function OrderConfirmation({ orderDetails }) {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="bg-white rounded-xl shadow-sm p-8 border border-green-100">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-50 p-4 rounded-full">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
        </div>
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#491D0B] text-center mb-4">
          Order Confirmed!
        </h1>
        
        {/* Message */}
        <p className="text-lg text-gray-600 text-center mb-8">
          Thank you for your purchase! Your order has been received and we'll contact you shortly for delivery.
        </p>
        
        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-[#491D0B] mb-4">Order Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Order Number</span>
              <span className="font-medium">#{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total</span>
              <span className="font-bold text-[#491D0B]">৳{orderDetails.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method</span>
              <span className="font-medium capitalize">{orderDetails.paymentMethod}</span>
            </div>
          </div>
        </div>
        
        {/* Delivery Info */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-[#491D0B] mb-4">Delivery Information</h3>
          <div className="space-y-2">
            <p className="font-medium">{orderDetails.name}</p>
            <p className="text-gray-600">{orderDetails.address}</p>
            <p className="text-gray-600">{orderDetails.city}</p>
            <p className="text-gray-600">{orderDetails.phone}</p>
            <p className="text-gray-600">{orderDetails.email}</p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/shop"
            className="px-6 py-3 bg-[#C09A44] text-white rounded-lg hover:bg-[#ab883c] transition text-center"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="px-6 py-3 border border-[#491D0B] text-[#491D0B] rounded-lg hover:bg-gray-50 transition text-center"
          >
            Go to Home
          </Link>
        </div>
        
        {/* Help Text */}
        <p className="text-sm text-gray-500 text-center mt-8">
          Need help? Contact us at <a href="mailto:support@mangobazaar.com" className="text-[#C09A44]">support@mangobazaar.com</a>
        </p>
      </div>
    </div>
  );
}