import { getCurrentUser } from "@/lib/auth/get-user";
import Header from "./Header";

export default async function HeaderWrapper() {
  const user = await getCurrentUser();

  const headerUser = user ? { ...user, id: String(user.id) } : null;

  return <Header user={headerUser} />;
}