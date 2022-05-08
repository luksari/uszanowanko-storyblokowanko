import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

import { useMediaQuery } from 'hooks/useMediaQuery/useMediaQuery';
import { isCorrectImageAsset } from 'lib/storyblok/storyblok.typeguards';
import { RichText } from 'components/richText/RichText';
import { SbComponentsMap } from 'lib/storyblok/storyblok.types';
import { AllowedBtnLinkComponent } from 'sbComponents/button/Button.types';
import { ButtonLink } from 'sbComponents/button/ButtonLink';
import { useSbEditableComponent } from 'hooks/useSbEditableComponent/useSbEditableComponent';

import { HeaderAnimationProps } from './HeaderAnimation.types';
import {
  WrapperStyled,
  TitleStyled,
  DescriptionStyled,
  ContentWrapperStyled,
  ContainerStyled,
  StaticImageStyled,
  ButtonsStyled,
} from './HeaderAnimation.styles';

const componentsMap: SbComponentsMap<AllowedBtnLinkComponent> = {
  'button-link': ButtonLink,
  button: ButtonLink,
};

export const HeaderAnimation = ({ blok, ...rest }: HeaderAnimationProps) => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery({ minWidth: breakpoints.values.min.md }, false);
  const { getSbEditableComponent } = useSbEditableComponent(componentsMap);
  const [isImageHidden, setIsImageHidden] = useState(true);

  useEffect(() => {
    setIsImageHidden(isDesktop);
  }, [isDesktop]);

  return (
    <WrapperStyled {...rest} $withBg={!isDesktop} data-testid={'header-animation'}>
      <ContainerStyled>
        <ContentWrapperStyled>
          {!isDesktop && isCorrectImageAsset(blok.animation_svg) && (
            <StaticImageStyled
              data-testid={'header-animation-img'}
              title={blok.animation_svg.title}
              src={blok.animation_svg.filename}
              alt={blok.animation_svg.alt}
              $isImageHidden={isImageHidden}
            />
          )}
          <TitleStyled data-testid={'header-animation-title'}>
            <RichText content={blok.title_content} />
          </TitleStyled>

          <DescriptionStyled data-testid={'header-animation-description'}>
            <RichText content={blok.description} />
          </DescriptionStyled>
          {!!blok.buttons?.length && (
            <ButtonsStyled>{blok.buttons.map((button) => getSbEditableComponent(button))}</ButtonsStyled>
          )}
        </ContentWrapperStyled>
      </ContainerStyled>
    </WrapperStyled>
  );
};
