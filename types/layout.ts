// ====Header====
export type HeaderLinksProps = {
title:string;
href:string;

}
export type NavLink=  {
    title: string;
    subcategorySlug: string;
  }
export type NavigationItemProps= {
    category: string;
    categorySlug:string,
    links: NavLink[];
  }

