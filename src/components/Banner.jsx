import Image from 'next/image';
import ProcessSteps from './Process';

export default function Banner() {
    return (
        <div className="bg-gradient-to-b from-green-50 to-yellow-50 text-gray-800">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Text content */}
                    <div className="lg:w-1/2 space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-green-800">
                            Fresh and Authentic Mango from Chapai Nawabganj
                        </h1>

                        <div className="space-y-4">
                            <p className="text-lg text-justify">
                                Mango is a delicious fruit grown on various species of tropical plants of the Mangifera genus.
                                Mangoes are green when unripe and yellow when ripe. Mango is an Indian subcontinental fruit. Its original habitat is South Asia. Chapai Nawabganj district of Bangladesh is called the mango capital. Mango, scientific name <span className="italic">Mangifera indica</span>, is one of the most widely cultivated fruits worldwide. Mangoes are believed to be around 600 years old.
                            </p>
                        </div>
                    </div>

                    {/* Image section */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative w-full h-64 md:h-96 overflow-hidden">
                            <Image
                                src="/banner-mango.png"
                                alt="Fresh Mangoes from Chapai Nawabganj"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
                <ProcessSteps />
            </div>
        </div>
    );
}