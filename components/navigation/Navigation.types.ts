import { FC } from 'react';

export type MenuItem = {
  content: string;
  sections: SectionTuple;
};

export type SectionTuple = [Item[], Item[]] | [Item[]];

export type Item = Link | Category | BlogPost;

type SectionItem = {
  content: string;
};

export enum ItemType {
  Link = 'link',
  Category = 'category',
  BlogPost = 'blogPost',
}

export type Link = SectionItem & {
  type: ItemType.Link;
  href: string;
  icon: FC;
};

export type Category = SectionItem & {
  type: ItemType.Category;
};

export type BlogPost = {
  type: ItemType.BlogPost;
  title: string;
  image: string;
  href: string;
};
