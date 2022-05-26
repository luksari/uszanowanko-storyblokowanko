import React from 'react';

import { IllustrationTextSectionProps } from '@/sbComponents/illustrationTextSection/IllustrationTextSection.types';
import { ContainerStyled, WrapperStyled } from '@/sbComponents/illustrationTextSection/IllustrationTextSection.styles';
import {
  DescriptionStyled,
  ImageStyled,
  TextWrapperStyled,
  TitleStyled,
} from '@/tutorial/illustrationTextSection/IllustrationTextSection.styles';
import { isRichTextEmpty } from '@/lib/storyblok/storyblok.helpers';
import { RichText } from '@/components/richText/RichText';
import { isCorrectImageAsset } from '@/lib/storyblok/storyblok.typeguards';

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
        {isCorrectImageAsset(blok.image) && <ImageStyled src={blok.image.filename} alt={blok.image.alt} />}
      </ContainerStyled>
    </WrapperStyled>
  );
};
