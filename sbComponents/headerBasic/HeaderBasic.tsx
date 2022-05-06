import React from 'react';

import { HeaderBasicProps } from 'sbComponents/headerBasic/HeaderBasic.types';
import { isCorrectImageAsset } from 'lib/storyblok/storyblok.typeguards';
import { RichText } from 'components/richText/RichText';
import { isRichTextEmpty } from 'lib/storyblok/storyblok.helpers';
import { SbComponentsMap } from 'lib/storyblok/storyblok.types';
import { useSbEditableComponent } from 'hooks/useSbEditableComponent/useSbEditableComponent';
import { AllowedBtnLinkComponent } from 'sbComponents/button/Button.types';
import { ButtonLink } from 'sbComponents/button/ButtonLink';

import {
  WrapperStyled,
  ContainerStyled,
  ImageWrapperStyled,
  ImageStyled,
  TitleStyled,
  ContentStyled,
  ContentWrapper,
  BottomMaskStyled,
  ButtonsStyled,
} from './HeaderBasic.styles';

const componentsMap: SbComponentsMap<AllowedBtnLinkComponent> = {
  'button-link': ButtonLink,
  button: ButtonLink,
};

export const HeaderBasic = ({ blok, ...rest }: HeaderBasicProps) => {
  const { title_content, description_content, image, buttons } = blok;
  const { getSbEditableComponent } = useSbEditableComponent(componentsMap);

  const isWithImage = isCorrectImageAsset(image);

  return (
    <WrapperStyled {...rest}>
      <ContainerStyled $isWithImage={isWithImage}>
        {isWithImage && (
          <ImageWrapperStyled data-testid={'header-basic-image'}>
            <ImageStyled src={image.filename} alt={image.alt} title={image.title} />
          </ImageWrapperStyled>
        )}
        <ContentWrapper $isWithImage={isWithImage}>
          {!isRichTextEmpty(title_content) && (
            <TitleStyled $isWithImage={isWithImage}>
              <RichText content={title_content} />
            </TitleStyled>
          )}
          {!isRichTextEmpty(description_content) && (
            <ContentStyled $isWithImage={isWithImage}>
              <RichText content={description_content} />
            </ContentStyled>
          )}
          {!!buttons?.length && (
            <ButtonsStyled>{buttons.map((button) => getSbEditableComponent(button))}</ButtonsStyled>
          )}
        </ContentWrapper>
      </ContainerStyled>
      <BottomMaskStyled />
    </WrapperStyled>
  );
};
