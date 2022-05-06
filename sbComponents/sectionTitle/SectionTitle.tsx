import React from 'react';

import { SectionTitleProps } from 'sbComponents/sectionTitle/SectionTitle.types';
import {
  WrapperStyled,
  ContainerStyled,
  SubTitleStyled,
  TitleStyled,
} from 'sbComponents/sectionTitle/SectionTitle.styles';
import { getColor } from 'lib/storyblok/storyblok.helpers';
import { RichText } from 'components/richText/RichText';

export const SectionTitle = ({ blok, ...rest }: SectionTitleProps) => {
  const { title_content, title_color, description_content, description_color, bg_color, section_id } = blok;

  return (
    <WrapperStyled
      {...rest}
      style={{
        backgroundColor: getColor(bg_color),
      }}
      id={section_id}
    >
      <ContainerStyled>
        <TitleStyled $baseColor={title_color}>
          <RichText content={title_content} />
        </TitleStyled>
        {description_content && (
          <SubTitleStyled $baseColor={description_color}>
            <RichText content={description_content} />
          </SubTitleStyled>
        )}
      </ContainerStyled>
    </WrapperStyled>
  );
};
