// app/shop/[category]/page.tsx

import { PRODUCTS_DATA } from "@/constants/Products";
import { TCategoryPageProps } from "@/types/product";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ui/Reusable/ProductCard"; // یک کامپوننت مشترک برای کارت محصول

const VALID_CATEGORIES = ["men", "women", "girl", "boy", "sports"];

export default async function CategoryPage({ params, searchParams }: TCategoryPageProps) {
  
  const { category } = await params;
  const { brand, color } = await searchParams;


  if (!VALID_CATEGORIES.includes(category)) {
    notFound();
  }


  let filteredProducts = PRODUCTS_DATA.filter(
    (product) => product.category === category
  );


  if (brand) {
    filteredProducts = filteredProducts.filter((p) => p.brand.toLowerCase() === brand.toLowerCase());
  }
  if (color) {
    filteredProducts = filteredProducts.filter((p) => p.color.toLowerCase() === color.toLowerCase());
  }

 
  const pageTitle = category.charAt(0).toUpperCase() + category.slice(1) + "'s Collection";

  return (
    <div className="container mx-auto px-4 py-8">
 
      <header className="border-b pb-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">{pageTitle}</h1>
        <p className="text-muted-foreground mt-1">
          Showing {filteredProducts.length} sports products for {category}.
        </p>
      </header>

   
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          No products found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}




