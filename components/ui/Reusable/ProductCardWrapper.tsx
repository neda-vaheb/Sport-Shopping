
"use client";

import dynamic from 'next/dynamic';
import { Product } from "@/types/product";


const ProductCard = dynamic(
  () => import('@/components/ui/Reusable/ProductCard'),
  { 
    ssr: false,
    loading: () => (
      <div className="rounded-xl border border-gray-200 bg-gray-100 animate-pulse h-100" />
    )
  }
);

interface ProductCardWrapperProps {
  product: Product;
  variant?: "default" | "compact" | "featured";
}

export default function ProductCardWrapper({ product}: ProductCardWrapperProps) {
  return <ProductCard product={product}  />;
}