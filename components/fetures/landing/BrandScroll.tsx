"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/ui/Shadcn/Typography";
import { BrandsData } from "@/constants/landing";
import { TBrandProps, TBrandsScrollProps } from "@/types/landing";
import HorizontalScroll from "@/components/ui/Reusable/HorizentalScroll";

const BrandsScroll: React.FC<TBrandsScrollProps> = ({
  brands = BrandsData,
  title = "Brands",
  description = "The Best Brands With Us",
  autoPlay = false,
}) => {
  const renderBrand = (brand: TBrandProps) => {
    return (
      <Link
        href={brand.href}
        className="flex flex-col items-center gap-4 group">
        <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
          <Image
            src={brand.logo}
            alt={brand.alt || `${brand.name} logo`}
            fill
            className="object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
            sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
          />
        </div>
        <Typography
          variant="small"
          className="text-center text-gray-600 group-hover:text-gray-900 font-medium transition-colors">
          {brand.name}
        </Typography>
      </Link>
    );
  };

  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 28,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: 7,
      spaceBetween: 36,
    },
  };

  return (
    <HorizontalScroll
      items={brands}
      renderItem={renderBrand}
      title={title}
      description={description}
      slidesPerView={7} // استفاده از عدد ثابت به جای "auto"
      spaceBetween={24}
      breakpoints={breakpoints}
      showNavigation={brands.length > 7}
      showDots={true}
      autoPlay={autoPlay}
      autoPlayDelay={4000}
      loop={false} // غیرفعال کردن loop برای جلوگیری از مشکل
      freeMode={true}
      className="bg-gray-50/50"
      centeredSlides={false}
    />
  );
};

export default BrandsScroll;
