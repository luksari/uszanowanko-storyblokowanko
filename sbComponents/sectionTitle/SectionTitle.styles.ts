import styled from 'styled-components';

import { container } from 'theme/shared';
import { WithBaseColor } from 'lib/storyblok/storyblok.types';
import { getColor } from 'lib/storyblok/storyblok.helpers';

export const WrapperStyled = styled.div`
  width: 100%;
`;

export const ContainerStyled = styled.div`
  ${container.lg}

  padding-top: 16px;
  padding-bottom: 16px;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    ${container.sm}
  }
`;

export const TitleStyled = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.azo};

  margin: 5px 0 0;

  text-align: center;

  font-size: 24px;
  font-weight: 400;
  line-height: 1.25;

  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    font-size: 32px;
  }
`;

export const SubTitleStyled = styled.div`
  margin: 20px 0 0;

  text-align: center;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    font-size: 18px;
  }
`;
