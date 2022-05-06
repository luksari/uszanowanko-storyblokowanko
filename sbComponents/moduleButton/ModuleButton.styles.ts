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
`;

export const ButtonsStyled = styled.div`
  display: flex;
  justify-content: center;

  flex-flow: row wrap;
  gap: 16px;
`;
