import Breadcrumbs from "@/components/Breadcrumbs";
import JourneySection from "@/components/JourneySection";
import ReviewSlider from "@/components/ReviewSlider";
import WhyUs from "@/components/WhyUs";

const AboutPage = () => {
  return (
    <>
      <Breadcrumbs />
      <div className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* Main content with z-index to appear above background */}
        <div className="relative z-10">
          <JourneySection />
          <WhyUs />
          <ReviewSlider />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
