"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

import { slidesData } from "@/constants/landing";
import { Loader2 } from "lucide-react"; // استفاده از آیکون لودینگ lucide-react
import { Typography } from "@/components/ui/Typography";

// کامپوننت جداگانه برای هر اسلاید با مدیریت لودینگ
const SlideWithLoader: React.FC<{ slide: (typeof slidesData)[0] }> = ({
  slide,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative h-190 w-full overflow-hidden">
      {/* لودر */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
            <Typography variant="small" className="text-gray-500">
              Loading...
            </Typography>
          </div>
        </div>
      )}

      {/* تصویر */}
      <Image
        fill
        src={slide.imageUrl}
        alt={slide.title}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoadingComplete={() => setIsLoading(false)}
        priority={slide.id === 1}
        quality={85}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white">
        <Typography variant="h2" className="mb-4 text-4xl font-bold text-white">
          {slide.title}
        </Typography>
        <Typography variant="p" className="mb-6 text-xl text-white">
          {slide.description}
        </Typography>
        <Link href={slide.buttonLink}>
          <Button className="rounded-lg bg-white px-6 py-3 font-bold text-gray-500 transition hover:bg-gray-200">
            {slide.buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper">
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SlideWithLoader slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
