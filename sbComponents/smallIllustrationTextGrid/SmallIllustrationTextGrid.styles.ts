import styled, { css } from 'styled-components';

import { container } from 'theme/shared';

import { WrapperStyled as ChildWrapper } from './smallIllustrationTextElement/SmallIllustrationTextElement.styles';

/** This style only applies for lg desktop, as smaller resolutions display everything in one column */
const getStylesForColumns = (columns: number) => {
  if (columns > 1) {
    return css`
      align-items: center;
      justify-content: space-between;
      gap: 24px 40px;

      ${ChildWrapper} {
        // stylelint-disable-next-line scss/operator-no-unspaced
        flex: 0 0 calc(${100 / columns}% - 80px);
      }
    `;
  }
  return css`
    gap: 24px;

    ${ChildWrapper} {
      flex: 1 0 100%;
    }
  `;
};

export const ContainerStyled = styled.div`
  ${container.lg};

  padding-top: 16px;
  padding-bottom: 16px;
`;

export const WrapperStyled = styled.section`
  width: 100%;
`;

export const ListStyled = styled.ul<{ $columns: number; $areItemsCentered: boolean }>`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  ${({ $areItemsCentered }) =>
    $areItemsCentered &&
    css`
      align-items: center;
      justify-content: center;
    `}

  ${({ theme }) => theme.breakpoints.mq.min.lg} {
    justify-content: flex-start;

    ${({ $columns }) => getStylesForColumns($columns)}
  }
`;
