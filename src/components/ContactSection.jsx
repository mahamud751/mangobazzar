"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    query: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    city: false,
    query: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (value.trim() !== "" && errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      phone: formData.phone.trim() === "",
      city: formData.city.trim() === "",
      query: formData.query.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const scrollToError = () => {
    const firstErrorField = Object.keys(errors).find((key) => errors[key]);
    if (firstErrorField) {
      const errorElement = document.getElementById(firstErrorField);
      errorElement?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        query: "",
      });
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <section className="relative py-12">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-orange-50/50 to-yellow-50/50 z-0"></div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#491D0B] text-center py-12 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Connect with{" "}
        <span className="text-[#C09A44]">Mango Bazar for Premium Organic</span>{" "}
        Products
      </motion.h2>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-white mt-16 rounded-2xl shadow-xl border border-[#f0e6d2] overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#C09A44] rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#C09A44] rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#C09A44] rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#C09A44] rounded-br-lg"></div>

          <div className="flex flex-col md:flex-row gap-12 p-8">
            {/* Left Content */}
            <motion.div
              className="md:w-[30%]"
              data-aos="fade-right"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <motion.h3
                  className="text-5xl font-semibold text-[#491D0B] mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Mango Bazar
                </motion.h3>
                <motion.p
                  className="text-[#491D0B] text-justify leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  At Mango Bazar, we are passionate about bringing you the
                  finest, handpicked organic Mangoes and a wide range of premium
                  products. Rooted in the heart of nature, we prioritize
                  quality, sustainability, and freshness in everything we do.
                  Reach out to us – we're always happy to help.
                </motion.p>

                {/* Decorative mango icon */}
                <motion.div
                  className="mt-8 text-6xl text-[#C09A44] opacity-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.2, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  🥭
                </motion.div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              className="md:w-[70%]"
              data-aos="fade-up"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-[#fffcf5] p-8 rounded-2xl shadow-lg border border-[#f0e6d2] relative overflow-hidden"
              >
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-10 left-10 w-32 h-32 border-2 border-amber-300 rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-orange-300 rounded-full"></div>
                </div>

                <div className="relative z-10">
                  <motion.h3
                    className="text-2xl font-semibold text-[#491D0B] mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    For bulk orders or queries
                  </motion.h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {["name", "email", "phone", "city"].map((field, index) => (
                      <motion.div
                        className="relative"
                        key={field}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true }}
                      >
                        <input
                          type={
                            field === "email"
                              ? "email"
                              : field === "phone"
                              ? "tel"
                              : "text"
                          }
                          id={field}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          placeholder={`${
                            field.charAt(0).toUpperCase() + field.slice(1)
                          }*`}
                          className={`w-full px-4 py-3 border ${
                            errors[field] ? "border-red-500" : "border-gray-300"
                          } rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#C09A44] placeholder:font-semibold transition-all duration-300 hover:shadow-md`}
                        />
                        {errors[field] && (
                          <motion.p
                            className="absolute left-0 -bottom-5 text-red-500 text-xs mt-1 w-full"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            This field is required. Please input your {field}.
                          </motion.p>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="mb-6 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <textarea
                      id="query"
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      rows={4}
                      placeholder="What's Your Query?*"
                      className={`w-full px-4 py-3 border ${
                        errors.query ? "border-red-500" : "border-gray-300"
                      } rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#C09A44] placeholder:font-semibold transition-all duration-300 hover:shadow-md`}
                    ></textarea>
                    {errors.query && (
                      <motion.p
                        className="absolute left-0 -bottom-5 text-red-500 text-xs mt-1 w-full"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        This field is required. Please input your query.
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-[#C09A44] to-amber-600 hover:from-amber-600 hover:to-[#C09A44] text-white font-medium py-3 px-8 rounded-lg cursor-pointer transition-all duration-300 disabled:opacity-60 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {isSubmitting ? "Submitting..." : "Order Now!"}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
