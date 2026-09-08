

import { cookies } from "next/headers";
import { verifyToken } from "./session";

export async function getCurrentUser() {
  const cookieStore = await cookies();

  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return null;
  }

  const payload = await verifyToken(token);

  if (!payload?.userId) {
    return null;
  }

  // اینجا در پروژه واقعی user را از database می‌گیری
  return {
    id: payload.userId,
  };
}