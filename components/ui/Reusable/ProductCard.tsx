import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/Shadcn/Card";
import { Button } from "@/components/ui/Shadcn/Button";
import { Badge } from "@/components/ui/Shadcn/Badge";
import { ProductCardProps } from "@/types/product";

export default function ProductCard({ product }: ProductCardProps) {
  const { id, name, category, subcategory, price, image, brand, isNew } =
    product;

  // ساخت آدرس داینامیک برای صفحه جزییات محصول
  const productDetailUrl = `/shop/${category}/${subcategory}/${id}`;

  return (
    <Card className="group overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
      {/* بخش تصویر محصول */}
      <CardHeader className="p-0 relative aspect-square w-full bg-muted overflow-hidden">
        {/* نشان محصول جدید */}
        {isNew && (
          <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground">
            New
          </Badge>
        )}

        {/* دکمه افزودن به علاقه‌مندی‌ها */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-3 right-3 z-10 rounded-full w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm"
          aria-label="Add to wishlist">
          <Heart className="w-4 h-4 text-muted-foreground hover:text-destructive transition-colors" />
        </Button>

        {/* استفاده از Image در Next.js برای بهینه‌سازی خودکار حجم عکس */}
        <Link href={productDetailUrl} className="w-full h-full block">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            priority={false}
          />
        </Link>
      </CardHeader>

      {/* بخش جزییات متنی */}
      <CardContent className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            {brand}
          </span>
          <Link
            href={productDetailUrl}
            className="block mt-1 group-hover:text-primary transition-colors">
            <h3 className="font-medium text-base text-foreground line-clamp-2 min-h-[3rem]">
              {name}
            </h3>
          </Link>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-muted-foreground capitalize">
            {subcategory}
          </span>
          <span className="text-lg font-bold text-foreground">
            ${price.toLocaleString()}
          </span>
        </div>
      </CardContent>

      {/* بخش دکمه خرید پایین کارت */}
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2 text-sm font-medium" size="sm">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
