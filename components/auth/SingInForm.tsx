import { SendMockOTp, VerifyMockOtp } from "@/lib/auth/mock-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Card, CardContent } from "../ui/Card";
import { PhoneInput } from "./Phone-input";
import { Button } from "../ui/Button";
import { ArrowLeft, Loader2, RefreshCw } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

type Step = "phone" | "otp";
const RESEND_SECOND = 60;
export const SingInForm = () => {
  const router = useRouter();
  const [step, setStep] = useState<Step>("phone");
  const [countryCode, setCountryCode] = useState("+98");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isVerify, setISVerify] = useState(false);
  const [remindingSecond, setRemindingSecond] = useState(RESEND_SECOND);

  useEffect(() => {
    if (step !== "otp" || remindingSecond <= 0) {
      return;
    }
    const timer = setInterval(() => {
      setRemindingSecond((current) => current - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [step, remindingSecond]);

  const validatePhone = () => {
    if (!phone) {
      setPhoneError("Please enter your mobile number.");
      return false;
    }

    if (phone.length < 8 || phone.length > 15) {
      setPhoneError("Please enter a valid mobile number.");
      return false;
    }

    setPhoneError("");
    return true;
  };
  const handelSendOtp = async () => {
    if (!validatePhone()) {
      return;
    }
    setIsSending(true);
    try {
      const fullPhone = `${countryCode}${phone}`;
      const response = await VerifyMockOtp(fullPhone, otp);
      if (!response.success) {
        toast.error(response.message);
        return;
      }
      setStep("otp");
      setOtp("");
      setRemindingSecond(RESEND_SECOND);
      toast.success("Verification code sent");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsSending(false);
    }
  };
  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      toast.error("Invalid verification code"); //why can't use description

      return;
    }

    setISVerify(true);

    try {
      const fullPhone = `${countryCode}${phone}`;

      const response = await VerifyMockOtp(fullPhone, otp);

      if (!response.success) {
        toast.error("Verification failed");

        setOtp("");
        return;
      }

      toast.success("Welcome back!");

      /**
       * In a real application:
       * - Store authentication/session
       * - Refresh user state
       * - Redirect
       */
      router.push("/account");
    } catch {
      toast.error("Verification failed");
    } finally {
      setISVerify(false);
    }
  };

  /**
   * Resend OTP
   */
  async function handleResend() {
    if (remindingSecond > 0 || isSending) {
      return;
    }

    setIsSending(true);

    try {
      const fullPhone = `${countryCode}${phone}`;

      const response = await SendMockOTp(fullPhone);

      if (!response.success) {
        toast.error(response.message);
        return;
      }

      setRemindingSecond(RESEND_SECOND);
      setOtp("");

      toast.success("New code sent");

      //   if (process.env.NODE_ENV === "development" && response.otp) {
      //     toast.info("Development OTP";
      //   }
    } catch {
      toast.error("Could not resend code");
    } finally {
      setIsSending(false);
    }
  }

  /**
   * Change phone number
   */
  function handleChangePhone() {
    setStep("phone");
    setOtp("");
    setPhoneError("");
  }

  return (
    <div className="w-full max-w-md">
      <Card className="overflow-hidden border-border/60 shadow-xl">
        <CardContent className="p-6 sm:p-8">
          {/* Logo */}
          <div className="mb-8 flex items-center justify-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground text-background">
              <span className="text-lg font-bold">S</span>
            </div>
          </div>

          {/* PHONE STEP */}
          {step === "phone" && (
            <div className="animate-in fade-in slide-in-from-right-2 duration-300">
              <div className="mb-8 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Welcome back
                </h1>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Sign in with your mobile number to continue.
                </p>
              </div>

              <div className="space-y-5">
                <PhoneInput
                  countryCode={countryCode}
                  phone={phone}
                  onCountryCodeChange={setCountryCode}
                  onphoneChange={setPhone}
                  error={phoneError}
                />

                <Button
                  type="button"
                  className="h-11 w-full"
                  onClick={handelSendOtp}
                  disabled={isSending}>
                  {isSending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending code...
                    </>
                  ) : (
                    "Continue"
                  )}
                </Button>
              </div>
            </div>
          )}

          {/* OTP STEP */}
          {step === "otp" && (
            <div className="animate-in fade-in slide-in-from-right-2 duration-300">
              <button
                type="button"
                onClick={handleChangePhone}
                className="mb-6 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                Change number
              </button>

              <div className="mb-8 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Verify your number
                </h1>

                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                  Enter the 6-digit code we sent to
                </p>

                <p className="mt-1 font-medium">
                  {countryCode} {phone}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={setOtp}
                    onComplete={handleVerifyOtp}
                    disabled={isVerify}
                    autoFocus>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>

                <Button
                  type="button"
                  className="h-11 w-full"
                  onClick={handleVerifyOtp}
                  disabled={isVerify || otp.length !== 6}>
                  {isVerify ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    "Verify & Continue"
                  )}
                </Button>

                <div className="text-center">
                  {remindingSecond > 0 ? (
                    <p className="text-sm text-muted-foreground">
                      Resend code in{" "}
                      <span className="font-medium text-foreground">
                        {remindingSecond}s
                      </span>
                    </p>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResend}
                      disabled={isSending}
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary disabled:opacity-50">
                      <RefreshCw className="h-4 w-4" />
                      Resend code
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <p className="mt-5 text-center text-xs leading-5 text-muted-foreground">
        By continuing, you agree to our terms and privacy policy.
      </p>
    </div>
  );
};
