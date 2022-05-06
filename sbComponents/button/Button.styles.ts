import styled, {css, DefaultTheme, ThemedCssFunction} from 'styled-components';
import { ButtonVariant } from 'sbComponents/button/Button.types';

const buttonBlue = css`
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  
  &:hover, &:focus {
    background: ${({ theme }) => theme.colors.linkBlue};
  }
`

const buttonGreen = css`
  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  
  &:hover, &:focus {
    background: ${({ theme }) => theme.colors.darkGreen};
  }
`

const buttonWhite = css`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue};
  border: 1px solid ${({ theme }) => theme.colors.blue};
  
  &:hover, &:focus {
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }
`



export const getButtonVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case ButtonVariant.Blue:
      return buttonBlue;
    case ButtonVariant.Green:
      return buttonGreen;
    case ButtonVariant.White:
      return buttonWhite;
  }
};

export const button = css`
  display: flex;

  min-width: 112px;
  height: 40px;

  justify-content: center;
  align-items: center;

  font-weight: 400;
  text-decoration: none;
`;

export const ButtonStyled = styled.button<{ $variant: ButtonVariant; css?: ThemedCssFunction<DefaultTheme> }>`
  ${({ $variant }) => getButtonVariant($variant)};
  ${button}
`;

export const ButtonExternalLinkStyled = styled.a<{ $variant: ButtonVariant }>`
  ${({ $variant }) => getButtonVariant($variant)};
  ${button}
`;
