'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { toast } from 'react-hot-toast';
import { ShoppingCart } from 'lucide-react';

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
    variety: "Himsagar",
    slug: "organic-himsagar-mango"
};

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

export default function ProductDetails() {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [amountKg, setAmountKg] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const { addToCart } = useCart();

    const formatPrice = (price) => {
        return `৳${price.toFixed(2)}`;
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAddToCart = () => {
        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            discountedPrice: product.price,
            imageUrl: selectedImage,
            qty: amountKg,
            variety: product.variety,
            slug: product.slug
        };

        addToCart(cartItem);

        toast.success(`${amountKg}kg ${product.name} added to cart!`, {
            position: 'bottom-right',
            duration: 3000,
            style: {
                backgroundColor: '#C09A44',
                color: '#fff',
            },
            icon: <ShoppingCart size={18} />,
        });
    };

    return (
        <div className="bg-[#FFF9F0] py-12">
            <div className="container mx-auto px-4 max-w-screen-xl">
                {/* Breadcrumb */}
                <div className="text-sm text-[#491D0B] mb-10 space-x-1">
                    <Link href="/" className="hover:text-[#C09A44]">Home</Link>
                    <span>&gt;</span>
                    <Link href="/shop" className="hover:text-[#C09A44]">Shop</Link>
                    <span>&gt;</span>
                    <span className="text-[#C09A44] font-medium">{product.name}</span>
                </div>

                {/* Product Layout */}
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Product Images Section */}
                    <div className="flex flex-col w-full lg:w-1/2">
                        <div className="relative w-full h-96 mb-4 rounded-xl overflow-hidden shadow-lg">
                            <img 
                                src={selectedImage} 
                                alt={product.name} 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <div className="flex justify-between gap-2 w-full">
                            {product.images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`flex-1 h-24 rounded-md overflow-hidden border-2 cursor-pointer transition-all duration-200
                                    ${selectedImage === image ? 'border-[#C09A44] scale-105' : 'border-gray-200 hover:border-[#C09A44]'}`}
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <img 
                                        src={image} 
                                        alt={`${product.name} thumbnail ${index}`} 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info Section */}
                    <div className="flex flex-col w-full lg:w-1/2 space-y-6">
                        <h1 className="text-3xl font-bold text-[#491D0B]">{product.name}</h1>

                        <div className="flex items-center gap-2">
                            <div className="flex text-[#FFD700] text-lg">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
                                ))}
                            </div>
                            <span className="text-sm text-[#491D0B]">({product.reviews} reviews)</span>
                            {product.isNew && (
                                <span className="bg-[#C09A44] text-white text-xs px-2 py-1 rounded-full ml-2">NEW</span>
                            )}
                        </div>

                        <div className="flex items-center gap-4">
                            <p className="text-2xl font-bold text-[#491D0B]">
                                {formatPrice(product.price)}
                            </p>
                            <p className="line-through text-lg text-gray-500">
                                {formatPrice(product.originalPrice)}
                            </p>
                            <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                                {product.discount}
                            </span>
                        </div>

                        <ul className="space-y-2">
                            {product.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="w-5 h-5 text-[#C09A44] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-[#491D0B]">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Quantity and Add to Cart Section */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                            <div className="w-full sm:w-auto">
                                <div className="flex items-center border border-[#C09A44] rounded-lg overflow-hidden bg-white">
                                    <button
                                        onClick={() => setAmountKg(Math.max(0.1, amountKg - 0.1))}
                                        className="px-4 py-2 text-[#C09A44] hover:bg-[#F5E8C4] transition-colors"
                                    >
                                        −
                                    </button>
                                    <span className="px-6 py-2 text-center font-medium text-[#491D0B]">
                                        {amountKg.toFixed(1)} kg
                                    </span>
                                    <button
                                        onClick={() => setAmountKg(amountKg + 0.1)}
                                        className="px-4 py-2 text-[#C09A44] hover:bg-[#F5E8C4] transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="w-full sm:w-auto">
                                <button 
                                    onClick={handleAddToCart}
                                    disabled={product.stock <= 0}
                                    className={`w-full bg-[#C09A44] text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2
                                    ${product.stock <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    <ShoppingCart size={18} />
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                        <div className="text-sm text-[#491D0B] mt-2">
                            {product.stock > 0 ? (
                                <span className="text-green-600">In Stock ({product.stock} kg available)</span>
                            ) : (
                                <span className="text-red-600">Out of Stock</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="mt-12">
                    <div className="flex border-b border-gray-200">
                        {['description', 'reviews', 'shipping'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-3 font-medium text-sm sm:text-base relative
                                    ${activeTab === tab 
                                        ? 'text-[#C09A44] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#C09A44]' 
                                        : 'text-[#491D0B] hover:text-[#C09A44]'}`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="py-6">
                        {tabContent[activeTab]}
                    </div>
                </div>
            </div>
        </div>
    );
}