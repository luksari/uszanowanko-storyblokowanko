import React from 'react';

import { ButtonProps, ButtonVariant } from 'sbComponents/button/Button.types';

import { ButtonStyled } from './Button.styles';

export const Button = ({ children, css, variant = ButtonVariant.White, className, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled {...rest} css={css} $variant={variant} className={className}>
      {children}
    </ButtonStyled>
  );
};
