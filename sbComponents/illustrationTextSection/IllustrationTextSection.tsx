import React from 'react';

import { RichText } from 'components/richText/RichText';
import { isRichTextEmpty } from 'lib/storyblok/storyblok.helpers';
import { isCorrectImageAsset } from 'lib/storyblok/storyblok.typeguards';
import { SbImage } from '@/components/sbImage/SbImage';

import {
  ContainerStyled,
  WrapperStyled,
  TextWrapperStyled,
  TitleStyled,
  DescriptionStyled,
  ImageWrapperStyled,
} from './IllustrationTextSection.styles';
import { IllustrationTextSectionProps } from './IllustrationTextSection.types';

export const IllustrationTextSection = ({ blok, ...rest }: IllustrationTextSectionProps) => {
  return (
    <WrapperStyled {...rest} id={blok.section_id}>
      <ContainerStyled $imgPosition={blok.image_position}>
        <TextWrapperStyled>
          {!isRichTextEmpty(blok.title_content) && (
            <TitleStyled>
              <RichText content={blok.title_content} />
            </TitleStyled>
          )}
          <DescriptionStyled>
            <RichText content={blok.description_content} />
          </DescriptionStyled>
        </TextWrapperStyled>
        {isCorrectImageAsset(blok.image) && (
          <ImageWrapperStyled>
            <SbImage src={blok.image.filename} alt={blok.image.alt} />
          </ImageWrapperStyled>
        )}
      </ContainerStyled>
    </WrapperStyled>
  );
};
