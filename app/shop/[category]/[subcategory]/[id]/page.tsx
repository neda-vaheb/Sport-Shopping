import Image from "next/image";
import { notFound } from "next/navigation";
import { PRODUCTS_DATA } from "@/constants/Products";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import ProductCard from "@/components/ui/Reusable/ProductCard";
import { Typography } from "@/components/ui/Typography";
import {
  BiHeart,
  BiRotateRight,
  BiShield,
  BiShoppingBag,
  BiSolidTruck,
} from "react-icons/bi";
import ProductSlider from "@/components/ui/Reusable/ProductSlider";

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
    <div className="container mx-auto px-4 py-7">
      <div className="grid grid-cols-1 md:flex   gap-10 ">
        <div className="relative   rounded-2xl overflow-hidden bg-muted border border-gray-400/40">
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={800}
            className="object-cover object-center h-full"
            priority
          />
        </div>

        <div className="flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline" className="uppercase tracking-wider">
                {product.brand}
              </Badge>
              <span className="text-sm text-muted-foreground capitalize">
                {product.category} / {product.subcategory}
              </span>
            </div>

            <Typography
              variant="h2"
              className="text-3xl pb-4 md:text-4xl font-extrabold tracking-tight text-foreground w-1/2">
              {product.name}
            </Typography>

            <div className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
              ${product.price.toLocaleString()}
            </div>

            <Typography
              variant="p"
              className="my-10 text-muted-foreground leading-relaxed">
              Premium quality sports gear designed for maximum comfort and
              durability. This high-performance item from {product.brand} is
              perfect for your daily workouts and training sessions.
            </Typography>
            {product.size && product.size.length > 0 && (
              <div className="py-8">
                <Typography
                  variant="h3"
                  className="text-sm font-semibold text-foreground mb-3">
                  Select Size (EU)
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {product.size.map((size) => (
                    <Button
                      key={size}
                      className="border cursor-pointer rounded-md px-4 py-2 text-sm font-medium hover:border-gray-300/50 transition">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 pt-10  border-t border-gray-400">
              <Button className="flex-1 h-12 gap-2 text-base cursor-pointer font-medium bg-gray-400/50 hover:bg-gray-300/50 hover:trnsition-all">
                <BiShoppingBag className="w-5 h-5" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-md cursor-pointer  hover:border-red-400/50 hover:transion-all">
                <BiHeart className="w-5 h-5  hover:text-red-400/50  hover:transion-all" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3  text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <BiSolidTruck className="w-4 h-4 text-primary" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <BiRotateRight className="w-4 h-4 text-primary" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <BiShield className="w-4 h-4 text-primary" />
              <span>Genuine Product</span>
            </div>
          </div>
        </div>
      </div>
      {relatedProducts.length > 0 && (
        <section className="pt-12 my-10">
          <ProductSlider
            products={relatedProducts}
            title="Related Products"
            description="You might also like these items"
            variant="default"
            slidesPerView={4}
            className="bg-white py-8"
          />
        </section>
      )}
    </div>
  );
}
