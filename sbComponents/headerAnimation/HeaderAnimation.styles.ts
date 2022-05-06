import styled from 'styled-components';

import { container, hidden } from 'theme/shared';
import { SbImage } from 'components/sbImage/SbImage';

const ownSectionPaddingXs = 92;
const ownSectionPaddingSm = 132;
const ownSectionPaddingMd = 220;

export const ContainerStyled = styled.div`
  ${container.lg};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.sizes.menuHeightMobile + ownSectionPaddingXs}px;
  padding-bottom: 106px;
  min-height: 100vh;

  ${({ theme }) => theme.breakpoints.mq.min.sm} {
    padding-top: ${({ theme }) => theme.sizes.menuHeightDesktop + ownSectionPaddingSm}px;
  }

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    display: block;
    padding-top: ${({ theme }) => theme.sizes.menuHeightDesktop + ownSectionPaddingMd}px;
    padding-bottom: 240px;
  }
`;

export const WrapperStyled = styled.header<{ $withBg: boolean }>`
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ $withBg }) => ($withBg ? 'linear-gradient(180deg, #F8FBFE 0%, #EDF2F6 100%)' : 'transparent')};
`;

export const TitleStyled = styled.div`
  width: 100%;
  font-size: 3.2rem;
  line-height: 1.25;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightBlack};
  margin: 0 0 16px;
  font-family: ${({ theme }) => theme.fontFamily.azo};
  font-weight: normal;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    font-size: 4rem;
    text-align: left;
  }
`;

export const DescriptionStyled = styled.div`
  font-size: 1.6rem;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightBlack};

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    text-align: left;
  }
`;

export const ContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 518px;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    align-items: flex-start;
  }
`;


export const StaticImageStyled = styled(SbImage)<{ $isImageHidden: boolean }>`
  display: block;
  width: 100%;
  height: auto;

  ${({ $isImageHidden }) => $isImageHidden && hidden};
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
