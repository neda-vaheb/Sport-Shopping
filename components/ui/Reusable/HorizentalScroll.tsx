"use client";

import React, { ReactNode, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

type HorizontalScrollItem = {
  id?: React.Key;
};

export interface HorizontalScrollProps<T = unknown> {
  items?: T[];
  renderItem?: (item: T, index: number) => ReactNode;
  title?: string;
  description?: string;
  slidesPerView?: number | "auto";
  spaceBetween?: number;
  breakpoints?: Record<
    number,
    { slidesPerView: number; spaceBetween?: number }
  >;
  showNavigation?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayDelay?: number;
  loop?: boolean;
  freeMode?: boolean;
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  loading?: boolean;
  emptyMessage?: string;
  centeredSlides?: boolean;
}

const HorizontalScroll = <
  T extends HorizontalScrollItem = HorizontalScrollItem,
>({
  items = [],
  renderItem,
  title,
  description,
  slidesPerView = "auto",
  spaceBetween = 24,
  breakpoints,
  showNavigation = true,
  showDots = false,
  autoPlay = false,
  autoPlayDelay = 3000,
  loop = false,
  freeMode = true,
  className,
  containerClassName,
  titleClassName,
  loading = false,
  emptyMessage = "Nothing to show",
  centeredSlides = false,
}: HorizontalScrollProps<T>) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // ماژول‌های مورد نیاز Swiper
  const swiperModules = [FreeMode];
  if (showNavigation) swiperModules.push(Navigation);
  if (autoPlay) swiperModules.push(Autoplay);

  // تنظیمات Autoplay
  const autoplayConfig = autoPlay
    ? {
        delay: autoPlayDelay,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        stopOnLastSlide: !loop,
      }
    : false;

  // بررسی وضعیت نویگیشن
  const handleSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    });
  };

  // تابع اسکرول به چپ
  const scrollLeft = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  // تابع اسکرول به راست
  const scrollRight = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  if (loading) {
    return (
      <div className={cn("w-full py-12", className)}>
        <div className="container mx-auto px-4">
          {title && (
            <div className="mb-8">
              <div className="h-8 w-48 bg-gray-200 animate-pulse rounded" />
              {description && (
                <div className="h-4 w-96 bg-gray-200 animate-pulse rounded mt-2" />
              )}
            </div>
          )}
          <div className="flex gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="shrink-0 w-32 h-32 bg-gray-200 animate-pulse rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className={cn("w-full py-12", className)}>
        <div className="container mx-auto px-4 text-center">
          <Typography variant="muted">{emptyMessage}</Typography>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full py-12 md:py-16 relative group", className)}>
      <div className={cn("container mx-auto px-4 md:px-6", containerClassName)}>
        {(title || description) && (
          <div className="text-center flex flex-col items-center justify-center mb-8 md:mb-12">
            {title && (
              <Typography
                variant="h2"
                className={cn(
                  "text-2xl md:text-3xl lg:text-4xl font-bold mb-3",
                  titleClassName,
                )}>
                {title}
              </Typography>
            )}
            {description && (
              <Typography
                variant="muted"
                className="text-sm md:text-base text-gray-500">
                {description}
              </Typography>
            )}
          </div>
        )}

        <div className="relative">
          {/* Custom Navigation Buttons */}
          {showNavigation &&
            items.length >
              (typeof slidesPerView === "number" ? slidesPerView : 1) && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollLeft}
                  disabled={!loop && isBeginning}
                  className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 z-10",
                    "bg-white shadow-lg rounded-full w-10 h-10 md:w-12 md:h-12",
                    "opacity-0 group-hover:opacity-100 transition-all duration-300",
                    "border-gray-200 hover:bg-gray-100 hover:scale-110",
                    !loop &&
                      isBeginning &&
                      "opacity-50 cursor-not-allowed hover:scale-100",
                  )}
                  aria-label="Previous slide">
                  <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollRight}
                  disabled={!loop && isEnd}
                  className={cn(
                    "absolute right-0 top-1/2 -translate-y-1/2 z-10",
                    "bg-white shadow-lg rounded-full w-10 h-10 md:w-12 md:h-12",
                    "opacity-0 group-hover:opacity-100 transition-all duration-300",
                    "border-gray-200 hover:bg-gray-100 hover:scale-110",
                    !loop &&
                      isEnd &&
                      "opacity-50 cursor-not-allowed hover:scale-100",
                  )}
                  aria-label="Next slide">
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                </Button>
              </>
            )}

          <Swiper
            onSwiper={handleSwiperInit}
            modules={swiperModules}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            navigation={false} // غیرفعال کردن navigation پیش‌فرض Swiper
            autoplay={autoplayConfig}
            loop={loop}
            freeMode={freeMode}
            breakpoints={breakpoints}
            pagination={
              showDots ? { clickable: true, dynamicBullets: true } : false
            }
            centeredSlides={centeredSlides}
            grabCursor={true}
            touchRatio={1}
            watchOverflow={false} // مخفی کردن نویگیشن وقتی اسلاید کافی نیست
            className="horizontal-scroll-swiper">
            {items.map((item, index) => (
              <SwiperSlide key={item.id || index}>
                {renderItem ? renderItem(item, index) : null}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
