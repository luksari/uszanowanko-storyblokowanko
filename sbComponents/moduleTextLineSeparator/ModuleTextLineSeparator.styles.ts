import styled from 'styled-components';

import { container } from 'theme/shared';

export const WrapperStyled = styled.section`
  width: 100%;
`;

export const ContainerStyled = styled.div`
  ${container.lg};

  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    ${container.sm};
  }
`;

export const ParagraphWrapperStyled = styled.div`
  font-size: 1.6rem;
  line-height: 1.4;
  text-align: center;
  display: flex;
  align-items: center;
  width: 100%;
  flex: 1 1 auto;
  gap: 37px;

  &::after,
  &::before {
    content: '';
    height: 1px;
    background: ${({ theme }) => theme.colors.black};
    flex: 1 0 auto;
  }
`;
