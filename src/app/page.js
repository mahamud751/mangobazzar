import Banner from "@/components/Banner";
import ProductSection from "@/components/ProductSection";
import PopularProduct from "@/components/PopularProduct";
import BlogSection from "@/components/BlogSection";
import ServiceFeatures from "@/components/ServiceFeatures";
import OrganicMangoSection from "@/components/OrganicMangoSection";
import MangoCallToAction from "@/components/MangoCallToAction";

export default function Home() {
  return (
    <>
      <Banner />
      <ServiceFeatures />
      <ProductSection />
      {/* <OrganicMangoSection /> */}
      <MangoCallToAction />
      <PopularProduct />
      <BlogSection />
    </>
  );
}
