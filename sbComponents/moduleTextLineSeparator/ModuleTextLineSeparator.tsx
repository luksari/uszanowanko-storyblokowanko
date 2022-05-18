import React from 'react';

import { RichText } from 'components/richText/RichText';

import { ModuleTextLineSeparatorProps } from './ModuleTextLineSeparator.types';
import { WrapperStyled, ContainerStyled, ParagraphWrapperStyled } from './ModuleTextLineSeparator.styles';

export const ModuleTextLineSeparator = ({ blok, ...rest }: ModuleTextLineSeparatorProps) => {
  const { section_id, text_content } = blok;
  return (
    <WrapperStyled {...rest} id={section_id} data-testid={'module-text-line-separator'}>
      <ContainerStyled>
        <ParagraphWrapperStyled data-testid={'separator-wrapper'}>
          <RichText content={text_content} />
        </ParagraphWrapperStyled>
      </ContainerStyled>
    </WrapperStyled>
  );
};
