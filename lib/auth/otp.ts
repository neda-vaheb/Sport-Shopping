import { NextResponse } from "next/server";
import { createToken } from "@/lib/auth/session";

export async function POST(request: Request) {
  try {
    const { phone, otp } = await request.json();

    if (!phone || !otp) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone and OTP are required",
        },
        { status: 400 }
      );
    }

    // فعلاً برای تست
    const isValid = otp === "1234";

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid OTP",
        },
        { status: 401 }
      );
    }

    // TODO:
    // user را از database پیدا کن
    const userId = "user-id";

    const token = await createToken(userId);

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
    });

    response.cookies.set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Verification failed",
      },
      { status: 500 }
    );
  }
}