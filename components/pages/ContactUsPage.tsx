"use client";
import * as z from "zod";
import { Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Form } from "@/components/ui/Reusable/Form";
import { InputField } from "@/components/ui/Reusable/InputField";
import { contactFormSchema } from "@/lib/schema";
import { Typography } from "@/components/ui/Typography";

type ContactFormValues = z.infer<typeof contactFormSchema>;

function ContactUsPage() {
    const handleFormSubmit = async (data: ContactFormValues) => {
        console.log("Clean and Validated Data:", data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert("Message sent successfully!");
      };
    
      return (
        <div className="container mx-auto px-4 py-16 max-w-5xl space-y-12">
          <div className="max-w-xl space-y-4">
            <Typography
              variant="h1"
              className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Get in touch
            </Typography>
            <Typography variant="p" className="text-muted-foreground text-lg">
              We normally respond within 24 business hours. Let us know how we can
              help you.
            </Typography>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-6">
            <div className="md:col-span-5 space-y-8">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-muted rounded-lg text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <Typography
                      variant="h3"
                      className="font-semibold text-sm uppercase tracking-wider">
                      Email Us
                    </Typography>
                    <Typography
                      variant="p"
                      className="text-muted-foreground mt-1 text-sm">
                      support@sportshop.com
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
    
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

export default ContactUsPage
