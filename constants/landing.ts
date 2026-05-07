import { CategoryLandingProps, SlideProps } from "@/types/landing";
// ============herosection=============== 
export const slidesData: SlideProps[] = [
    {
      id: 1,
      title: "Online Shop",
      description: "You Can Find The Best",
      imageUrl: "/landing/s-1.webp", 
      buttonText: "shopping",
      buttonLink: "/products",
    },
    {
      id: 2,
      title: "Shopping Now",
      description: "Sale Up To 50%",
      imageUrl: "/landing/s-2.webp",
      buttonText: "shopping Now",
      buttonLink: "/products",
    },
   
  ];
  // ============category==================
  export const categoryLanding :CategoryLandingProps[]= [
    {
      title: "Sports Collection",
      buttonText: "Shop Now",
      image: "/landing/sports.webp",
      alt: "sports image",
    },
    {
      title: "Fashion Collection",
      buttonText: "Explore",
      image: "/landing/clothes.webp",
      alt: "clothes image",
    },
  ];