import styled, { css } from 'styled-components';

import { WithBaseColor } from 'lib/storyblok/storyblok.types';
import { getColor } from 'lib/storyblok/storyblok.helpers';
import { ImagePosition } from 'sbComponents/smallIllustrationTextGrid/SmallIllustrationTextGrid.types';
import { SbImage } from 'components/sbImage/SbImage';

export const TitleStyled = styled.div<WithBaseColor>`
  font-size: 1.8rem;
  line-height: 1.3;
  font-family: ${({ theme }) => theme.fontFamily.azo};
  margin: 0 0 4px;
  width: 100%;
  text-align: inherit;
  color: ${({ theme, $baseColor }) => getColor($baseColor) ?? theme.colors.black};
`;

export const DescriptionStyled = styled.div<WithBaseColor>`
  font-size: 1.6rem;
  line-height: 1.5;
  margin: 0;
  width: 100%;
  text-align: inherit;
  color: ${({ theme, $baseColor }) => getColor($baseColor) ?? theme.colors.black};
`;

const defaultTextWrapperStyles = css`
  text-align: center;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    text-align: left;
  }
`;

export const TextWrapperStyled = styled.div`
  ${defaultTextWrapperStyles};
`;

const defaultImageStyles = css`
  margin-bottom: 16px;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    margin-bottom: 0;
    margin-right: 24px;
    margin-left: 0;
  }
`;

export const ImageWrapperStyled = styled.div`
  ${defaultImageStyles};

  display: flex;
  min-width: 200px;
  width: 200px;
  align-items: center;
`;

export const ImageStyled = styled(SbImage)`
  display: block;
  width: 100%;
`;

export const ContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    flex-direction: row-reverse;
  }
`;

const ImageAboveStyles = css`
  ${({ theme }) => theme.breakpoints.mq.min.md} {
    ${ContentWrapperStyled} {
      flex-direction: column-reverse;
    }

    ${ImageWrapperStyled} {
      margin-bottom: 16px;
      margin-left: 0;
      margin-right: 0;
    }

    ${TextWrapperStyled} {
      margin-right: 0;
      margin-left: 0;
      text-align: center;
    }
  }
`;

const ImageAsideStyles = css`
  ${({ theme }) => theme.breakpoints.mq.min.md} {
    &:nth-of-type(2n + 1) {
      ${ContentWrapperStyled} {
        justify-content: space-between;
      }

      ${ImageWrapperStyled} {
        margin-right: 24px;
        margin-left: 0;
      }
    }

    &:nth-of-type(2n) {
      ${ContentWrapperStyled} {
        flex-direction: row;
        justify-content: space-between;
      }

      ${ImageWrapperStyled} {
        margin-right: 0;
        margin-left: 24px;
      }

      ${TextWrapperStyled} {
        margin-left: 0;
        text-align: left;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.mq.min.lg} {
    // Reset styles for every child
    &:nth-of-type(n) {
      ${ContentWrapperStyled} {
        justify-content: flex-end;
        flex-direction: row-reverse;
      }

      ${ImageWrapperStyled} {
        ${defaultImageStyles}
      }

      ${TextWrapperStyled} {
        ${defaultTextWrapperStyles};
      }
    }
  }
`;

const getStyleForImagePosition = (position: ImagePosition) => {
  switch (position) {
    case ImagePosition.AboveTheText:
      return ImageAboveStyles;
    case ImagePosition.AsideTheText:
      return ImageAsideStyles;
  }
};

export const WrapperStyled = styled.li<{ $imagePosition: ImagePosition }>`
  list-style: none;
  display: flex;
  width: 100%;
  margin-bottom: 24px;

  ${({ $imagePosition }) => getStyleForImagePosition($imagePosition)}
`;
