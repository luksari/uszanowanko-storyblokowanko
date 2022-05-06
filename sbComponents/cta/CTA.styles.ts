import styled, { css, DefaultTheme } from 'styled-components';

import { container } from 'theme/shared';
import { CTABackground, ImagePosition } from 'sbComponents/cta/CTA.types';
import { SbImage } from 'components/sbImage/SbImage';

const getBackgroundColor = (section_background: CTABackground, theme: DefaultTheme): string =>
  ({
    [CTABackground.BluishGrayGradient]: 'linear-gradient(180deg, #F8FBFE 0%, #EDF2F6 100%)',
    [CTABackground.DarkerBlueGradient]: 'linear-gradient(180deg, #3C9ED6 0%, #046DB4 100%)',
    [CTABackground.BlueGradient]: 'linear-gradient(180deg, #12A0DF 0%, #3496D1 100%)',
    [CTABackground.BluishGraySolid]: theme.colors.bluishGray,
    [CTABackground.WhiteSolid]: theme.colors.white,
  }[section_background]);

const getStyleForImagePosition = (position: ImagePosition) => {
  switch (position) {
    case ImagePosition.Left:
      return css`
        flex-direction: row;
      `;
    case ImagePosition.Right:
      return css`
        flex-direction: row-reverse;
      `;
  }
};

export const WrapperStyled = styled.section<{ $sectionBackground: CTABackground }>`
  padding: 16px 0;
  width: 100%;
  background: ${({ theme, $sectionBackground }) => getBackgroundColor($sectionBackground, theme)};
`;

export const ContainerStyled = styled.div<{ $imagePosition: ImagePosition }>`
  ${container.lg};

  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.mq.min.sm} {
    ${({ $imagePosition }) => getStyleForImagePosition($imagePosition)}
  }
`;

export const ImageWrapperStyled = styled.div`
  min-width: 288px;
  width: 0;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    min-width: 350px;
  }
`;

export const ImageStyled = styled(SbImage)`
  width: 100%;
`;

export const ContentStyled = styled.div`
  margin-top: 32px;

  flex-grow: 1;

  ${({ theme }) => theme.breakpoints.mq.min.sm} {
    margin: 0 0 0 48px;
  }
`;

export const TitleStyled = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.azo};
  font-size: 3.2rem;
  line-height: 1.25;
  text-align: center;

  ${({ theme }) => theme.breakpoints.mq.min.sm} {
    text-align: left;
  }
`;

export const DescriptionStyled = styled.div`
  margin-top: 8px;

  font-family: ${({ theme }) => theme.fontFamily.azo};
  font-size: 2.1rem;
  line-height: 1.25;

  text-align: center;

  ${({ theme }) => theme.breakpoints.mq.min.sm} {
    text-align: left;
  }
`;

export const ButtonsStyled = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 16px;

  gap: 16px;

  ${({ theme }) => theme.breakpoints.mq.min.sm} {
    flex-flow: row wrap;
  }
`;
