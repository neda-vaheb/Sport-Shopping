"use client";

import React from "react";
import ReusableAccordion from "@/components/ui/Reusable/Accordion";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { HelpCircle, Mail, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

import { IFAQSectionProps } from "@/types/landing";
import { faqData } from "@/constants/landing";

const FAQSection: React.FC<IFAQSectionProps> = ({
  faqs = faqData,
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our products and services",
  showContactInfo = true,
  variant = "separated",
  columns = 1,
  categories,
}) => {
  // فیلتر کردن بر اساس دسته‌بندی
  const filteredFaqs = categories
    ? faqs.filter((faq) => categories.includes(faq.category || ""))
    : faqs;

  // تقسیم سوالات به دو ستون
  const leftColumnFaqs =
    columns === 2
      ? filteredFaqs.filter((_, index) => index % 2 === 0)
      : filteredFaqs;
  const rightColumnFaqs =
    columns === 2 ? filteredFaqs.filter((_, index) => index % 2 === 1) : [];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-linear-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <Typography
            variant="h2"
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {title}
          </Typography>
          {description && (
            <Typography variant="lead" className="text-gray-600">
              {description}
            </Typography>
          )}
        </div>

        {/* FAQ Accordion */}
        <div
          className={cn(
            "max-w-4xl mx-auto",
            columns === 2 && "grid md:grid-cols-2 gap-6 md:gap-8",
          )}>
          {/* ستون اول */}
          <div>
            <ReusableAccordion
              items={leftColumnFaqs}
              type="single"
              collapsible={true}
              variant={variant}
              itemClassName="mb-3"
            />
          </div>

          {/* ستون دوم */}
          {columns === 2 && rightColumnFaqs.length > 0 && (
            <div>
              <ReusableAccordion
                items={rightColumnFaqs}
                type="single"
                collapsible={true}
                variant={variant}
                itemClassName="mb-3"
              />
            </div>
          )}
        </div>

        {/* Contact Information */}
        {/* {showContactInfo && (
          <div className="mt-12 md:mt-16 text-center">
            <div className="inline-flex flex-col items-center p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <HelpCircle className="w-12 h-12 text-blue-500 mb-4" />
              <Typography
                variant="h3"
                className="text-xl md:text-2xl font-bold mb-2">
                Still have questions?
              </Typography>
              <Typography variant="muted" className="mb-6">
                Can find the answer you looking for? Please contact us.
              </Typography>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="outline" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Email Us
                </Button>
                <Button variant="outline" className="gap-2">
                  <Phone className="w-4 h-4" />
                  Call Us
                </Button>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default FAQSection;
