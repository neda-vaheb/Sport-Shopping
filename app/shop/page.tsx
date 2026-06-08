import ProductCardWrapper from "@/components/ui/Reusable/ProductCardWrapper";
import { PRODUCTS_DATA } from "@/constants/Products";

export default function ShopPage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
      {PRODUCTS_DATA.map((product) => (
        <ProductCardWrapper key={product.id} product={product} />
      ))}
    </div>
  );
}
