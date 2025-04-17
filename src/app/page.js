import Banner from "@/components/Banner";
import Header from "@/components/Header";
import MangoPromo from "@/components/MangoPromo";
import ProductSection from "@/components/ProductSection";
import PopularProduct from "@/components/PopularProduct";
import MangoNutrition from "@/components/MangoNutrition";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import ServiceFeatures from "@/components/ServiceFeatures";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <ServiceFeatures />
      <ProductSection />
      <MangoPromo />
      <PopularProduct />
      <MangoNutrition />
      <BlogSection />
      <Footer />
    </>
  );
}
