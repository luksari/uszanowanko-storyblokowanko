import React from 'react';

import { NotDefinedProps } from 'lib/storyblok/notDefined/NotDefined.types';

import { ContentStyled, WrapperStyled } from './NotDefined.styles';

export const NotDefined = ({ componentName }: NotDefinedProps) => {
  return (
    <WrapperStyled>
      <ContentStyled>
        Component <span>{`"${componentName}"`}</span> hasn&apos;t been defined yet. 😿
      </ContentStyled>
    </WrapperStyled>
  );
};
