import React from 'react';

import { getColor } from 'lib/storyblok/storyblok.helpers';
import { SbComponentsMap } from 'lib/storyblok/storyblok.types';
import { useSbEditableComponent } from 'hooks/useSbEditableComponent/useSbEditableComponent';
import { AllowedBtnLinkComponent } from 'sbComponents/button/Button.types';
import { ButtonLink } from 'sbComponents/button/ButtonLink';

import { WrapperStyled, ContainerStyled, ButtonsStyled } from './ModuleButton.styles';
import { ModuleButtonProps } from './ModuleButton.types';

const componentsMap: SbComponentsMap<AllowedBtnLinkComponent> = {
  'button-link': ButtonLink,
  button: ButtonLink,
};

export const ModuleButton = ({ blok, ...rest }: ModuleButtonProps) => {
  const { getSbEditableComponent } = useSbEditableComponent(componentsMap);

  return (
    <WrapperStyled {...rest} style={{ background: getColor(blok.section_background) }} id={blok.section_id}>
      <ContainerStyled>
        {!!blok.buttons?.length && (
          <ButtonsStyled>{blok.buttons.map((button) => getSbEditableComponent(button))}</ButtonsStyled>
        )}
      </ContainerStyled>
    </WrapperStyled>
  );
};
