// app/auth/page.tsx
"use client";

import React, { useState } from "react";
import * as z from "zod";
import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { Loader2, Phone } from "lucide-react";
import { Form } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/Form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Typography } from "@/components/ui/Typography";

const phoneSchema = z.object({
  phoneNumber: z
    .string()
    .regex(
      /^09\d{9}$/,
      "Please enter a valid Iranian phone number (e.g. 09123456789)",
    ),
});

const otpSchema = z.object({
  otpCode: z.string().length(4, "Verification code must be 4 digits."),
});

type PhoneValue = z.infer<typeof phoneSchema>;
type OtpValue = z.infer<typeof otpSchema>;

export default function AuthPage() {
  const [step, setStep] = useState<"PHONE" | "OTP">("PHONE");
  const [savedPhone, setSavedPhone] = useState("");

  const phoneForm = useForm<PhoneValue>({
    resolver: zodResolver(
      phoneSchema as unknown as Parameters<typeof zodResolver>[0],
    ) as unknown as Resolver<PhoneValue>,
    defaultValues: { phoneNumber: "" },
  });

  const otpForm = useForm<OtpValue>({
    resolver: zodResolver(
      otpSchema as unknown as Parameters<typeof zodResolver>[0],
    ) as unknown as Resolver<OtpValue>,
    defaultValues: { otpCode: "" },
  });

  const handlePhoneSubmit = async (data: PhoneValue) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSavedPhone(data.phoneNumber);
    setStep("OTP");
    toast.success("Verification Code Sent! Your code is: 5824", {
      duration: 6000,
    });
  };

  const handleOtpSubmit = async (data: OtpValue) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    if (data.otpCode === "5824") {
      toast.success("Welcome Back! Logging you in...");
    } else {
      toast.error("Invalid Code. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-24 max-w-md space-y-8">
      <div className="text-center space-y-2">
        <Typography
          variant="h1"
          className="text-3xl font-extrabold tracking-tight">
          {step === "PHONE" ? "Welcome Athlete" : "Verify Your Identity"}
        </Typography>
        <Typography variant="p" className="text-sm text-muted-foreground">
          {step === "PHONE"
            ? "Enter your phone number to sign in or create an account."
            : `We sent a 4-digit code to ${savedPhone}`}
        </Typography>
      </div>

      <div className="p-6 rounded-2xl border bg-card/40 shadow-sm">
        {step === "PHONE" ? (
          <Form {...phoneForm}>
            <form
              onSubmit={phoneForm.handleSubmit(handlePhoneSubmit)}
              className="space-y-4">
              <FormField
                control={phoneForm.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input
                          placeholder="09123456789"
                          type="tel"
                          className="pl-10 h-11"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full h-11 mt-2"
                disabled={phoneForm.formState.isSubmitting}>
                {phoneForm.formState.isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Send Code"
                )}
              </Button>
            </form>
          </Form>
        ) : (
          <Form {...otpForm}>
            <form
              onSubmit={otpForm.handleSubmit(handleOtpSubmit)}
              className="space-y-6">
              <FormField
                control={otpForm.control}
                name="otpCode"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center justify-center space-y-4">
                    <FormLabel className="self-start">
                      Verification Code
                    </FormLabel>
                    <FormControl>
                      <InputOTP maxLength={4} {...field}>
                        <InputOTPGroup className="gap-2">
                          <InputOTPSlot
                            index={0}
                            className="w-12 h-12 text-lg rounded-md border"
                          />
                          <InputOTPSlot
                            index={1}
                            className="w-12 h-12 text-lg rounded-md border"
                          />
                          <InputOTPSlot
                            index={2}
                            className="w-12 h-12 text-lg rounded-md border"
                          />
                          <InputOTPSlot
                            index={3}
                            className="w-12 h-12 text-lg rounded-md border"
                          />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-2">
                <Button
                  type="submit"
                  className="w-full h-11"
                  disabled={otpForm.formState.isSubmitting}>
                  {otpForm.formState.isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Verify & Login"
                  )}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full text-xs text-muted-foreground"
                  onClick={() => {
                    setStep("PHONE");
                    otpForm.reset();
                  }}>
                  Change Phone Number
                </Button>
              </div>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}
