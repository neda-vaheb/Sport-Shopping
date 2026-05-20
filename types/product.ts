


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
    category: "men" | "women" | "girl" | "boy" | "sports";
    subcategory: "clothing" | "shoes" | "soccer" | "tennis";
    price: number;
    image: string;
    brand: string;
    size: number[];
    color: string;
  }
  

// =====productList=====

// export type TProductListProps = TCategoryPageProps &{
//     category:"men"|"women"|"girl"|"boy"|"sports",
//     subCategory:"clothing"|"shoes"|"soccer"|"tennis",
//     brand:"string",
//     new?:boolean,
//     url:string,
//     src?:string,
//     price:number,

// }

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
  