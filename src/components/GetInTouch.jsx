import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const GetInTouch = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto font-sans my-16 shadow-xl rounded-2xl overflow-hidden relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 z-0"></div>

        <div className="flex flex-col md:flex-row gap-8 justify-between relative z-10">
          {/* Left Column - Google Map */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="h-full bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58144.32844515858!2d88.2772528!3d24.5935632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbee9a8a22e6b1%3A0x74f3e1e3a7e0d1b8!2sChapai%20Nawabganj%20District!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ minHeight: "400px" }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-2xl"
                title="Chapainawabganj District Location Map"
                aria-label="Map showing Chapainawabganj District location"
              ></iframe>
              <div className="p-4 text-sm text-[#491D0B]">
                <motion.a
                  href="https://www.google.com/maps/place/Chapai+Nawabganj+District/@24.5935632,88.2772528,12z/data=!3m1!4b1!4m5!3m4!1s0x39fbee9a8a22e6b1:0x74f3e1e3a7e0d1b8!8m2!3d24.5935632!4d88.3472534"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#491D0B] hover:underline block mb-2 font-medium"
                  whileHover={{ x: 5 }}
                >
                  View larger map
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Details */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="p-6 rounded-2xl h-full">
              <motion.h2
                className="text-4xl font-semibold mb-8 text-[#491D0B]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Get in <span className="text-[#C09A44]">touch</span>
              </motion.h2>

              <div className="space-y-6">
                {/* Address Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <motion.div
                      className="mt-1 text-[#491D0B]"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <MapPin size={24} />
                    </motion.div>
                    <motion.h2
                      className="text-xl font-medium text-[#491D0B]"
                      whileHover={{ color: "#C09A44" }}
                    >
                      Address
                    </motion.h2>
                  </div>
                  <motion.p
                    className="text-[#491D0B] leading-relaxed ml-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Mango Bazar
                    <br />
                    Chapai-nawabganj
                    <br />
                    Rajshahi
                  </motion.p>
                </motion.div>

                {/* Email Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <motion.div
                      className="mt-1 text-[#491D0B]"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Mail size={24} />
                    </motion.div>
                    <motion.h2
                      className="text-xl font-medium text-[#491D0B]"
                      whileHover={{ color: "#C09A44" }}
                    >
                      Email Address
                    </motion.h2>
                  </div>
                  <motion.p
                    className="text-[#491D0B] ml-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.a
                      href="mailto:info@mangobazar.com"
                      className="hover:underline"
                      whileHover={{ x: 5 }}
                    >
                      info@mangobazar.com
                    </motion.a>
                  </motion.p>
                </motion.div>

                {/* Contact Number Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <motion.div
                      className="mt-1 text-[#491D0B]"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Phone size={24} />
                    </motion.div>
                    <motion.h2
                      className="text-xl font-medium text-[#491D0B]"
                      whileHover={{ color: "#C09A44" }}
                    >
                      Contact Number
                    </motion.h2>
                  </div>
                  <motion.p
                    className="text-[#491D0B] ml-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.a
                      href="tel:01712345678"
                      className="block hover:underline"
                      whileHover={{ x: 5 }}
                    >
                      01789999751
                    </motion.a>
                  </motion.p>
                </motion.div>
              </div>

              {/* Decorative element */}
              <motion.div
                className="mt-8 text-right text-5xl text-[#C09A44] opacity-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                📞
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
