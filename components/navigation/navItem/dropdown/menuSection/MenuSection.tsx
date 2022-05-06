import React from 'react';

import { MenuSectionProps } from 'components/navigation/navItem/dropdown/menuSection/MenuSection.types';
import { Item } from 'components/navigation/Navigation.types';
import {
  isItemBlogItem,
  isItemCategory,
  isItemMenuLink,
} from 'components/navigation/navItem/dropdown/menuSection/MenuSection.typeguards';
import { MenuLink } from 'components/navigation/menuLink/MenuLink';
import { MenuPost } from 'components/navigation/menuPost/MenuPost';
import { WrapperStyled, CategoryStyled } from 'components/navigation/navItem/dropdown/menuSection/MenuSection.styles';

const renderItem = (item: Item) => {
  if (isItemMenuLink(item)) {
    return <MenuLink item={item} key={item.content} />;
  }
  if (isItemCategory(item)) {
    return <CategoryStyled key={item.content}>{item.content}</CategoryStyled>;
  }
  if (isItemBlogItem(item)) {
    return <MenuPost item={item} key={item.title} />;
  }
};
export const MenuSection = ({ items }: MenuSectionProps) => <WrapperStyled>{items.map(renderItem)}</WrapperStyled>;
