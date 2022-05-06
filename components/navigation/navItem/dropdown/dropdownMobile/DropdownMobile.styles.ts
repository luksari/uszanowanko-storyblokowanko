import styled from 'styled-components';

export const WrapperStyled = styled.div<{ $isVisible: boolean }>`
  cursor: default;
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
`;
