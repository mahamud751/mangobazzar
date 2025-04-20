export default function ServiceFeatures() {
  return (
    <section className="py-20 bg-[#FAF5E9]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature Card */}
          {[
            {
              icon: '🚚',
              title: 'Super Fast Delivery',
              description:
                'Doorstep delivery across Bangladesh – Dhaka, Savar, Gazipur, Tangail, Khulna, Sylhet & more within 3 to 5 days.',
            },
            {
              icon: '👨‍🌾',
              title: 'Trust & Service',
              description:
                'Farmer-owned. Freshly picked, no middlemen. Trusted by thousands of customers over 8+ years.',
            },
            {
              icon: '📞',
              title: 'Customer Support',
              description:
                'Friendly support from order to delivery. Get email & SMS updates with real-time tracking.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-[#f2e8d8] hover:border-[#C09A44] transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#491D0B]">{feature.title}</h3>
              </div>
              <p className="text-[#6B4C3B] text-justify leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
