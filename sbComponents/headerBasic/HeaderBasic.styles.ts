import styled, { css } from 'styled-components';

import { container } from 'theme/shared';
import { SbImage } from 'components/sbImage/SbImage';

type WithImage = {
  $isWithImage: boolean;
};

export const WrapperStyled = styled.header`
  position: relative;

  display: flex;

  padding-top: ${({ theme }) => theme.sizes.menuHeightMobile}px;

  width: 100%;

  background: linear-gradient(180deg, #f8fbfe 0%, #edf2f6 100%);

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    padding-top: ${({ theme }) => theme.sizes.menuHeightDesktop}px;
  }
`;

export const ContainerStyled = styled.div<WithImage>`
  ${container.lg};

  display: flex;

  padding-top: 90px;
  padding-bottom: 107px;

  height: 100%;

  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.mq.min.sm} {
    padding-top: 90px;
    padding-bottom: 107px;
  }

  ${({ $isWithImage, theme }) =>
    $isWithImage &&
    css`
      ${theme.breakpoints.mq.min.md} {
        flex-direction: row-reverse;
        justify-content: space-between;
      }
    `}
`;

export const ImageWrapperStyled = styled.div`
  position: relative;
  margin-bottom: 24px;
  width: 320px;
  height: 222px;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    margin-bottom: 0;
    margin-left: 0;
  }
`;

export const ImageStyled = styled(SbImage)``;

export const TitleStyled = styled.div<WithImage>`
  display: block;

  margin-bottom: 16px;

  width: 100%;

  color: ${({ theme }) => theme.colors.lightBlack};

  font-family: ${({ theme }) => theme.fontFamily.azo};
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 1.25;
  text-align: center;

  ${({ theme }) => theme.breakpoints.mq.min.sm} {
    font-size: 4rem;
  }

  ${({ $isWithImage, theme }) =>
    $isWithImage &&
    css`
      ${theme.breakpoints.mq.min.md} {
        text-align: left;
      }
    `}
`;

export const ContentStyled = styled.div<WithImage>`
  width: 100%;

  font-size: 1.6rem;
  line-height: 1.5;

  text-align: center;

  color: ${({ theme }) => theme.colors.black};

  ${({ $isWithImage, theme }) =>
    $isWithImage &&
    css`
      ${theme.breakpoints.mq.min.md} {
        text-align: left;
      }
    `}
`;

export const ContentWrapper = styled.div<WithImage>`
  display: flex;

  width: 100%;
  max-width: ${({ theme }) => theme.sizes.headerContentMaxWidth}px;

  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    margin-right: ${({ $isWithImage }) => $isWithImage && '60px'};

    align-items: ${({ $isWithImage }) => $isWithImage && 'flex-start'};
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
