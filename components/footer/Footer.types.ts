export type FooterSectionItem = { name: string; href: string; newTab?: boolean };

export type FooterSection = {
  category: string;
  items: FooterSectionItem[];
};
