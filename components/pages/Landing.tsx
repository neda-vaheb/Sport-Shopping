import HeroSection from "@/components/fetures/landing/HeroSection";
import CategorySection from "@/components/fetures/landing/CategorySection";
import AllCategory from "../fetures/landing/AllCategory";
import BrandsScroll from "../fetures/landing/BrandScroll";
import FAQSection from "../fetures/landing/FAQ";

function Landing() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <CategorySection />
      <AllCategory />
      <BrandsScroll />
      <FAQSection />
    </main>
  );
}

export default Landing;
