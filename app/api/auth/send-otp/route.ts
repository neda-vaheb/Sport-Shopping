import { NextResponse } from "next/server";

const otpStore = new Map<string, { otp: string; expiresAt: number }>();
const OTP_EXPIRATION_MS = 5 * 60 * 1000;

export async function POST(request: Request) {
  try {
    const { phone } = await request.json();

    if (!phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number is required",
        },
        { status: 400 }
      );
    }

    // فعلاً برای تست
    const otp = Math.floor(
      1000 + Math.random() * 9000
    ).toString();

    otpStore.set(phone, {
      otp,
      expiresAt: Date.now() + OTP_EXPIRATION_MS,
    });

    console.log(`OTP for ${phone}: ${otp}`);

    return NextResponse.json({
      success: true,
      message: "OTP sent successfully",
      // فقط برای development
      otp,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
