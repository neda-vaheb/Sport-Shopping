"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/Navigation-menu";

import { CgShoppingBag } from "react-icons/cg";
import { BiHeart, BiSearch, BiUser } from "react-icons/bi";
import { NAVIGATION_ITEMS } from "@/constants/layout";
import { NavigationItemProps } from "@/types/layout";

import { MobileSheet } from "./MobileSheet";
import { TopBarLinks } from "./TabBarLink";

const ICON_SIZE = 20;
const MOBILE_ICON_SIZE = 15;

// Components
const TopBar = ({ user }: { user: { id: string } | null }) => (
  <div className="hidden md:w-full md:px-7 md:flex md:h-10 md:justify-between md:items-center md:border-b md:bg-gray-200/25 md:border-gray-400/50">
    <Link href="/" className="font-bold mx-4 text-lg">
      <Image
        src="/header/top-logo.svg"
        alt="Nike logo"
        width={20}
        height={20}
        className="px-3 md:p-0"
      />
    </Link>
    <TopBarLinks user={user} />
  </div>
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
        {/* <NavigationMenuItem className="pr-4">
          <Link href="/newcollections">New Collection</Link>
        </NavigationMenuItem> */}
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
    <NavigationMenuTrigger>
      <Link href={`/shop/${item.categorySlug}/`}>{item.category}</Link>
    </NavigationMenuTrigger>
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

const MobileMenu = ({
  user,
}: {
  user: {
    id: string;
  } | null;
}) => (
  <div className="md:hidden px-3 flex gap-5 items-center">
    <MobileIcons />
    <MobileSheet user={user}/>
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

export const MobileDropdown = ({ item }: { item: NavigationItemProps }) => (
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

export const MobileNavLink = ({
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

type HeaderProps = {
  user: {
    id: string;
  } | null;
};

// Main Component
export default function Header({ user }: HeaderProps) {
  return (
    <header className="container">
      <TopBar user={user}/>

      <div className="md:px-7 flex items-center justify-between h-16 border-b border-gray-400/50">
        <Logo />
        <DesktopNavigation />
        <DesktopIcons />
        <MobileMenu user={user}/>
      </div>
    </header>
  );
}
