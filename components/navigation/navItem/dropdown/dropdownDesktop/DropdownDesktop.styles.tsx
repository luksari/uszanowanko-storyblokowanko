import styled, { css } from 'styled-components';

import Arrow from 'assets/svg/arrow-menu.svg';

export const WrapperStyled = styled.div<{
  $isVisible: boolean;
  $isAlignedToRightSection: boolean;
}>`
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};

  position: absolute;
  top: 70px;

  ${({ $isAlignedToRightSection }) =>
    $isAlignedToRightSection
      ? css`
          right: ${({ theme }) => `calc(50% - ${theme.sizes.menuSectionWidthDesktop / 2}px);`};
        `
      : css`
          left: ${({ theme }) => `calc(50% - ${theme.sizes.menuSectionWidthDesktop / 2}px);`};
        `}

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.mrWhite};

  box-shadow: 0 2px 32px 0 rgb(6 83 146 / 8%), 0 0 0 1px #e7eff6;

  cursor: default;
`;

export const ArrowWrapperStyled = styled.div<{ $isAlignedToRightSection: boolean }>`
  position: absolute;

  ${({ $isAlignedToRightSection, theme }) => {
    const factor = $isAlignedToRightSection ? 1.5 : 0.5;

    return css`
      left: ${theme.sizes.menuSectionWidthDesktop * factor}px;
    `;
  }}

  top: 1px;

  width: 27px;
  height: 16px;

  transform: translate(-50%, -100%);
`;

export const ArrowStyled = styled(Arrow)`
  width: 100%;
  height: 100%;
`;
