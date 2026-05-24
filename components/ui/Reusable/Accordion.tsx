"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Typography } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import { IReusableAccordionProps } from "@/types";

const ReusableAccordion: React.FC<IReusableAccordionProps> = ({
  items,
  type = "single",
  defaultValue,
  collapsible = true,
  className,
  itemClassName,
  triggerClassName,
  contentClassName,
  showIcon = true,
  iconPosition = "right",
  variant = "default",
}) => {
  const defaultValues =
    defaultValue || (type === "single" ? items[0]?.id : undefined);
  const accordionProps =
    type === "single"
      ? {
          type: "single" as const,
          defaultValue: defaultValues as string,
          collapsible,
        }
      : { type: "multiple" as const, defaultValue: defaultValues as string[] };

  const variantStyles = {
    default: "border-none shadow-none",
    bordered: "border border-gray-200 rounded-lg shadow-sm",
    separated: "space-y-4",
    minimal: "border-b border-gray-100",
  };

  const itemVariantStyles = {
    default: "border-b border-gray-200 last:border-0",
    bordered: "border-0",
    separated:
      "border border-gray-200 rounded-lg bg-white mb-4 last:mb-0 overflow-hidden",
    minimal: "border-0",
  };

  const triggerVariantStyles = {
    default: "hover:bg-gray-50 px-4 py-4",
    bordered: "hover:bg-gray-50 px-6 py-4",
    separated: "hover:bg-gray-50 px-6 py-4",
    minimal: "hover:bg-transparent px-0 py-3",
  };

  return (
    <div className={cn("w-full", variantStyles[variant], className)}>
      <Accordion {...accordionProps} className="w-full">
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className={cn(
              "transition-all duration-200",
              itemVariantStyles[variant],
              itemClassName,
            )}>
            <AccordionTrigger
              className={cn(
                "group hover:no-underline",
                triggerVariantStyles[variant],
                iconPosition === "left" && "flex-row-reverse justify-between",
                triggerClassName,
              )}>
              {/* در اینجا دیگر div اضافی نمی‌پیچیم */}
              {item.icon && (
                <span
                  className={cn(
                    "shrink-0 text-gray-500 group-hover:text-gray-700 transition-colors",
                    iconPosition === "left" ? "order-1" : "order-0",
                  )}>
                  {item.icon}
                </span>
              )}
              <Typography
                variant="h4"
                className={cn(
                  "text-base md:text-lg font-semibold",
                  "text-gray-900 group-hover:text-gray-700 transition-colors",
                  iconPosition === "left" && item.icon && "order-0",
                  iconPosition === "right" && item.icon && "order-1",
                )}>
                {item.title}
              </Typography>
            </AccordionTrigger>
            <AccordionContent
              className={cn(
                "text-gray-600 leading-relaxed",
                variant === "minimal" ? "px-0 pb-4" : "px-4 pb-4",
                contentClassName,
              )}>
              {typeof item.content === "string" ? (
                <Typography variant="p" className="text-sm md:text-base">
                  {item.content}
                </Typography>
              ) : (
                item.content
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ReusableAccordion;
