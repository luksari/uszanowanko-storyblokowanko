import styled from 'styled-components';

import { container } from 'theme/shared';

export const WrapperStyled = styled.section`
  width: 100%;
  height: 100%;
  background: palevioletred;
`;

/** Container is defined in order to set paddings, max-width etc. */
export const ContainerStyled = styled.div`
  ${container.lg}

  color: ${({ theme }) => theme.colors.white};
`;
