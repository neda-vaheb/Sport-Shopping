import { ReactNode } from "react";

// ==============Accordian================
export interface IAccordionItemType {
    id: string;
    title: string;
    content: string | ReactNode;
    icon?: ReactNode;
  }
  
  export interface IReusableAccordionProps {
    items: IAccordionItemType[];
    type?: "single" | "multiple";
    defaultValue?: string | string[];
    collapsible?: boolean;
    className?: string;
    itemClassName?: string;
    triggerClassName?: string;
    contentClassName?: string;
    showIcon?: boolean;
    iconPosition?: "left" | "right";
    variant?: "default" | "bordered" | "separated" | "minimal";
  }