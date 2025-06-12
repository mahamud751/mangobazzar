"use client";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { ChevronLeft, Loader2 } from "lucide-react";
import OrderConfirmation from "@/components/OrderConfirmation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    phone: false,
    address: false,
    city: false,
  });

  // Parse price utility
  const parsePrice = (priceString) => {
    if (typeof priceString === "number") return priceString;
    if (!priceString) return 0;
    const numericString = priceString.toString().replace(/[^\d.]/g, "");
    return parseFloat(numericString) || 0;
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc +
      parsePrice(item.discountedPrice || item.price || item.originalPrice) *
        (item.quantity || 1),
    0
  );
  const shipping = 0; // Free shipping for now
  const total = subtotal + shipping;

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "cash",
  });

  // Check form validity whenever form data changes
  useEffect(() => {
    const isValid =
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.address.trim() !== "" &&
      formData.city.trim() !== "";
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched when trying to submit
    setTouchedFields({
      name: true,
      email: true,
      phone: true,
      address: true,
      city: true,
    });

    if (!isFormValid) {
      toast.error("Please fill in all required fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare the data to match the example data structure
      const orderData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        method: formData.paymentMethod,
        cart: cartItems.map((item) => ({
          id: item.id,
          name: item.name,
          variety: item.variety,
          imageUrl: item.imageUrl,
          quantity: item.quantity || 1,
          originalPrice: `৳${parsePrice(
            item.originalPrice || item.price
          ).toFixed(2)}`,
          discountedPrice: item.discountedPrice
            ? `৳${parsePrice(item.discountedPrice).toFixed(2)}`
            : undefined,
        })),
        grandPrice: total.toFixed(2),
        getState: [],
      };

      // Make POST request to the API
      const response = await fetch(
        "https://api.chapaimangobazar.com/api/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit order");
      }

      // On success, clear cart and show confirmation
      clearCart();
      setOrderSuccess(true);
      toast.success("Order placed successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } catch (error) {
      console.error("Error submitting order:", error);
      toast.error(`Failed to place order: ${error.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderSuccess) {
    return (
      <OrderConfirmation
        orderDetails={{ ...formData, total, cart: cartItems }}
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <ToastContainer />
      <button
        onClick={() => router.back()}
        className="flex items-center text-[#491D0B] hover:text-[#C09A44] mb-6 cursor-pointer"
      >
        <ChevronLeft size={20} className="mr-1" />
        Back to Cart
      </button>

      <h1 className="text-3xl font-bold text-[#491D0B] mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Delivery Information */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-[#491D0B] mb-6">
            Delivery Information
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C09A44] focus:border-[#C09A44] outline-none transition ${
                    touchedFields.name && formData.name.trim() === ""
                      ? "border-red-300"
                      : "border-gray-300"
                  }`}
                />
                {touchedFields.name && formData.name.trim() === "" && (
                  <p className="mt-1 text-sm text-red-500">
                    Please enter your full name
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C09A44] focus:border-[#C09A44] outline-none transition ${
                      touchedFields.email && formData.email.trim() === ""
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                  />
                  {touchedFields.email && formData.email.trim() === "" && (
                    <p className="mt-1 text-sm text-red-500">
                      Please enter your email
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C09A44] focus:border-[#C09A44] outline-none transition ${
                      touchedFields.phone && formData.phone.trim() === ""
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                  />
                  {touchedFields.phone && formData.phone.trim() === "" && (
                    <p className="mt-1 text-sm text-red-500">
                      Please enter your phone number
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Delivery Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  required
                  value={formData.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C09A44] focus:border-[#C09A44] outline-none transition ${
                    touchedFields.address && formData.address.trim() === ""
                      ? "border-red-300"
                      : "border-gray-300"
                  }`}
                />
                {touchedFields.address && formData.address.trim() === "" && (
                  <p className="mt-1 text-sm text-red-500">
                    Please enter your delivery address
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C09A44] focus:border-[#C09A44] outline-none transition ${
                    touchedFields.city && formData.city.trim() === ""
                      ? "border-red-300"
                      : "border-gray-300"
                  }`}
                />
                {touchedFields.city && formData.city.trim() === "" && (
                  <p className="mt-1 text-sm text-red-500">
                    Please enter your city
                  </p>
                )}
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold text-[#491D0B] mb-3">
                  Payment Method
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={handleChange}
                      className="h-4 w-4 text-[#C09A44] focus:ring-[#C09A44] border-gray-300"
                    />
                    <span className="text-gray-700">Cash on Delivery</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bkash"
                      checked={formData.paymentMethod === "bkash"}
                      onChange={handleChange}
                      className="h-4 w-4 text-[#C09A44] focus:ring-[#C09A44] border-gray-300"
                    />
                    <span className="text-gray-700">bKash</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleChange}
                      className="h-4 w-4 text-[#C09A44] focus:ring-[#C09A44] border-gray-300"
                    />
                    <span className="text-gray-700">Credit/Debit Card</span>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit sticky top-4">
          <h2 className="text-xl font-bold text-[#491D0B] mb-6">
            Order Summary
          </h2>

          <div className="space-y-4 mb-6">
            {cartItems.map((item) => {
              const price = parsePrice(
                item.discountedPrice || item.price || item.originalPrice
              );
              const originalPrice = parsePrice(
                item.originalPrice || item.price
              );
              const hasDiscount = item.discountedPrice && originalPrice > price;

              return (
                <div
                  key={item.id}
                  className="flex justify-between items-start border-b border-gray-100 pb-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#491D0B]">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">{item.variety}</p>
                      <p className="text-sm">
                        {hasDiscount && (
                          <span className="text-gray-400 line-through mr-1">
                            ৳{originalPrice.toFixed(2)}
                          </span>
                        )}
                        <span
                          className={`font-medium ${
                            hasDiscount ? "text-[#C09A44]" : "text-[#491D0B]"
                          }`}
                        >
                          ৳{price.toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-600">x{item.quantity || 1}</span>
                    <p className="font-medium text-[#491D0B]">
                      ৳{(price * (item.quantity || 1)).toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-3 border-t border-gray-200 pt-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">৳{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">৳{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-[#491D0B] pt-2">
              <span>Total</span>
              <span>৳{total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting || cartItems.length === 0 || !isFormValid}
            className={`w-full mt-6 py-3 rounded-lg font-medium flex items-center justify-center cursor-pointer ${
              isSubmitting || cartItems.length === 0 || !isFormValid
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#C09A44] hover:bg-[#ab883c] text-white"
            } transition`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                Processing...
              </>
            ) : (
              "Place Order"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
