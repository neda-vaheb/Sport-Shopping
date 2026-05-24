// app/contact-us/page.tsx
"use client"; // برای تعاملی بودن فرم حواستان به این دایرکتیو باشد

import * as z from "zod";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Form } from "@/components/ui/Reusable/Form";
import { InputField } from "@/components/ui/Reusable/InputField";

// ۱. تعریف دقیق Schema با Zod بیرون از کامپوننت برای پرفورمنس بهتر
const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

// استخراج تایپ از روی اسکیمای زود
type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  // هندلر ارسال فرم
  const handleFormSubmit = async (data: ContactFormValues) => {
    // شبیه‌سازی ریکوئست به API
    console.log("Clean and Validated Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Message sent successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl space-y-12">
      <div className="max-w-xl space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          Get in touch
        </h1>
        <p className="text-muted-foreground text-lg">
          We normally respond within 24 business hours. Let us know how we can
          help you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-6">
        {/* ستون اطلاعات تماس */}
        <div className="md:col-span-5 space-y-8">
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-muted rounded-lg text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider">
                  Email Us
                </h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  support@sportshop.com
                </p>
              </div>
            </div>
            {/* بقیه آیتم‌های تماس مثل آدرس و تلفن که قبلا زدیم اینجا می‌مانند... */}
          </div>
        </div>

        {/* ستون فرم تماس هوشمند */}
        <div className="md:col-span-7 p-8 rounded-2xl border bg-card/30">
          <Form
            schema={contactFormSchema}
            onSubmit={handleFormSubmit}
            className="space-y-6">
            {({ formState: { isSubmitting } }) => (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    name="firstName"
                    label="First Name"
                    placeholder="John"
                  />
                  <InputField
                    name="lastName"
                    label="Last Name"
                    placeholder="Doe"
                  />
                </div>

                <InputField
                  name="email"
                  label="Email Address"
                  placeholder="john@example.com"
                  type="email"
                />

                <InputField
                  name="message"
                  label="Message"
                  placeholder="How can our team help you?"
                  isTextArea
                />

                <Button
                  type="submit"
                  className="w-full h-11 text-sm font-medium"
                  disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
}
