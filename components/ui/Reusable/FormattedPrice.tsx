import { cn } from "@/lib/utils";

interface FormattedPriceProps {
  price: number;
  className?: string;
  hasDiscount?: boolean;
}

export default function FormattedPrice({
  price,
  className,
}: FormattedPriceProps) {
  const formattedPrice = price.toLocaleString();

  return (
    <span className={cn("text-lg font-bold", className)}>
      ${formattedPrice}
    </span>
  );
}
