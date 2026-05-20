"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/Shadcn/Navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/Shadcn/Sheet";
import { Button } from "@/components/ui/Shadcn/Button";
import { Menu } from "lucide-react";
import { CgShoppingBag } from "react-icons/cg";
import { BiHeart, BiSearch, BiUser } from "react-icons/bi";
import { HEADER_LINKS, NAVIGATION_ITEMS } from "@/constants/layout";
import { NavigationItemProps, NavLink } from "@/types/layout";

const ICON_SIZE = 20;
const MOBILE_ICON_SIZE = 15;

// Components
const TopBar = () => (
  <div className="hidden md:px-7 md:flex md:h-10 md:justify-between md:items-center md:border-b md:bg-gray-200/25 md:border-gray-400/50">
    <Link href="/" className="font-bold mx-4 text-lg">
      <Image
        src="/header/top-logo.svg"
        alt="Nike logo"
        width={20}
        height={20}
        className="px-3 md:p-0"
      />
    </Link>
    <TopBarLinks />
  </div>
);

const TopBarLinks = () => (
  <div className="flex flex-row-reverse gap-3">
    {HEADER_LINKS.map((link, index) => (
      <TopBarLink
        key={link.title}
        title={link.title}
        href={link.href}
        isLast={index === HEADER_LINKS.length - 1}
      />
    ))}
  </div>
);

const TopBarLink = ({
  title,
  href,
  isLast,
}: {
  title: string;
  href: string;
  isLast: boolean;
}) => (
  <Link
    href={`/shop/${href}`}
    className={`text-gray-700 ${!isLast ? "border-l border-gray-400/50 pl-2" : ""}`}>
    {title}
  </Link>
);

const Logo = () => (
  <div className="px-4 md:p-0">
    <Link href="/" className="font-bold text-lg">
      <Image src="/header/n-logo.svg" alt="Logo" width={60} height={60} />
    </Link>
  </div>
);

const DesktopNavigation = () => (
  <nav className="hidden md:flex">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/">Home</Link>
        </NavigationMenuItem>

        {NAVIGATION_ITEMS.map((item) => (
          <DesktopNavDropdown key={item.category} item={item} />
        ))}
        <NavigationMenuItem className="pr-4">
          <Link href="/newcollection">New Collection</Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="pr-4">
          <Link href="/contactus">Contact Us</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/aboutus">About Us</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </nav>
);

const DesktopNavDropdown = ({ item }: { item: NavigationItemProps }) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>{item.category}</NavigationMenuTrigger>
    <NavigationMenuContent>
      <div className="grid grid-cols-2 gap-2 p-6 w-70 border border-gray-300/30 bg-white">
        {item.links.map((link) => (
          <Link
            key={link.title}
            href={`/shop/${item.categorySlug}/${link.subcategorySlug}`}>
            {link.title}
          </Link>
        ))}
      </div>
    </NavigationMenuContent>
  </NavigationMenuItem>
);

const DesktopIcons = () => (
  <div className="hidden md:flex md:gap-3 items-center">
    <BiSearch size={ICON_SIZE} />
    <BiHeart size={ICON_SIZE} />
    <CgShoppingBag size={ICON_SIZE} />
  </div>
);

const MobileMenu = () => (
  <div className="md:hidden px-3 flex gap-5 items-center">
    <MobileIcons />
    <MobileSheet />
  </div>
);

const MobileIcons = () => (
  <div className="flex gap-2 items-center">
    <BiSearch size={MOBILE_ICON_SIZE} />
    <BiUser size={MOBILE_ICON_SIZE} />
    <BiHeart size={MOBILE_ICON_SIZE} />
    <CgShoppingBag size={MOBILE_ICON_SIZE} />
  </div>
);

const MobileSheet = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon">
        <Menu />
      </Button>
    </SheetTrigger>
    <SheetContent side="right" className="w-75">
      <div className="flex flex-col gap-4 mt-6">
        <MobileNavLink href="/">Home</MobileNavLink>

        {NAVIGATION_ITEMS.map((item) => (
          <MobileDropdown key={item.category} item={item} />
        ))}

        <MobileNavLink href="/">Contact Us</MobileNavLink>
        <MobileNavLink href="/">About Us</MobileNavLink>
        <MobileNavLink href="/">Sign in / Sign up</MobileNavLink>
      </div>
    </SheetContent>
  </Sheet>
);

const MobileDropdown = ({ item }: { item: NavigationItemProps }) => (
  <details className="w-full">
    <summary className="cursor-pointer font-medium py-2 text-foreground capitalize">
      {item.category}
    </summary>
    <div className="ml-4 mt-1 flex flex-col gap-2 border-l pl-3 border-muted">
      <MobileNavLink href={`/shop/${item.categorySlug}`}>
        View All {item.category}
      </MobileNavLink>

      {item.links.map((link) => {
        // ساخت آدرس داینامیک: /shop/men/shoes
        const dynamicHref = `/shop/${item.categorySlug}/${link.subcategorySlug}`;

        return (
          <MobileNavLink key={link.title} href={dynamicHref}>
            {link.title}
          </MobileNavLink>
        );
      })}
    </div>
  </details>
);

const MobileNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} className="cursor-pointer">
    {children}
  </Link>
);

// Main Component
export default function Header() {
  return (
    <header className="container">
      <TopBar />

      <div className="md:px-7 flex items-center justify-between h-16">
        <Logo />
        <DesktopNavigation />
        <DesktopIcons />
        <MobileMenu />
      </div>
    </header>
  );
}
