import {  CategoryLandingProps, FAQItem, SlideProps, TAllCategoriesProps, TBrandProps } from "@/types/landing";
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
    {
      id: 3,
      title: "Explor Now",
      description: "Sale Up To 70%",
      imageUrl: "/landing/kids-s1.webp",
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
    // {
    //   title: "Fashion Collection",
    //   buttonText: "Explore",
    //   image: "/landing/kids-c.webp",
    //   alt: "kids cllection image",
    // },
  ];
  export const AllCategories :TAllCategoriesProps[]=[{
    id:1,
    url:"/landing/shoes-cat.webp",
    title:"Shoes",
    alt:"shoes",
  },
  {
    id:2,
    url:"/landing/clothes-c2.jpg",
    title:"Clothes",
    alt:"clothes"
  },
  {
    id:3,
    url:"/landing/cap.webp",
    title:"Cap",
    alt:"cap"
  },
  {
    id:4,
    url:"/landing/ac-c.jpg",
    title:"Accecories",
    alt:"accecories"
  },
  {
    id:5,
    url:"/landing/ball-c.jpg",
    title:"Soccer Ball",
    alt:"soccer"
  },
  {
    id:6,
    url:"/landing/tennis-c.jpg",
    title:"Tennis",
    alt:"tennis",
  },]

  export const BrandsData: TBrandProps[] = [
    {
      id: 1,
      name: "Nike",
      logo: "/brands/nike-other.png",
      href: "/brands/nike",
      alt: " nike"
    },
    {
      id: 2,
      name: "Adidas",
      logo: "/brands/adidas.png",
      href: "/brands/adidas",
      alt: "Adidas"
    },
    {
      id: 3,
      name: "Puma",
      logo: "/brands/puma.png",
      href: "/brands/puma",
      alt: "Puma"
    },
    {
      id: 4,
      name: "New Blance",
      logo: "/brands/newblance.png",
      href: "/brands/newbalance",
      alt: "New-balance"
    },
    {
      id: 5,
      name: "Reebok",
      logo: "/brands/reebok.png",
      href: "/brands/reebok",
      alt: "Reebok"
    },

    {
      id: 6,
      name: "Fila",
      logo: "/brands/fila-1.png",
      href: "/brands/fila",
      alt: "fila"
    },
    {
      id: 7,
      name: "Nike",
      logo: "/brands/nike-other.png",
      href: "/brands/nike",
      alt: " nike"
    },
    {
      id: 8,
      name: "Adidas",
      logo: "/brands/adidas.png",
      href: "/brands/adidas",
      alt: "Adidas"
    },
    {
      id: 9,
      name: "Puma",
      logo: "/brands/puma.png",
      href: "/brands/puma",
      alt: "Puma"
    },
    {
      id: 10,
      name: "New Blance",
      logo: "/brands/newblance.png",
      href: "/brands/newbalance",
      alt: "New-balance"
    },
    {
      id: 11,
      name: "Reebok",
      logo: "/brands/reebok.png",
      href: "/brands/reebok",
      alt: "Reebok"
    },

    {
      id: 12,
      name: "Fila",
      logo: "/brands/fila-1.png",
      href: "/brands/fila",
      alt: "fila"
    },
  ];
  // ========FAQ============
  export const faqData: FAQItem[] = [
    {
      id: "1",
      title: "How do I track my order?",
      content: "You can track your order by logging into your account and visiting the 'My Orders' section. You'll also receive a tracking link via email once your order has been shipped. The tracking information usually takes 24-48 hours to become active.",
      category: "orders",
    },
    {
      id: "2",
      title: "What is your return policy?",
      content: "We offer a 30-day return policy for all unused items in their original packaging. To initiate a return, please visit our Returns Center or contact customer support. Return shipping is free for defective items, otherwise a small fee may apply.",
      category: "returns",
    },
    {
      id: "3",
      title: "Do you offer international shipping?",
      content: "Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary by location. You can calculate the exact shipping cost at checkout by entering your address. Please note that international orders may be subject to customs fees.",
      category: "shipping",
    },
    {
      id: "4",
      title: "How can I change or cancel my order?",
      content: "You can change or cancel your order within 1 hour of placing it. After that, the order may have already been processed. Please contact our customer support team immediately for assistance with any changes.",
      category: "orders",
    },
    {
      id: "5",
      title: "Are there any warranty on products?",
      content: "Most of our products come with a 1-year manufacturer's warranty against defects. This warranty does not cover normal wear and tear, accidental damage, or misuse. Please keep your receipt as proof of purchase.",
      category: "products",
    },
    {
      id: "6",
      title: "How do I create a return label?",
      content: "To create a return label, go to your account dashboard, select the order you want to return, and click 'Request Return'. Follow the instructions to print your free return label. You can also contact our support team for assistance.",
      category: "returns",
    },
  ];
  