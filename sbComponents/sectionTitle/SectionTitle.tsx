import React from 'react';

import { SectionTitleProps } from 'sbComponents/sectionTitle/SectionTitle.types';
import {
  WrapperStyled,
  ContainerStyled,
  SubTitleStyled,
  TitleStyled,
} from 'sbComponents/sectionTitle/SectionTitle.styles';
import { RichText } from 'components/richText/RichText';

export const SectionTitle = ({ blok, ...rest }: SectionTitleProps) => {
  const { title_content, description_content, section_id } = blok;

  return (
    <WrapperStyled {...rest} id={section_id}>
      <ContainerStyled>
        <TitleStyled>
          <RichText content={title_content} />
        </TitleStyled>
        {description_content && (
          <SubTitleStyled>
            <RichText content={description_content} />
          </SubTitleStyled>
        )}
      </ContainerStyled>
    </WrapperStyled>
  );
};
