'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ShoppingCart, Star, Truck, Shield, Plus, Minus } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import RelatedProducts from '@/components/RelatedProducts'
import { useCart } from '@/context/CartContext'

export default function ProductDetails() {
  const [product, setProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState('')
  const [amountKg, setAmountKg] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isZoomOpen, setIsZoomOpen] = useState(false)

  const { slug } = useParams()
  const router = useRouter()
  const { addToCart } = useCart()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/products/${slug}`)

        if (!response.ok) {
          throw new Error('Product not found')
        }

        const data = await response.json()
        setProduct(data)
        setSelectedImage(data.images[0])
        setError(null)
      } catch (err) {
        setError(err.message)
        console.error('Error fetching product:', err)
      } finally {
        setIsLoading(false)
      }
    }

    if (slug) {
      fetchProduct()
    }
  }, [slug])

  const handleAmountChange = (newAmount) => {
    const roundedAmount = Math.max(1, Math.round(newAmount * 2) / 2)
    setAmountKg(roundedAmount)
  }

  const handleAddToCart = () => {
    if (!product) return

    const imageUrl = selectedImage || product.images[0]

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: imageUrl,
      quantity: amountKg,
      stock: product.stock,
      slug: product.slug
    })
  }

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C09A44]"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => router.push('/')}
          className="bg-[#C09A44] text-white py-2 px-4 rounded"
        >
          Back to Home
        </button>
      </div>
    )
  }

  if (!product) {
    return null
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-[#491D0B] mb-6 space-x-1">
        <Link href="/" className="hover:text-[#C09A44] flex items-center">
          Home
        </Link>
        <span>&gt;</span>
        <Link href="/shop" className="hover:text-[#C09A44]">
          Shop
        </Link>
        <span>&gt;</span>
        <span className="text-[#C09A44] font-medium">{product.name}</span>
      </div>

      {/* Product Details */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <div className="w-full lg:w-1/2">
          {/* Main Image */}
          <div
            className="group relative w-full h-[350px] bg-gray-100 rounded-lg overflow-hidden border border-gray-200 cursor-zoom-in"
            onClick={() => setIsZoomOpen(true)}
          >
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
              priority
            />
            {product.isNew && (
              <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                NEW
              </span>
            )}
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`relative w-24 h-24 min-w-[96px] rounded-md cursor-pointer border ${selectedImage === image ? 'ring-2 ring-[#C09A44]' : 'border-gray-200'}`}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`${product.name} thumbnail ${index}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2">
          <div className="mb-4">
            <span className="text-[#C09A44] font-medium">{product.variety}</span>
            <h1 className="text-3xl font-bold text-[#491D0B] mt-1">{product.name}</h1>

            <div className="flex items-center mt-2">
              <div className="flex items-center bg-amber-50 px-2 py-1 rounded">
                <Star size={16} className="text-amber-500 fill-amber-500" />
                <span className="text-amber-700 font-medium ml-1">{product.rating}</span>
                <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
              </div>
            </div>
          </div>

          <div className="my-6 p-4 bg-amber-50 rounded-lg">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-[#C09A44]">৳{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-gray-500 line-through ml-2">৳{product.originalPrice}</span>
                  <span className="ml-2 bg-[#C09A44] text-white text-sm px-2 py-1 rounded">{product.discount}</span>
                </>
              )}
            </div>
            <div className="mt-2 text-sm">
              {product.stock > 0 ? (
                <span className="text-green-600">In Stock ({product.stock} kg available)</span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-2">Description</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-2">Key Benefits</h3>
            <ul className="space-y-2">
              {product.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#C09A44] mr-2">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <span className="font-medium">Quantity (kg):</span>
              <div className="flex items-center border border-[#C09A44] rounded-md overflow-hidden">
                <button
                  onClick={() => handleAmountChange(amountKg - 0.5)}
                  disabled={amountKg <= 1}
                  className="px-2 py-2 text-[#C09A44] hover:bg-[#F5E8C4] transition-colors cursor-pointer disabled:opacity-50"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-2">{amountKg}</span>
                <button
                  onClick={() => handleAmountChange(amountKg + 0.5)}
                  className="px-2 py-2 text-[#C09A44] hover:bg-[#F5E8C4] transition-colors cursor-pointer"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
              className="w-full bg-[#C09A44] hover:bg-[#B08C3E] text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors disabled:opacity-50"
            >
              <ShoppingCart size={18} /> Add to Cart
            </button>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Truck size={16} className="mr-2 text-[#C09A44]" />
              <span>Free shipping on orders over ৳500</span>
            </div>
            <div className="flex items-center">
              <Shield size={16} className="mr-2 text-[#C09A44]" />
              <span>100% Organic Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8">
        <div className="flex space-x-6">
          <button
            onClick={() => setActiveTab('description')}
            className={`text-lg font-medium ${activeTab === 'description' ? 'text-[#C09A44]' : 'text-gray-600'}`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`text-lg font-medium ${activeTab === 'reviews' ? 'text-[#C09A44]' : 'text-gray-600'}`}
          >
            Reviews
          </button>
          <button
            onClick={() => setActiveTab('shipping')}
            className={`text-lg font-medium ${activeTab === 'shipping' ? 'text-[#C09A44]' : 'text-gray-600'}`}
          >
            Shipping
          </button>
        </div>

        <div className="mt-6 p-6 bg-gray-50 rounded-lg">
          {activeTab === 'description' && (
            <div>
              <h3 className="font-bold text-lg mb-4">Product Details</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#C09A44] mr-2">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div>
              <h3 className="font-bold text-lg mb-4">Customer Reviews</h3>
              <div className="flex items-center mb-4">
                <Star size={20} className="text-amber-500 fill-amber-500" />
                <span className="text-amber-700 font-medium ml-1 text-xl">{product.rating}</span>
                <span className="text-gray-500 ml-1">({product.reviews} reviews)</span>
              </div>
              <p>No customer reviews yet. Be the first to review!</p>
            </div>
          )}
          {activeTab === 'shipping' && (
            <div>
              <h3 className="font-bold text-lg mb-4">Shipping & Returns</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Shipping Information</h4>
                  <p>Free standard shipping on orders over ৳500. Delivery within 2-3 business days in Dhaka, 3-5 days elsewhere in Bangladesh.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Return Policy</h4>
                  <p>We offer a 7-day return policy for damaged or defective products. Please contact us immediately if you receive damaged goods.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <RelatedProducts />

      {/* Zoom Modal */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={() => setIsZoomOpen(false)}
        >
          <div className="relative w-full max-w-5xl h-[80vh] cursor-zoom-out">
            <Image
              src={selectedImage}
              alt="Zoomed Product"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}