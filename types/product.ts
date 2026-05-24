
export interface Product {
  id: string | number;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  brand: string;
  color?:string;
  isNew?: boolean;
  inStock?: boolean;
  rating?: number;
  reviewCount?: number;
  size:number[];
}

export interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void | Promise<void>;
  onAddToWishlist?: (product: Product) => void;
  variant?: "default" | "horizontal" | "compact";
}

export interface ProductGridProps {
  products: Product[];
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  onAddToCart?: (product: Product) => void;
  onAddToWishlist?: (product: Product) => void;
}

export type TCategoryPageProps = {
    params: Promise<{
      category: "men" | "women" | "kids"| "sports";
      isnew:boolean;
    }>;
    searchParams: Promise<{
      brand?: string;
      size?: string;
      color?: string;
    }>;
  };


// export interface Product {
//     id: string;
//     name: string;
//     category: "men" | "women" | "kids"| "sports";
//     subcategory: "clothing" | "shoes" | "soccer" | "tennis"| "girl" | "boy";
//     price: number;
//     image: string;
//     brand: string;
//     size: number[];
//     color: string;
//     isNew?: boolean; 
//   }
  


// export interface ProductCardProps {
//     product: {
//       id: string;
//       name: string;
//       category: string;
//       subcategory: string;
//       price: number;
//       image: string;
//       brand: string;
//       isNew?: boolean; 
//     };
//   }
  
export interface NewCollectionProps {
  newCollections: Product[];
  title?: string;
  description?: string;
}