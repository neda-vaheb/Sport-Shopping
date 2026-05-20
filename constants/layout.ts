import { HeaderLinksProps, NavigationItemProps } from "@/types/layout";

export const HEADER_LINKS :HeaderLinksProps[]=[
  {
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
      categorySlug:'men',
      links: [
        // { title: "New Collection", href: "/products/1" },
        { title: "Shoes", subcategorySlug: "shoes" },
        { title: "Clothing", subcategorySlug: "clothing" },
        // { title: "Accessories", subcategorySlug: "/products/4" },
      ],
    },
    {
      category: "Women",
      categorySlug:'women',
      links: [
        // { title: "New Collection", subcategorySlug: "/products/1" },
        { title: "Shoes", subcategorySlug: "shoes" },
        { title: "Clothing", subcategorySlug: "clothing" },
        // { title: "Accessories", subcategorySlug: "/products/4" },
      ],
    },
    {
      category: "Kids",
      categorySlug:'kids',
      links: [
        // { title: "New Collection", subcategorySlug: "/products/1" },
        // { title: "Shoes", subcategorySlug: "/products/2" },
        { title: "Girl", subcategorySlug: "girl" },
        { title: "Boy", subcategorySlug: "boy" },
        // { title: "Accessory", subcategorySlug: "/products/4" },
      ],
    },
    {
      category: "Sports",
      categorySlug:'sports',
      links: [
        { title: "Tennis", subcategorySlug: "tennis" },
        // { title: "Basketball", subcategorySlug: "/products/2" },
        // { title: "Running", subcategorySlug: "/products/3" },
        { title: "Soccer", subcategorySlug: "soccer" },
        // { title: "Golf", subcategorySlug: "/products/4" },
      ],
    },

  ];
  