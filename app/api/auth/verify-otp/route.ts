import { NextResponse } from "next/server";

import { createToken } from "@/lib/auth/session";
import { VerifyMockOtp } from "@/lib/auth/mock-auth";

export async function POST(request: Request) {
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

  const isValid = VerifyMockOtp(phone, otp);

  if (!isValid) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid or expired OTP",
      },
      { status: 401 }
    );
  }

  // TODO: پیدا کردن یا ساختن user در Prisma
  const userId = "user-id";

  const token = await createToken(userId);

  const response = NextResponse.json({
    success: true,
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
}