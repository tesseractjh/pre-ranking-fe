export type NavBarLinkButton = {
  icon?: SVGIcon;
  content: string;
  link: string;
};

export type NavBarLinkGroup = Omit<NavBarLinkButton, 'link'> & {
  children: NavBarLinkButton[];
};

export type NavBarCategory = {
  icon?: SVGIcon;
  content?: string;
  links: (NavBarLinkButton | NavBarLinkGroup)[];
};

export const isGroup = (link: any): link is NavBarLinkGroup => link.children;
export const isButton = (link: any): link is NavBarLinkButton => !link.children;
