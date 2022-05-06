import React from 'react';

import { RichText } from 'components/richText/RichText';
import { getColor } from 'lib/storyblok/storyblok.helpers';

import { ModuleTextLineSeparatorProps } from './ModuleTextLineSeparator.types';
import { WrapperStyled, ContainerStyled, ParagraphWrapperStyled } from './ModuleTextLineSeparator.styles';

export const ModuleTextLineSeparator = ({ blok, ...rest }: ModuleTextLineSeparatorProps) => {
  const { section_background, section_id, separator_color, text_color, text_content } = blok;
  return (
    <WrapperStyled
      {...rest}
      style={{ background: getColor(section_background) }}
      id={section_id}
      data-testid={'module-text-line-separator'}
    >
      <ContainerStyled>
        <ParagraphWrapperStyled
          style={{ color: getColor(text_color) }}
          $separatorColor={getColor(separator_color)}
          data-testid={'separator-wrapper'}
        >
          <RichText content={text_content} />
        </ParagraphWrapperStyled>
      </ContainerStyled>
    </WrapperStyled>
  );
};
