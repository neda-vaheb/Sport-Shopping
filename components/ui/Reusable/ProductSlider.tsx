"use client";


import { Product } from "@/types/product";
import HorizontalScroll from "@/components/ui/Reusable/HorizentalScroll";
import ProductCardWrapper from "./ProductCardWrapper";

interface ProductSliderProps {
  products: Product[];
  title?: string;
  description?: string;
  showNavigation?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  slidesPerView?: number;
  spaceBetween?: number;
  className?: string;
  variant?: "default" | "compact" | "featured";
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  products,
  title = "Our Products",
  description = "Discover our amazing collection",
  showNavigation = true,
  showDots = true,
  autoPlay = false,
  slidesPerView = 4,
  spaceBetween = 24,
  className = "bg-gray-50/50",
  variant = "default",
}) => {
  // تنظیمات breakpoints بر اساس واریانت
  const getBreakpoints = () => {
    const baseBreakpoints = {
      320: { slidesPerView: 1.2, spaceBetween: 16 },
      480: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 24 },
      1024: { slidesPerView: slidesPerView, spaceBetween: 28 },
      1280: { slidesPerView: slidesPerView, spaceBetween: 32 },
    };

    // تنظیمات خاص برای واریانت compact
    if (variant === "compact") {
      return {
        320: { slidesPerView: 2, spaceBetween: 12 },
        480: { slidesPerView: 3, spaceBetween: 16 },
        768: { slidesPerView: 4, spaceBetween: 20 },
        1024: { slidesPerView: 5, spaceBetween: 24 },
        1280: { slidesPerView: 6, spaceBetween: 28 },
      };
    }

    // تنظیمات خاص برای واریانت featured
    if (variant === "featured") {
      return {
        320: { slidesPerView: 1, spaceBetween: 16 },
        480: { slidesPerView: 1.5, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 24 },
        1024: { slidesPerView: 3, spaceBetween: 28 },
        1280: { slidesPerView: 3, spaceBetween: 32 },
      };
    }

    return baseBreakpoints;
  };

  const renderProduct = (product: Product) => {
    return <ProductCardWrapper product={product} />;
  };

  const shouldShowNavigation = products.length > slidesPerView;

  return (
    <HorizontalScroll
      items={products}
      renderItem={renderProduct}
      title={title}
      description={description}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      breakpoints={getBreakpoints()}
      showNavigation={showNavigation && shouldShowNavigation}
      showDots={showDots}
      autoPlay={autoPlay}
      autoPlayDelay={5000}
      loop={false}
      freeMode={false}
      className={className}
      centeredSlides={false}
    />
  );
};

export default ProductSlider;