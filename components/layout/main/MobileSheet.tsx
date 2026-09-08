import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { Button } from "@/components/ui/Button";
import { Menu } from "lucide-react";
import { MobileDropdown, MobileNavLink } from "./Header";
import { NAVIGATION_ITEMS } from "@/constants/layout";
import Link from "next/link";

type MobileSheetProps = {
  user: {
    id: string;
  } | null;
};

export const MobileSheet = ({ user }: MobileSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-75">
        <div className="flex flex-col gap-4 mt-6">

          <MobileNavLink href="/">
            Home
          </MobileNavLink>

          {NAVIGATION_ITEMS.map((item) => (
            <MobileDropdown
              key={item.category}
              item={item}
            />
          ))}

          <MobileNavLink href="/contactus">
            Contact Us
          </MobileNavLink>

          <MobileNavLink href="/aboutus">
            About Us
          </MobileNavLink>

          {user ? (
            <Link href="/dashboard">
              Account
            </Link>
          ) : (
            <Link href="/login">
              Sign in
            </Link>
          )}

        </div>
      </SheetContent>
    </Sheet>
  );
};