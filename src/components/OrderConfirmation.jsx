'use client';
import Image from 'next/image';
import { CheckCircle2, Phone } from 'lucide-react';
import Link from 'next/link';

export default function OrderConfirmation() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl text-center">

      {/* Checkmark Icon */}
      <div className="flex justify-center mb-6">
        <CheckCircle2 size={60} className="text-green-500" />
      </div>

      {/* Message */}
      <h1 className="text-3xl font-bold text-[#491D0B] mb-4">Thank You for Your Interest!</h1>
      <p className="text-lg text-gray-700 mb-6">
        We're excited to serve you! Our mango ordering system will be available starting next month.
        For pre-orders or any inquiries, please contact us directly.
      </p>

      {/* Contact Info */}
      <div className="bg-amber-50 rounded-lg p-6 max-w-md mx-auto mb-8">
        <div className="flex items-center justify-center space-x-2 mb-3">
          <Phone size={20} className="text-[#C09A44]" />
          <span className="text-lg font-medium text-[#491D0B]">Call us at: 01789999751</span>
        </div>
        <p className="text-sm text-gray-600">
          Our team is available from 9AM to 6PM every day
        </p>
      </div>

      {/* Back to Shop Button */}
      <Link
        href="/shop"
        className="inline-block px-6 py-3 bg-[#C09A44] text-white rounded-lg hover:bg-[#ab883c] transition font-medium"
      >
        Back to Mango Collection
      </Link>
    </div>
  );
}