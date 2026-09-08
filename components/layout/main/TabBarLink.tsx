import { HEADER_LINKS, UserHEADER_LINKS } from "@/constants/layout";
import Link from "next/link";

type TopBarLinksProps = {
  user: {
    id: string;
  } | null;
};

export const TopBarLinks = ({ user }: TopBarLinksProps) => (
  <div className="flex flex-row-reverse gap-3">
    {user ? (
          UserHEADER_LINKS.map((link, index) => (
        <TopBarLink
          key={link.title}
          title={link.title}
          href={link.href}
          isLast={index === UserHEADER_LINKS.length - 1}
        />
      ))
    ) : (
      HEADER_LINKS.map((link, index) => (
        <TopBarLink
          key={link.title}
          title={link.title}
          href={link.href}
          isLast={index === HEADER_LINKS.length - 1}
        />
      ))
    )}
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
    href={href}
    className={`text-gray-700 ${!isLast ? "border-l border-gray-400/50 pl-2" : ""}`}
  >
    {title}
  </Link>
);