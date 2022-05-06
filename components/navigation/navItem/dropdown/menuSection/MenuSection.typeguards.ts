import { BlogPost, Category, Item, ItemType, Link } from 'components/navigation/Navigation.types';

export const isItemMenuLink = (item: Item): item is Link => {
  return (item as Link).type === ItemType.Link;
};

export const isItemCategory = (item: Item): item is Category => {
  return (item as Category).type === ItemType.Category;
};

export const isItemBlogItem = (item: Item): item is BlogPost => {
  return (item as BlogPost).type === ItemType.BlogPost;
};
