import { HeaderLinksProps, NavigationItemProps } from "@/types/layout";

export const HEADER_LINKS :HeaderLinksProps[]=[{
title:"Sing in",
href:"/singin"
},
{title:"Join us",
    href:"/joinus"

},
{
title:"Help",
href:"/help"
}
]
export const NAVIGATION_ITEMS: NavigationItemProps[] = [
    {
      category: "Men",
      links: [
        { title: "New Collection", href: "/products/1" },
        { title: "Shoes", href: "/products/2" },
        { title: "Clothing", href: "/products/3" },
        { title: "Accessories", href: "/products/4" },
      ],
    },
    {
      category: "Women",
      links: [
        { title: "New Collection", href: "/products/1" },
        { title: "Shoes", href: "/products/2" },
        { title: "Clothing", href: "/products/3" },
        { title: "Accessories", href: "/products/4" },
      ],
    },
    {
      category: "Kids",
      links: [
        { title: "New Collection", href: "/products/1" },
        { title: "Shoes", href: "/products/2" },
        { title: "Girl", href: "/products/2" },
        { title: "Boy", href: "/products/3" },
        { title: "Accessory", href: "/products/4" },
      ],
    },
    {
      category: "Sports",
      links: [
        { title: "New Collection", href: "/products/1" },
        { title: "Basketball", href: "/products/2" },
        { title: "Running", href: "/products/3" },
        { title: "Soccer", href: "/products/4" },
        { title: "Golf", href: "/products/4" },
      ],
    },
  ];
  