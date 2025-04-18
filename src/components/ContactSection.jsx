'use client';

import { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        query: ''
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phone: false,
        city: false,
        query: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (value.trim() !== '' && errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: false
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {
            name: formData.name.trim() === '',
            email: formData.email.trim() === '',
            phone: formData.phone.trim() === '',
            city: formData.city.trim() === '',
            query: formData.query.trim() === ''
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle form submission
            console.log('Form submitted:', formData);
            alert('Form submitted successfully!');
        } else {
            console.log('Form has errors');
        }
    };

    return (
        <section className="">
            <h2 className="text-3xl md:text-4xl font-bold text-[#491D0B] text-center py-12 bg-[#faf8f3]">
                Connect with <span className='text-[#C09A44]'>Mango Bazar for Premium Organic</span> Products
            </h2>
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto bg-white mt-16">
                    <div className="flex flex-col md:flex-row gap-12">
                        {/* Left: Text Content */}
                        <div className="md:w-[30%]">
                            <div className="mb-8">
                                <h3 className="text-5xl font-semibold text-[#491D0B] mb-6">Mango Bazar</h3>
                                <p className="text-[#491D0B] text-justify">
                                    At Mango Bazar, we are passionate about bringing you the finest, handpicked organic Mangoes and a wide range of premium products. Rooted in the heart of nature, we prioritize quality, sustainability, and freshness in everything we do. Reach out to us – we're always happy to help.
                                </p>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="md:w-[70%]">
                            <form onSubmit={handleSubmit} className="bg-[#fffcf5] p-8 rounded-lg shadow-sm border border-[#f0e6d2]">
                                <h3 className="text-2xl font-semibold text-[#491D0B] mb-6">For bulk orders or queries</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Name*"
                                            className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#C09A44] placeholder:font-semibold`}
                                        />
                                        {errors.name && (
                                            <p className="absolute left-0 -bottom-5 text-red-500 text-xs mt-1 w-full">
                                                This field is required. Please input your name.
                                            </p>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email*"
                                            className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#C09A44] placeholder:font-semibold`}
                                        />
                                        {errors.email && (
                                            <p className="absolute left-0 -bottom-5 text-red-500 text-xs mt-1 w-full">
                                                This field is required. Please input your email.
                                            </p>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number*"
                                            className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#C09A44] placeholder:font-semibold`}
                                        />
                                        {errors.phone && (
                                            <p className="absolute left-0 -bottom-5 text-red-500 text-xs mt-1 w-full">
                                                This field is required. Please input your phone number.
                                            </p>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="City*"
                                            className={`w-full px-4 py-3 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#C09A44] placeholder:font-semibold`}
                                        />
                                        {errors.city && (
                                            <p className="absolute left-0 -bottom-5 text-red-500 text-xs mt-1 w-full">
                                                This field is required. Please input your city.
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-6 relative">
                                    <textarea
                                        id="query"
                                        name="query"
                                        value={formData.query}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="What's Your Query?*"
                                        className={`w-full px-4 py-3 border ${errors.query ? 'border-red-500' : 'border-gray-300'} rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#C09A44] placeholder:font-semibold`}
                                    ></textarea>
                                    {errors.query && (
                                        <p className="absolute left-0 -bottom-5 text-red-500 text-xs mt-1 w-full">
                                            This field is required. Please input your query.
                                        </p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#C09A44] hover:bg-[#a8843a] text-white font-medium py-3 px-6 rounded-md cursor-pointer transition-colors"
                                >
                                    Order Now!
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}