import styled from 'styled-components';

export const WrapperStyled = styled.li`
  padding: 8px 14px;

  white-space: normal;
`;

export const IconStyled = styled.div`
  margin-right: 15px;

  min-width: 29px;
  width: 29px;
  height: 25px;

  svg {
    width: 100%;
    height: 100%;

    filter: grayscale(0.85);
  }
`;

export const AnchorStyled = styled.a`
  display: flex;

  align-items: center;

  color: inherit;
  text-decoration: none;
  outline: none;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.linkBlueLight};

    svg {
      filter: none;
    }
  }
`;
