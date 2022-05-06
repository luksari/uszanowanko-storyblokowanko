import React from 'react';

import { SbButtonProps } from 'sbComponents/button/Button.types';

import { ButtonStyled } from './Button.styles';

export const SbButton = ({ blok, css, ...rest }: SbButtonProps) => {
  return (
    <ButtonStyled {...rest} css={css} $variant={blok.variant}>
      {blok.content}
    </ButtonStyled>
  );
};
