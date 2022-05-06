import React from 'react';

import { isCorrectImageAsset } from 'lib/storyblok/storyblok.typeguards';
import { RichText } from 'components/richText/RichText';
import { isRichTextEmpty } from 'lib/storyblok/storyblok.helpers';

import { SmallIllustrationTextElementProps } from './SmallIllustrationTextElement.types';
import {
  DescriptionStyled,
  ImageWrapperStyled,
  ImageStyled,
  TitleStyled,
  WrapperStyled,
  ContentWrapperStyled,
  TextWrapperStyled,
} from './SmallIllustrationTextElement.styles';

export const SmallIllustrationTextElement = ({ blok, imagePosition, ...rest }: SmallIllustrationTextElementProps) => {
  return (
    <WrapperStyled {...rest} $imagePosition={imagePosition}>
      <ContentWrapperStyled>
        <TextWrapperStyled>
          {!isRichTextEmpty(blok.title_content) && (
            <TitleStyled $baseColor={blok.title_color}>
              <RichText content={blok.title_content} />
            </TitleStyled>
          )}
          {!isRichTextEmpty(blok.description_content) && (
            <DescriptionStyled $baseColor={blok.description_color}>
              <RichText content={blok.description_content} />
            </DescriptionStyled>
          )}
        </TextWrapperStyled>
        {isCorrectImageAsset(blok.image) && (
          <ImageWrapperStyled>
            <ImageStyled alt={blok.image.alt} src={blok.image.filename} />
          </ImageWrapperStyled>
        )}
      </ContentWrapperStyled>
    </WrapperStyled>
  );
};
