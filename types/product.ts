


export type TCategoryPageProps = {
    params: Promise<{
      category: "men" | "women" | "girl" | "boy" | "sports";
    }>;
    searchParams: Promise<{
      brand?: string;
      size?: string;
      color?: string;
    }>;
  };


export interface Product {
    id: string;
    name: string;
    category: "men" | "women" | "kids"| "sports";
    subcategory: "clothing" | "shoes" | "soccer" | "tennis"| "girl" | "boy";
    price: number;
    image: string;
    brand: string;
    size: number[];
    color: string;
    isNew?: boolean; 
  }
  


export interface ProductCardProps {
    product: {
      id: string;
      name: string;
      category: string;
      subcategory: string;
      price: number;
      image: string;
      brand: string;
      isNew?: boolean; 
    };
  }
  