export default function ServiceFeatures() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Delivery Feature */}
          <div className="bg-[#fff9eb] p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#C09A44BF] duration-200 hover:shadow-md transition-all">
            <div className="flex gap-2 items-center text-center mb-4">
              <div className="text-green-600 text-5xl mb-3">🚚</div>
              <h3 className="text-xl font-bold text-[#491D0B]">Super Fast Delivery</h3>
            </div>
            <p className="text-[#491D0B]">
              Doorstep Home delivery. We deliver all over Bangladesh including major cities like Dhaka, Savar, Gazipur, Tangail, Khulna, Sylhet etc. in 3 to 5 days.
            </p>
          </div>

          {/* Trust Feature */}
          <div className="bg-[#fff9eb] p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#C09A44BF] duration-200 hover:shadow-md transition-all">
            <div className="flex gap-2 items-center text-center mb-4">
              <div className="text-green-600 text-5xl mb-3">👨‍🌾</div>
              <h3 className="text-xl font-bold text-[#491D0B]">Trust and Service</h3>
            </div>
            <p className="text-[#491D0B]">
              Owned by Farmers. Direct from Farm to Home without any middleman intervention.
              Trusted for 8+ years by our Customers all over India.
            </p>
          </div>

          {/* Support Feature */}
          <div className="bg-[#fff9eb] p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#C09A44BF] duration-200 hover:shadow-md transition-all">
            <div className="flex gap-2 items-center text-center mb-4">
              <div className="text-green-600 text-5xl mb-3">📞</div>
              <h3 className="text-xl font-bold text-[#491D0B]">Customer Support</h3>
            </div>
            <p className="text-[#491D0B]">
              Customer support centre to resolve any issues from order to post delivery.
              Live tracking for order delivery status via email & sms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}