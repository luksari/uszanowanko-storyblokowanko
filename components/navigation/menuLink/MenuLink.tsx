import React from 'react';

import { MenuLinkProps } from 'components/navigation/menuLink/MenuLink.types';

import { AnchorStyled, IconStyled, WrapperStyled } from './MenuLink.styles';

export const MenuLink = ({ item }: MenuLinkProps) => {
  const Icon = item.icon;
  return (
    <WrapperStyled>
      <AnchorStyled href={item.href}>
        <IconStyled>
          <Icon />
        </IconStyled>
        {item.content}
      </AnchorStyled>
    </WrapperStyled>
  );
};
