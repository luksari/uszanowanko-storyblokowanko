import React, { useMemo } from 'react';

import { isCorrectImageAsset } from 'lib/storyblok/storyblok.typeguards';
import { RichText } from 'components/richText/RichText';
import { isRichTextEmpty } from 'lib/storyblok/storyblok.helpers';

import { ModuleIconElementProps } from './ModuleIconElement.types';
import {
  DescriptionStyled,
  ImageWrapperStyled,
  ImageStyled,
  TitleStyled,
  WrapperStyled,
  ContentWrapperStyled,
  TextWrapperStyled,
} from './ModuleIconElement.styles';

export const ModuleIconElement = ({ blok, ...rest }: ModuleIconElementProps) => {
  const isDescriptionOnly = useMemo(() => {
    return Boolean(!isRichTextEmpty(blok.description_content) && isRichTextEmpty(blok.title_content));
  }, [blok.description_content, blok.title_content]);

  return (
    <WrapperStyled {...rest}>
      <ContentWrapperStyled $isDescriptionOnly={isDescriptionOnly}>
        <TextWrapperStyled>
          {!isRichTextEmpty(blok.title_content) && (
            <TitleStyled>
              <RichText content={blok.title_content} />
            </TitleStyled>
          )}
          {!isRichTextEmpty(blok.description_content) && (
            <DescriptionStyled $isDescriptionOnly={isDescriptionOnly}>
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
