import Banner from "@/components/Banner";
import ProductSection from "@/components/ProductSection";
import PopularProduct from "@/components/PopularProduct";
import BlogSection from "@/components/BlogSection";
import ServiceFeatures from "@/components/ServiceFeatures";
import OrganicMangoSection from "@/components/OrganicMangoSection";
import MangoCallToAction from "@/components/MangoCallToAction";
import { Suspense } from "react";

// Create loading skeletons for better perceived performance
function SectionSkeleton() {
  return (
    <div className="animate-pulse bg-gray-100 rounded-xl h-64 w-full my-8" />
  );
}

export default function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={<SectionSkeleton />}>
        <ServiceFeatures />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ProductSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <OrganicMangoSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <MangoCallToAction />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <PopularProduct />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <BlogSection />
      </Suspense>
    </>
  );
}
