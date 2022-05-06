import styled, { css } from 'styled-components';


export const WrapperStyled = styled.nav<{ $isExpanded: boolean }>`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 8px rgb(6 83 146 / 8%);
  height: ${({ theme }) => theme.sizes.menuHeightMobile}px;
  color: ${({ theme }) => theme.colors.darkGray};
  background-color: ${({ theme }) => theme.colors.white};
  z-index: ${({ theme }) => theme.zIndexes.navigation};

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    justify-content: center;
    height: ${({ theme }) => theme.sizes.menuHeightDesktop}px;
  }

  ${({ $isExpanded, theme }) =>
    $isExpanded &&
    css`
      background-color: ${theme.colors.white};
    `}
`;

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  max-width: 1400px;
  flex-wrap: nowrap;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    padding: 0 20px;
    justify-content: flex-start;
  }
`;

export const BurgerIconStyled = styled.img`
  /* stylelint-disable-line */
  path {
    transition: 250ms fill ease-out;
    fill: ${({ theme }) => theme.colors.lightBlack};
  }
`;

export const BurgerStyled = styled.button`
  position: absolute;
  top: 50%;
  left: 16px;

  padding: 0 13px;

  display: flex;

  background: transparent;
  border: none;
  box-shadow: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 48px;
  transform: translateY(-45%);

  &:hover,
  &:focus {
    ${BurgerIconStyled} {
      path {
        fill: ${({ theme }) => theme.colors};
      }
    }
  }

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    display: none;
  }
`;

export const LogoLinkStyled = styled.a`
  margin-left: auto;
  margin-right: auto;

  &:focus {
    outline-color: ${({ theme }) => theme.colors.linkBlue};
  }

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    height: auto;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const LogoStyled = styled.div`
  width: 148px;
  height: 52px;
  background: red;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    width: 130px;
    height: 45px;
  }

  ${({ theme }) => theme.breakpoints.mq.min.lg} {
    width: 148px;
    height: 52px;
  }
`;

export const ListWrapperStyled = styled.div<{ $isExpanded: boolean }>`
  position: fixed;
  top: ${({ theme }) => theme.sizes.menuHeightMobile}px;
  left: 0;

  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 350ms ease-out;

  ${({ $isExpanded }) =>
    $isExpanded &&
    css`
      height: ${({ theme }) => `calc(100vh - ${theme.sizes.menuHeightMobile}px)`};
      overflow-y: auto;
    `}

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    position: static;

    display: flex;

    height: 100%;

    align-items: center;

    transition: none;
    overflow: visible;
  }
`;

export const ListStyled = styled.ul`
  display: flex;

  min-height: 100%;
  width: 100%;

  flex-direction: column;

  list-style-type: none;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: inset 0 3px 3px -3px rgb(3 3 3 / 15%), 0 8px 16px -4px rgb(3 3 3 / 15%);

  & > li {
    margin: 0 16px;

    &:first-of-type {
      margin-top: 16px;
    }
  }

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    background: transparent;

    min-height: auto;
    flex-direction: row;
    margin-left: 0;
    box-shadow: none;

    & > li {
      margin: 0;

      &:first-of-type {
        margin-top: 0;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.mq.min.lg} {
    margin-left: 54px;
  }
`;

export const ActionsWrapperStyled = styled.div`
  display: flex;
  margin: 16px 16px 80px;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    margin: 0;

    flex-direction: row;
    justify-self: flex-end;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.mq.min.lg} {
    margin-left: auto;
  }
`;


export const LocaleItemStyled = styled.li`
  display: flex;

  margin-top: 9px;

  justify-content: center;
  align-items: center;
  white-space: nowrap;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    margin-top: 0;
    margin-left: 23px;
  }
`;
