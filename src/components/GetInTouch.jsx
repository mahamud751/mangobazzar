import Image from 'next/image';
import React from 'react';

const GetInTouch = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto font-sans my-16 shadow-sm rounded-lg">
                <div className="flex flex-col md:flex-row gap-8 justify-between">
                    {/* Left Column - Google Map */}
                    <div className="w-full md:w-1/2">
                        <div className="h-full bg-gray-100 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58144.32844515858!2d88.2772528!3d24.5935632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbee9a8a22e6b1%3A0x74f3e1e3a7e0d1b8!2sChapai%20Nawabganj%20District!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{ minHeight: '400px' }}
                                allowFullScreen=""
                                loading="lazy"
                                className="rounded-lg"
                                title="Chapainawabganj District Location Map"
                                aria-label="Map showing Chapainawabganj District location"
                            ></iframe>
                            <div className="p-4 text-sm text-[#491D0B]">
                                <a
                                    href="https://www.google.com/maps/place/Chapai+Nawabganj+District/@24.5935632,88.2772528,12z/data=!3m1!4b1!4m5!3m4!1s0x39fbee9a8a22e6b1:0x74f3e1e3a7e0d1b8!8m2!3d24.5935632!4d88.3472534"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#491D0B] hover:underline block mb-2"
                                >
                                    View larger map
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Details */}
                    <div className="w-full md:w-1/2">
                        <div className="p-6 rounded-lg h-full">
                            <h2 className="text-4xl font-semibold mb-8 text-[#491D0B]">
                                Get in <span className='text-[#C09A44]'>touch</span>
                            </h2>

                            <div className="space-y-6">
                                {/* Address Section */}
                                <div>
                                    <div className="flex items-start gap-3 mb-2">
                                        <Image
                                            src="/location-icon.svg"
                                            width={20}
                                            height={20}
                                            alt="Location icon"
                                            className="mt-1"
                                        />
                                        <h2 className="text-xl font-medium text-[#491D0B]">Address</h2>
                                    </div>
                                    <p className="text-[#491D0B] leading-relaxed ml-8">
                                        Mango Bazar<br />
                                        Chapai-nawabganj<br />
                                        Rajshahi
                                    </p>
                                </div>

                                {/* Email Section */}
                                <div>
                                    <div className="flex items-start gap-3 mb-2">
                                        <Image
                                            src="/mail-icon.svg"
                                            width={20}
                                            height={20}
                                            alt="Email icon"
                                            className="mt-1"
                                        />
                                        <h2 className="text-xl font-medium text-[#491D0B]">Email Address</h2>
                                    </div>
                                    <p className="text-[#491D0B] ml-8">
                                        <a href="mailto:info@mangobazar.com" className="hover:underline">
                                            info@mangobazar.com
                                        </a>
                                    </p>
                                </div>

                                {/* Contact Number Section */}
                                <div>
                                    <div className="flex items-start gap-3 mb-2">
                                        <Image
                                            src="/contact-icon.svg"
                                            width={20}
                                            height={20}
                                            alt="Contact icon"
                                            className="mt-1"
                                        />
                                        <h2 className="text-xl font-medium text-[#491D0B]">Contact Number</h2>
                                    </div>
                                    <p className="text-[#491D0B] ml-8">
                                        <a href="tel:01712345678" className="block hover:underline">
                                            01712345678
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;