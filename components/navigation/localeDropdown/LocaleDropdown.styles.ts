import styled, { css } from 'styled-components';

const localeDropdownShadow = '0 3px 3px 0 rgba(3, 3, 3, 0.15)';

export const WrapperStyled = styled.div`
  position: relative;

  display: flex;
`;

export const ButtonStyled = styled.button`
  position: relative;

  display: flex;

  padding: 7px 20px;

  height: 100%;

  align-items: center;

  background: none;
  border: none;
  cursor: pointer;

  & > svg {
    margin: 3px;
  }

  &:focus {
    outline: none;
  }

  &:focus::before {
    content: '';

    position: absolute;
    left: 23px;
    top: 10px;

    width: 18px;
    height: 18px;

    outline: 1px solid ${({ theme }) => theme.colors.linkBlue};
    border-radius: 50%;
  }

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    padding: 0;

    &::after {
      content: '';

      margin-left: 5px;

      width: 0;
      height: 0;

      border-top: 5px solid ${({ theme }) => theme.colors.bluishGray};
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;

      transform: translateY(25%);
    }

    &:focus::before {
      left: 3px;
      top: 3px;
    }

    &:hover::after,
    &:focus::after {
      border-top-color: ${({ theme }) => theme.colors.linkBlue};
    }
  }
`;

export const DropdownStyled = styled.ul<{ $isExpanded: boolean }>`
  display: flex;

  list-style-type: none;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    position: absolute;
    top: 0;
    left: 0;

    padding: 24px 0 0;

    height: 0;
    opacity: 0;

    flex-direction: column;

    box-shadow: ${localeDropdownShadow};
    overflow: hidden;

    visibility: hidden;
    transition-duration: 250ms;

    ${({ $isExpanded }) =>
      $isExpanded &&
      css`
        height: 73px;

        opacity: 1;
        visibility: visible;
      `}
  }
`;
