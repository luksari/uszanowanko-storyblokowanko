import styled, { css } from 'styled-components';

import { container } from 'theme/shared';
import { WithBaseColor } from 'lib/storyblok/storyblok.types';
import { getColor } from 'lib/storyblok/storyblok.helpers';
import { SbImage } from 'components/sbImage/SbImage';

import { ImagePosition } from './IllustrationTextSection.types';

export const getStyleForImagePosition = (pos: ImagePosition) => {
  switch (pos) {
    case ImagePosition.Left:
      return css`
        ${({ theme }) => theme.breakpoints.mq.min.md} {
          flex-direction: row-reverse;

          ${TextWrapperStyled} {
            text-align: left;
          }
        }
      `;
    case ImagePosition.Top:
      return css`
        flex-direction: column-reverse;

        ${TextWrapperStyled} {
          text-align: center;
        }
      `;
    case ImagePosition.Right:
      return css`
        ${({ theme }) => theme.breakpoints.mq.min.md} {
          flex-direction: row;

          ${TextWrapperStyled} {
            text-align: left;
          }
        }
      `;
    case ImagePosition.Bottom:
      return css`
        flex-direction: column;

        ${TextWrapperStyled} {
          text-align: center;
        }
      `;
  }
};

export const ContainerStyled = styled.div<{ $imgPosition: ImagePosition }>`
  ${container.lg};
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-direction: column-reverse;

  ${({ $imgPosition }) => getStyleForImagePosition($imgPosition)};

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    gap: 40px;
  }
`;

export const WrapperStyled = styled.section<WithBaseColor>`
  display: flex;
  align-items: center;
  background: ${({ theme, $baseColor }) => getColor($baseColor) ?? theme.colors.mrWhite};
`;

export const TitleStyled = styled.div<WithBaseColor>`
  font-size: 3.2rem;
  width: 100%;
  line-height: 1.3;
  text-align: inherit;
  color: ${({ theme, $baseColor }) => getColor($baseColor) ?? theme.colors.lightBlack};
`;

export const ImageStyled = styled(SbImage)`
  display: block;
  width: 220px;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    width: 264px;
  }
`;

export const TextWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const DescriptionStyled = styled.div<WithBaseColor>`
  font-size: 1.8rem;
  line-height: 1.4;
  text-align: inherit;
  width: 100%;
  color: ${({ theme, $baseColor }) => getColor($baseColor) ?? theme.colors.lightBlack};
`;
