
import { IAccordionItemType } from '.';

export type SlideProps = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    buttonText: string;
    buttonLink: string;
  };
  export type CategoryLandingProps={
    title: string,
    buttonText: string,
    image: string,
    alt: string,
  }
  export type TAllCategoriesProps = {
    id:number;
    url:string;
    title:string;
    alt:string;
  }
  export type TBrandProps = {
    id:number;
      name: string;
      logo: string;
      href: string;
      alt?: string;
  }
  export type TBrandsScrollProps ={
    brands?: TBrandProps[];
    title?: string;
    description?: string;
    autoScrollSpeed?: number; // سرعت اسکرول خودکار (میلی‌ثانیه)
    autoPlay?:boolean;
  }


  export interface FAQItem extends IAccordionItemType {
    category?: string;
  }

  export interface IFAQSectionProps {
    faqs?: FAQItem[];
    title?: string;
    description?: string;
    showContactInfo?: boolean;
    variant?: "default" | "bordered" | "separated" | "minimal";
    columns?: 1 | 2;
    categories?: string[];
  }
  