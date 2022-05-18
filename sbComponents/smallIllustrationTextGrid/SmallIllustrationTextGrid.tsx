import React from 'react';

import { useSbEditableComponent } from 'hooks/useSbEditableComponent/useSbEditableComponent';
import { SbComponentsMap } from 'lib/storyblok/storyblok.types';

import {
  AllowedComponent,
  SmallIllustrationTextElementOwnProps,
} from './smallIllustrationTextElement/SmallIllustrationTextElement.types';
import { SmallIllustrationTextElement } from './smallIllustrationTextElement/SmallIllustrationTextElement';
import { ImagePosition, SmallIllustrationTextGridProps } from './SmallIllustrationTextGrid.types';
import { ContainerStyled, ListStyled, WrapperStyled } from './SmallIllustrationTextGrid.styles';

const componentsMap: SbComponentsMap<AllowedComponent> = {
  'small-illustration-text-element': SmallIllustrationTextElement,
};

export const SmallIllustrationTextGrid = ({ blok, ...rest }: SmallIllustrationTextGridProps) => {
  const { getSbEditableComponent } = useSbEditableComponent(componentsMap);

  return (
    <WrapperStyled {...rest} id={blok.section_id}>
      <ContainerStyled>
        <ListStyled $columns={blok.columns} $areItemsCentered={blok.image_position === ImagePosition.AboveTheText}>
          {blok.elements.map((elem) =>
            getSbEditableComponent<SmallIllustrationTextElementOwnProps>(elem, {
              imagePosition: blok.image_position,
            }),
          )}
        </ListStyled>
      </ContainerStyled>
    </WrapperStyled>
  );
};
