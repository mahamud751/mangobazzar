import Image from 'next/image';

export default function OrganicMangoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center lg:flex-row gap-12">
          {/* Image Grid - Left Side */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/banana-mango.png"
                  alt="Banana Mango"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/fazli-mango.png"
                  alt="Fazli Mango"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/gauromoti-mango.png"
                  alt="Gauromoti Mango"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/gopalbhog-mango.png"
                  alt="Gopalbhog Mango"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#491D0B] mb-6">
              Welcome to the World of <span className='text-[#C09A44BF]'>Mango Bazzar</span>
            </h2>
            
            <div className="space-y-6 text-[#491D0B] text-justify">
              <p>
                Every five enrichances of your childhood days by eating fresh juicy, and delightful mangoes sought from the trees. 
                Our unrivalled orchards from Chapai-Nawabganj produce the finest organic mangoes.
              </p>
              
              <p>
                The terrain in mountainside and the ground is an antigravitation of soil and rock, which helps cultivate the best harvests. 
                The rich fields with high mineral content and humidity create unique growing conditions.
              </p>
              
              <p>
                Our organic orchards are famous all over the globe for their magnificent aroma, extraordinary sweetness, and timeless texture. 
                We bring you premium organic mangoes to indulge your senses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}