'use client';

import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

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

    const scrollToError = () => {
        const firstErrorField = Object.keys(errors).find((key) => errors[key]);
        if (firstErrorField) {
            const errorElement = document.getElementById(firstErrorField);
            errorElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            alert('Form submitted successfully!');

            setFormData({
                name: '',
                email: '',
                phone: '',
                city: '',
                query: ''
            });
        } else {
            console.log('Form has errors');
        }
    };


    return (
        <section>
            <h2 className="text-3xl md:text-4xl font-bold text-[#491D0B] text-center py-12 bg-[#faf8f3]">
                Connect with <span className='text-[#C09A44]'>Mango Bazar for Premium Organic</span> Products
            </h2>

            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto bg-white mt-16">
                    <div className="flex flex-col md:flex-row gap-12">
                        {/* Left Content */}
                        <div className="md:w-[30%]" data-aos="fade-right">
                            <div className="mb-8">
                                <h3 className="text-5xl font-semibold text-[#491D0B] mb-6">Mango Bazar</h3>
                                <p className="text-[#491D0B] text-justify">
                                    At Mango Bazar, we are passionate about bringing you the finest, handpicked organic Mangoes and a wide range of premium products. Rooted in the heart of nature, we prioritize quality, sustainability, and freshness in everything we do. Reach out to us – we're always happy to help.
                                </p>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="md:w-[70%]" data-aos="fade-up">
                            <form onSubmit={handleSubmit} className="bg-[#fffcf5] p-8 rounded-lg shadow-sm border border-[#f0e6d2]">
                                <h3 className="text-2xl font-semibold text-[#491D0B] mb-6">For bulk orders or queries</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    {['name', 'email', 'phone', 'city'].map((field) => (
                                        <div className="relative" key={field}>
                                            <input
                                                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                                id={field}
                                                name={field}
                                                value={formData[field]}
                                                onChange={handleChange}
                                                placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)}*`}
                                                className={`w-full px-4 py-3 border ${errors[field] ? 'border-red-500' : 'border-gray-300'} rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#C09A44] placeholder:font-semibold`}
                                            />
                                            {errors[field] && (
                                                <p className="absolute left-0 -bottom-5 text-red-500 text-xs mt-1 w-full">
                                                    This field is required. Please input your {field}.
                                                </p>
                                            )}
                                        </div>
                                    ))}
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
                                    disabled={isSubmitting}
                                    className="bg-[#C09A44] hover:bg-[#a8843a] text-white font-medium py-3 px-6 rounded-md cursor-pointer transition-colors disabled:opacity-60"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Order Now!'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
