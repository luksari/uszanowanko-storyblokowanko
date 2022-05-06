import React from 'react';

import { useSbEditableComponent } from 'hooks/useSbEditableComponent/useSbEditableComponent';
import { SbComponentsMap } from 'lib/storyblok/storyblok.types';

import { AllowedComponent } from './moduleIconElement/ModuleIconElement.types';
import { ModuleIconElement } from './moduleIconElement/ModuleIconElement';
import { ModuleIconGridProps } from './ModuleIconGrid.types';
import { ContainerStyled, ListStyled, WrapperStyled } from './ModuleIconGrid.styles';

const componentsMap: SbComponentsMap<AllowedComponent> = {
  'module-icon-element': ModuleIconElement,
};

export const ModuleIconGrid = ({ blok, ...rest }: ModuleIconGridProps) => {
  const { getSbEditableComponent } = useSbEditableComponent(componentsMap);

  return (
    <WrapperStyled {...rest} id={blok.section_id} style={{ background: blok.section_background }}>
      <ContainerStyled $sidePadding={Number(blok.side_padding)}>
        <ListStyled $columns={blok.columns}>{blok.elements.map((elem) => getSbEditableComponent(elem))}</ListStyled>
      </ContainerStyled>
    </WrapperStyled>
  );
};
