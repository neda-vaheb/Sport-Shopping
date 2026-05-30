"use client";

import * as z from "zod";
import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Typography } from "@/components/ui/Typography";
import Loader from "@/components/ui/Reusable/Loader";

const joinFormSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

type JoinFormValues = z.infer<typeof joinFormSchema>;
export default function JoinUsPage() {
  const form = useForm<JoinFormValues>({
    resolver: zodResolver(
      joinFormSchema as unknown as Parameters<typeof zodResolver>[0],
    ) as unknown as Resolver<JoinFormValues>,
    defaultValues: {
      email: "",
    },
  });

  const { isSubmitting } = form.formState;

  const handleJoinSubmit = async (data: JoinFormValues) => {
    console.log("Submitting email via shadcn form:", data.email);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("Welcome to the club!");
    form.reset();
  };

  return (
    <div className="container mx-auto px-4 py-24 max-w-md space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex p-3 bg-primary/10 rounded-full text-primary mb-2">
          <Sparkles className="w-5 h-5" />
        </div>
        <Typography
          variant="h1"
          className="text-3xl font-extrabold tracking-tight">
          Join the Club
        </Typography>
        <Typography variant="p" className="text-sm text-muted-foreground">
          Sign up for early access to new drops and athlete rewards.
        </Typography>
      </div>

      <div className="p-6 rounded-2xl border bg-card/40 shadow-sm">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleJoinSubmit)}
            className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="athlete@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    We will never share your email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-11"
              disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader /> Joining...
                </>
              ) : (
                "Subscribe Now"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
