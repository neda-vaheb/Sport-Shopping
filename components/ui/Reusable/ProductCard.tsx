"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProductCardProps } from "@/types/product";
import { Typography } from "../Typography";
import { useState } from "react";
import { cn } from "@/lib/utils";
import FormattedPrice from "./FormattedPrice";

export default function ProductCard({
  product,
  onAddToCart,
  onAddToWishlist,
}: ProductCardProps) {
  const {
    id,
    name,
    category,
    subcategory,
    price,
    image,
    brand,
    isNew,
    discount,
    oldPrice,
    inStock = true,
  } = product;

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const productDetailUrl = `/shop/${category}/${subcategory}/${id}`;

  const discountedPrice = discount ? price * (1 - discount / 100) : price;
  const hasDiscount = !!discount && discount > 0;

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    if (onAddToCart) {
      await onAddToCart(product);
    }
    setIsAddingToCart(false);
  };

  // هندل اضافه کردن به علاقه‌مندی‌ها
  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
    if (onAddToWishlist) {
      onAddToWishlist(product);
    }
  };

  return (
    <Card className="group overflow-hidden rounded-xl border border-gray-200 bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full relative">
      <CardHeader className="p-0 relative aspect-square w-full bg-gray-100 overflow-hidden">
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-transparent hover:bg-gray-600 text-white text-xl border-none">
              New
            </Badge>
          )}
          {hasDiscount && (
            <Badge className="bg-red-600 hover:bg-red-700 text-white border-none">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* دکمه علاقه‌مندی */}
        <Button
          variant="secondary"
          size="icon"
          onClick={handleAddToWishlist}
          className={cn(
            "absolute top-3 right-3 z-10 rounded-full w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm",
            isWishlisted && "opacity-100",
          )}
          aria-label="Add to wishlist">
          <Heart
            className={cn(
              "w-4 h-4 transition-all",
              isWishlisted
                ? "fill-red-500 text-red-500"
                : "text-gray-900 hover:text-red-500",
            )}
          />
        </Button>

        {/* لودر تصویر */}
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
          </div>
        )}

        {/* لینک محصول */}
        <Link href={productDetailUrl} className="w-full h-full block">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className={cn(
              "object-cover object-center transition-all duration-500",
              "group-hover:scale-105",
              isImageLoaded ? "opacity-100" : "opacity-0",
            )}
            onLoadingComplete={() => setIsImageLoaded(true)}
            priority={false}
          />
        </Link>

        {/* وضعیت موجودی */}
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
            <Badge variant="destructive" className="text-sm py-1 px-3">
              Out of Stock
            </Badge>
          </div>
        )}
      </CardHeader>

      {/* محتوای کارت */}
      <CardContent className="p-4 grow flex flex-col justify-between">
        {/* برند و نام محصول */}
        <div>
          <div className="flex justify-between items-start gap-2">
            <Link
              href={productDetailUrl}
              className="block group-hover:text-gray-500 transition-colors flex-1">
              <Typography
                variant="h3"
                className="font-medium text-base text-gray-900 line-clamp-2 min-h-12 hover:text-gray-500 transition-colors">
                {name}
              </Typography>
            </Link>
            <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase whitespace-nowrap">
              {brand}
            </span>
          </div>
        </div>

        {/* دسته‌بندی و قیمت */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-gray-500 capitalize">
            {subcategory}
          </span>
          <div className="flex items-center gap-2">
            {hasDiscount && oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                <FormattedPrice
                  price={oldPrice}
                  className="text-gray-400 line-through"
                />
              </span>
            )}
            <FormattedPrice
              price={discountedPrice}
              hasDiscount={true}
              className={hasDiscount ? "text-red-600" : "text-gray-900"}
            />
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={!inStock || isAddingToCart}
          className={cn(
            "w-full gap-2 text-sm font-medium transition-all duration-300 cursor-pointer",
            inStock
              ? "bg-gray-600 hover:bg-gray-400/50 text-white"
              : "bg-gray-300 cursor-not-allowed",
          )}
          size="sm">
          {isAddingToCart ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Adding...
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              {inStock ? "Add to Cart" : "Out of Stock"}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
