import { Typography } from "@/components/ui/Typography";
import { HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl space-y-12">
      <div className="space-y-4 text-center">
        <div className="inline-flex p-3 bg-muted rounded-full text-primary">
          <HelpCircle className="w-6 h-6" />
        </div>
        <Typography
          variant="h1"
          className="text-4xl font-extrabold tracking-tight text-foreground">
          How can we help you?
        </Typography>
        <p className="text-muted-foreground text-base max-w-md mx-auto">
          Find quick answers to your questions about orders, shipping, and our
          premium sports gear.
        </p>
      </div>

      <div className="space-y-8 pt-6 border-t border-border/60">
        <div className="space-y-2">
          <Typography
            variant="h2"
            className="text-lg font-bold text-foreground">
            When will my order ship?
          </Typography>
          <Typography
            variant="p"
            className="text-sm text-muted-foreground leading-relaxed">
            All orders are processed within 1-2 business days. Once your package
            is with the courier, you will receive a tracking number via email.
            Standard shipping usually takes 3-5 business days.
          </Typography>
        </div>

        <div className="space-y-2">
          <Typography
            variant="h2"
            className="text-lg font-bold text-foreground">
            What is your return policy?
          </Typography>
          <Typography
            variant="p"
            className="text-sm text-muted-foreground leading-relaxed">
            We offer a 30-day hassle-free return policy for all unworn items in
            their original packaging. Please note that custom or personalized
            sports gear cannot be returned unless there is a manufacturing
            defect.
          </Typography>
        </div>

        <div className="space-y-2">
          <Typography
            variant="h2"
            className="text-lg font-bold text-foreground">
            How do I choose the correct size?
          </Typography>
          <Typography
            variant="p"
            className="text-sm text-muted-foreground leading-relaxed">
            Each product page includes a specific size chart. For running shoes
            and trainers, we generally recommend ordering half a size up from
            your regular casual shoe size for optimal performance and comfort.
          </Typography>
        </div>

        <div className="space-y-2">
          <Typography
            variant="h2"
            className="text-lg font-bold text-foreground">
            Can I change or cancel my order?
          </Typography>
          <Typography
            variant="p"
            className="text-sm text-muted-foreground leading-relaxed">
            To ensure fast delivery, we process orders almost immediately.
            Please contact our support team within 30 minutes of placing your
            order, and we will do our best to assist you.
          </Typography>
        </div>
      </div>

      {/* Footer Contact Option */}
      <div className="rounded-xl border bg-muted/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <Typography variant="h3" className="font-semibold text-sm">
            Still have questions?
          </Typography>
          <Typography
            variant="p"
            className="text-xs text-muted-foreground mt-0.5">
            Canot find the answer you are looking for?
          </Typography>
        </div>
        <Link
          href="/contactus"
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          Contact Support <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
