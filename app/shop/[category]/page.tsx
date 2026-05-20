import { PRODUCTS_DATA } from "@/constants/Products";
import ProductCard from "@/components/ui/Reusable/ProductCard";
import { Typography } from "@/components/ui/Shadcn/Typography";

interface Props {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const filteredProducts = PRODUCTS_DATA.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase(),
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="border-b pb-4 mb-8">
        <Typography variant="h1" className="text-3xl font-bold text-foreground capitalize">
          {category}
        </Typography>
      </header>

      {filteredProducts.length === 0 ? (
        <Typography variant="p" className="text-muted-foreground">
          No products found for this category.
        </Typography>
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
