import styled, { css } from 'styled-components';
import ExpandMoreIcon from 'assets/svg/expand-more-icon.svg';

export const ExpandMoreIconStyled = styled(ExpandMoreIcon)`
  transition: 250ms transform ease-out;

  path {
    transition: 250ms fill ease-out;
  }
`;

export const IconStyled = styled.div<{ $isExpanded: boolean }>`
  margin-left: auto;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    display: none;
  }

  ${({ $isExpanded, theme }) =>
    $isExpanded &&
    css`
      transform: rotate(180deg);

      ${ExpandMoreIconStyled} {
        path {
          fill: ${theme.colors.linkBlue};
        }
      }
    `}
`;

export const WrapperStyled = styled.li<{ $isExpanded: boolean }>`
  display: flex;

  min-height: 35px;
  cursor: pointer;

  flex-direction: column;

  white-space: nowrap;
  font-size: 1.6rem;

  ${({ $isExpanded, theme }) =>
    $isExpanded &&
    css`
      & > button {
        color: ${theme.colors.linkBlue};
      }
    `}

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    position: relative;

    margin: 0;
    padding: 0 12px;

    height: 70px;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:hover > button {
      color: ${({ theme }) => theme.colors.linkBlue};
    }

    &:first-of-type {
      margin-left: auto;
    }
  }

  ${({ theme }) => theme.breakpoints.mq.min.lg} {
    padding: 0 18px;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

export const ButtonStyled = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 18px 6px;
  border: none;
  cursor: pointer;
  line-height: 1.2;

  &:focus {
    outline: none;
  }

  ${({ theme }) => css`
    background-color: transparent;
    color: ${theme.colors.darkGray};

    ${({ theme }) => theme.breakpoints.mq.min.md} {
      padding: 0;
      justify-content: center;
      align-items: center;

      &:hover,
      &:focus {
        color: ${theme.colors.linkBlue};
      }
    }
  `}
`;
