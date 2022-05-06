import styled, { css } from 'styled-components';

import { WithBaseColor } from 'lib/storyblok/storyblok.types';
import { getColor } from 'lib/storyblok/storyblok.helpers';
import { SbImage } from 'components/sbImage/SbImage';

export const TitleStyled = styled.div<WithBaseColor>`
  font-size: 1.8rem;
  line-height: 1.25;
  font-family: ${({ theme }) => theme.fontFamily.azo};
  width: 100%;
  text-align: inherit;
  color: ${({ theme, $baseColor }) => getColor($baseColor) ?? theme.colors.black};

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    font-size: 2.1rem;
  }
`;

export const DescriptionStyled = styled.div<WithBaseColor<{ $isDescriptionOnly: boolean }>>`
  font-size: 1.4rem;
  line-height: 1.35;
  margin: 0;
  width: 100%;
  text-align: inherit;
  color: ${({ theme, $baseColor }) => getColor($baseColor) ?? theme.colors.black};

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    line-height: 1.5;
  }

  ${({ $isDescriptionOnly }) =>
    $isDescriptionOnly &&
    css`
      font-size: 1.8rem;
      line-height: 1.4;
    `}
`;

export const TextWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 4px;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    text-align: left;
  }
`;

export const ImageWrapperStyled = styled.div`
  display: flex;
  min-width: 120px;
  width: 120px;
  height: 120px;
  align-items: center;
`;

export const ImageStyled = styled(SbImage)`
  display: block;
  width: 100%;
`;

export const ContentWrapperStyled = styled.div<{ $isDescriptionOnly: boolean }>`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 12px;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: ${({ $isDescriptionOnly }) => ($isDescriptionOnly ? 48 : 24)}px;
  }
`;

export const WrapperStyled = styled.li`
  list-style: none;
  width: 100%;
`;
