import styled, { css } from 'styled-components';

import { container } from 'theme/shared';
import { WithSidePadding } from 'lib/storyblok/storyblok.types';

import { WrapperStyled as ChildWrapper } from './moduleIconElement/ModuleIconElement.styles';

/* stylelint-disable scss/operator-no-unspaced */

/** This style only applies for lg desktop, as smaller resolutions display everything in one column */
const getStylesForColumns = (columns: number) => {
  if (columns > 1) {
    return css`
      align-items: center;
      justify-content: space-between;
      gap: 32px 40px;

      ${ChildWrapper} {
        width: 100%;
        max-width: calc(${100 / columns}% - 90px);
      }
    `;
  }
  return css`
    gap: 32px;

    ${ChildWrapper} {
      flex: 1 0 100%;
    }
  `;
};

export const ContainerStyled = styled.div<WithSidePadding>`
  ${container.lg};

  ${({ $sidePadding }) =>
    $sidePadding &&
    css`
      && {
        margin: 0 0;
        max-width: 100%;
        padding-left: ${$sidePadding}px;
        padding-right: ${$sidePadding}px;

        ${ListStyled} {
          width: 100%;
          justify-content: space-between;
        }
      }
    `}
`;

export const WrapperStyled = styled.section`
  width: 100%;
`;

export const ListStyled = styled.ul<{ $columns: number }>`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  padding-top: 16px;
  padding-bottom: 16px;
  gap: 32px;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    justify-content: flex-start;

    ${({ $columns }) => getStylesForColumns($columns)}
  }
`;
