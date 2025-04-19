"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RelatedProducts from '@/components/RelatedProducts';

const ProductPage = ({ params }) => {
    const product = {
        id: 1,
        name: "Organic Himsagar Mango",
        description: "Premium quality Himsagar mangoes grown organically in Chapai Nawabganj. Known for their sweet aroma, fiberless pulp, and rich flavor.",
        price: 450,
        originalPrice: 550,
        images: [
            "/images/products/amrapali-mango.png",
            "/images/products/banana-mango.png",
            "/images/products/fazli-mango.png",
        ],
        rating: 4.8,
        reviews: 124,
        discount: "18% OFF",
        isNew: true,
        stock: 15,
        benefits: [
            "100% Organic Certification",
            "No Artificial Ripening",
            "Direct from Farm to Doorstep",
            "Rich in Vitamins A & C"
        ],
        slug: "organic-himsagar-mango"
    };

    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    const formatPrice = (price) => `৳${price}`;

    // Mock reviews data
    const reviews = [
        {
            id: 1,
            name: "Rahim Khan",
            rating: 5,
            date: "2023-06-15",
            comment: "The sweetest mangoes I've ever tasted! Will definitely order again."
        },
        {
            id: 2,
            name: "Fatima Ahmed",
            rating: 4,
            date: "2023-06-10",
            comment: "Excellent quality but delivery took longer than expected."
        }
    ];

    // Tab content
    const tabContent = {
        description: (
            <div>
                <h3 className="font-semibold text-[#491D0B] mb-4">Product Details</h3>
                <p className="text-[#491D0B] mb-4">
                    Our Organic Himsagar Mangoes are carefully selected from the orchards of Chapai Nawabganj,
                    known for producing the finest quality mangoes in Bangladesh. Each fruit is hand-picked at
                    peak ripeness to ensure optimal flavor and texture.
                </p>
                <ul className="list-disc pl-5 text-[#491D0B] space-y-2">
                    <li>Origin: Chapai Nawabganj, Bangladesh</li>
                    <li>Variety: 100% Pure Himsagar</li>
                    <li>Weight: Approximately 300-350g per piece</li>
                    <li>Season: May to July</li>
                    <li>Storage: Keep in cool, dry place</li>
                </ul>
            </div>
        ),
        reviews: (
            <div>
                <h3 className="font-semibold text-[#491D0B] mb-4">Customer Reviews</h3>
                <div className="space-y-6">
                    {reviews.map(review => (
                        <div key={review.id} className="border-b border-[#C09A44] pb-4">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-medium text-[#491D0B]">{review.name}</h4>
                                <span className="text-sm text-[#491D0B]">{review.date}</span>
                            </div>
                            <div className="flex text-[#FFD700] mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                                ))}
                            </div>
                            <p className="text-[#491D0B]">{review.comment}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8">
                    <h4 className="font-semibold text-[#491D0B] mb-4">Write a Review</h4>
                    <textarea
                        className="w-full border border-[#C09A44] rounded p-3 text-[#491D0B]"
                        rows="4"
                        placeholder="Share your thoughts about this product..."
                    />
                    <button className="mt-2 bg-[#C09A44] text-white py-2 px-6 rounded cursor-pointer hover:bg-[#B08A40] transition">
                        Submit Review
                    </button>
                </div>
            </div>
        ),
        shipping: (
            <div>
                <h3 className="font-semibold text-[#491D0B] mb-4">Shipping & Returns</h3>
                <div className="space-y-4 text-[#491D0B]">
                    <div>
                        <h4 className="font-medium mb-2">Delivery Information</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Free shipping on orders over ৳1000</li>
                            <li>Standard delivery: 2-3 business days (Dhaka), 3-5 days (other cities)</li>
                            <li>Express delivery available for additional charge</li>
                            <li>We ship only within Bangladesh</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium mb-2">Return Policy</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>7-day return policy for damaged or defective products</li>
                            <li>Products must be in original condition</li>
                            <li>Return shipping costs covered by customer</li>
                            <li>Refunds processed within 3 business days</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="bg-[#FFF9F0] py-12">
            <div className="container mx-auto px-4">
                {/* Breadcrumb Navigation */}
                <div className="text-sm text-[#491D0B] mb-6">
                    <Link href="/" className="hover:text-[#C09A44]">Home</Link> &gt;
                    <Link href="/shop" className="hover:text-[#C09A44]"> Shop</Link> &gt;
                    <span className="text-[#C09A44]"> {product.name}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Product Images */}
                    <div className="lg:w-1/2">
                        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-4">
                            <Image
                                src={selectedImage}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(image)}
                                    className={`relative h-32 rounded-md overflow-hidden border-2 cursor-pointer ${selectedImage === image ? 'border-[#C09A44]' : 'border-transparent'}`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${product.name} thumbnail ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Product Details */}
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl font-bold text-[#491D0B] mb-2">{product.name}</h1>

                        <div className="flex items-center mb-4">
                            <div className="flex text-[#FFD700] mr-2">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
                                ))}
                            </div>
                            <span className="text-[#491D0B] text-sm">({product.reviews} reviews)</span>
                        </div>

                        <div className="mb-6">
                            {product.isNew && (
                                <span className="bg-[#C09A44] text-white text-xs px-2 py-1 rounded mr-2">
                                    NEW
                                </span>
                            )}
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                                {product.discount}
                            </span>
                        </div>

                        <div className="mb-6">
                            <p className="text-2xl font-bold text-[#491D0B]">
                                {formatPrice(product.price)}
                                <span className="text-lg text-gray-500 line-through ml-2">
                                    {formatPrice(product.originalPrice)}
                                </span>
                            </p>
                        </div>

                        <div className="mb-8">
                            <p className="text-[#491D0B] mb-4">{product.description}</p>

                            <h3 className="font-semibold text-[#491D0B] mb-2">Key Benefits:</h3>
                            <ul className="list-disc pl-5 text-[#491D0B] mb-4">
                                {product.benefits.map((benefit, i) => (
                                    <li key={i}>{benefit}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center mb-8">
                            <span className="text-[#491D0B] mr-4">Quantity:</span>
                            <div className="flex items-center border border-[#C09A44] rounded">
                                <button
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    className="px-3 py-1 text-[#C09A44] hover:bg-[#C09A44] hover:text-white transition"
                                >
                                    -
                                </button>
                                <span className="px-4 text-[#491D0B]">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(q => q + 1)}
                                    className="px-3 py-1 text-[#C09A44] hover:bg-[#C09A44] hover:text-white transition"
                                >
                                    +
                                </button>
                            </div>
                            <span className="text-sm text-[#491D0B] ml-4">{product.stock} available</span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-[#C09A44] text-white py-3 px-6 rounded-lg hover:bg-[#B08A40] transition flex-1">
                                Add to Cart
                            </button>
                            <button className="border border-[#C09A44] text-[#C09A44] py-3 px-6 rounded-lg hover:bg-[#FFF0D0] transition flex-1">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Tabs */}
                <div className="mt-16">
                    <div className="border-b border-[#C09A44]">
                        <nav className="flex space-x-8">
                            <button
                                onClick={() => setActiveTab('description')}
                                className={`py-4 px-1 border-b-2 cursor-pointer ${activeTab === 'description' ? 'border-[#C09A44] text-[#C09A44]' : 'border-transparent text-[#491D0B] hover:text-[#C09A44]'} font-medium`}
                            >
                                Description
                            </button>
                            <button
                                onClick={() => setActiveTab('reviews')}
                                className={`py-4 px-1 border-b-2 cursor-pointer ${activeTab === 'reviews' ? 'border-[#C09A44] text-[#C09A44]' : 'border-transparent text-[#491D0B] hover:text-[#C09A44]'} font-medium`}
                            >
                                Reviews ({product.reviews})
                            </button>
                            <button
                                onClick={() => setActiveTab('shipping')}
                                className={`py-4 px-1 border-b-2 cursor-pointer ${activeTab === 'shipping' ? 'border-[#C09A44] text-[#C09A44]' : 'border-transparent text-[#491D0B] hover:text-[#C09A44]'} font-medium`}
                            >
                                Shipping & Returns
                            </button>
                        </nav>
                    </div>
                    <div className="py-8 text-[#491D0B]">
                        {tabContent[activeTab]}
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="mt-12">
                    <RelatedProducts/>
                </div>
            </div>
        </div >
    );
};

export default ProductPage;