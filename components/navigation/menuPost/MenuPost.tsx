import React from 'react';

import { MenuPostProps } from 'components/navigation/menuPost/MenuPost.types';
import {
  WrapperStyled,
  ThumbnailWrapperStyled,
  ThumbnailStyled,
  TitleStyled,
  LinkStyled,
} from 'components/navigation/menuPost/MenuPost.styles';

export const MenuPost = ({ item }: MenuPostProps) => {
  return (
    <WrapperStyled>
      <LinkStyled href={item.href}>
        <ThumbnailWrapperStyled>
          <ThumbnailStyled src={item.image} alt={item.title} />
        </ThumbnailWrapperStyled>
        <TitleStyled>{item.title}</TitleStyled>
      </LinkStyled>
    </WrapperStyled>
  );
};
