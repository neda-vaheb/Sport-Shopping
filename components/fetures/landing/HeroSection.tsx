"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

import { slidesData } from "@/constants/landing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full">
      <Swiper
        // ماژول‌های مورد نیاز
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0} // فاصله بین اسلایدها
        slidesPerView={1} // تعداد اسلاید در هر ویو
        navigation // فعال کردن دکمه‌های قبلی/بعدی
        pagination={{ clickable: true }} // فعال کردن دات‌های پایین اسلایدر با قابلیت کلیک
        autoplay={{
          delay: 5000, // زمان تعویض خودکار اسلاید (میلی‌ثانیه)
          disableOnInteraction: false, // بعد از کلیک کاربر، autoplay متوقف نشود
        }}
        loop={true} // چرخش بین‌هایت اسلایدها
        className="mySwiper">
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* هر محتوایی که دوست دارید داخل اسلاید قرار دهید */}
            <div className="relative h-160 w-full">
              {/* تصویر پس‌زمینه */}
              <Image
                width={1400}
                height={600}
                src={slide.imageUrl}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* متن و دکمه روی تصویر */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white">
                <Typography
                  variant="h2"
                  className="mb-4 text-4xl font-bold text-white">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
