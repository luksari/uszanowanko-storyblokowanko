import React from 'react';

import {
  WrapperStyled,
  ContainerStyled,
  ImageWrapperStyled,
  ImageStyled,
  ContentStyled,
  TitleStyled,
  DescriptionStyled,
  ButtonsStyled,
} from 'sbComponents/cta/CTA.styles';
import { CTAProps } from 'sbComponents/cta/CTA.types';
import { isCorrectImageAsset } from 'lib/storyblok/storyblok.typeguards';
import { RichText } from 'components/richText/RichText';
import { getColor } from 'lib/storyblok/storyblok.helpers';
import { SbComponentsMap } from 'lib/storyblok/storyblok.types';
import { AllowedBtnLinkComponent } from 'sbComponents/button/Button.types';
import { ButtonLink } from 'sbComponents/button/ButtonLink';
import { useSbEditableComponent } from 'hooks/useSbEditableComponent/useSbEditableComponent';

const componentsMap: SbComponentsMap<AllowedBtnLinkComponent> = {
  'button-link': ButtonLink,
  button: ButtonLink,
};

export const CTA = ({ blok, ...rest }: CTAProps) => {
  const { getSbEditableComponent } = useSbEditableComponent(componentsMap);

  return (
    <WrapperStyled {...rest} $sectionBackground={blok.section_background}>
      <ContainerStyled $imagePosition={blok.image_position}>
        {isCorrectImageAsset(blok.image) && (
          <ImageWrapperStyled>
            <ImageStyled src={blok.image.filename} alt={blok.image.alt} title={blok.image.title} />
          </ImageWrapperStyled>
        )}
        <ContentStyled>
          <TitleStyled style={{ color: getColor(blok.title_color) }}>
            <RichText content={blok.title_content} />
          </TitleStyled>
          <DescriptionStyled style={{ color: getColor(blok.description_color) }}>
            <RichText content={blok.description_content} />
          </DescriptionStyled>
          {!!blok.buttons?.length && (
            <ButtonsStyled>{blok.buttons.map((button) => getSbEditableComponent(button))}</ButtonsStyled>
          )}
        </ContentStyled>
      </ContainerStyled>
    </WrapperStyled>
  );
};
