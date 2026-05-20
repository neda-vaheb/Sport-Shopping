import Image from "next/image";
import { notFound } from "next/navigation";
import { PRODUCTS_DATA } from "@/constants/Products";
import { Button } from "@/components/ui/Shadcn/Button";
import { Badge } from "@/components/ui/Shadcn/Badge";
import {
  ShoppingCart,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

import ProductCard from "@/components/ui/Reusable/ProductCard";
import { Typography } from "@/components/ui/Shadcn/Typography";

interface ProductDetailPageProps {
  params: Promise<{
    category: string;
    subcategory: string;
    id: string;
  }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;

  const product = PRODUCTS_DATA.find((p) => p.id === id);

  if (!product) {
    notFound();
  }
  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.subcategory === product.subcategory && p.id !== product.id,
  ).slice(0, 4);
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-muted border">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="uppercase tracking-wider">
                {product.brand}
              </Badge>
              <span className="text-sm text-muted-foreground capitalize">
                {product.category} / {product.subcategory}
              </span>
            </div>

            <Typography
              variant="h1"
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              {product.name}
            </Typography>

            <div className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
              ${product.price.toLocaleString()}
            </div>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              Premium quality sports gear designed for maximum comfort and
              durability. This high-performance item from {product.brand} is
              perfect for your daily workouts and training sessions.
            </p>
          </div>

          {product.size && product.size.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">
                Select Size (EU)
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.size.map((size) => (
                  <button
                    key={size}
                    className="border rounded-md px-4 py-2 text-sm font-medium hover:border-primary hover:bg-accent transition">
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
            <Button className="flex-1 h-12 gap-2 text-base font-medium">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-md">
              <Heart className="w-5 h-5 text-muted-foreground hover:text-destructive transition-colors" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-primary" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-primary" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Genuine Product</span>
            </div>
          </div>
        </div>
      </div>
      {relatedProducts.length > 0 && (
        <section className="border-t pt-12">
          <div className="flex flex-col mb-8">
            <Typography
              variant="h2"
              className="text-2xl font-bold tracking-tight text-foreground">
              You May Also Like
            </Typography>
            <Typography
              variant="p"
              className="text-sm text-muted-foreground mt-1">
              Explore other popular items in the{" "}
              <span className="font-semibold text-primary capitalize">
                {product.subcategory}
              </span>{" "}
              collection.
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
