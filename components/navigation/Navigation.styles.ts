import styled, { css } from 'styled-components';
import Image from 'next/image';

import { InternalLink } from '@/components/internalLink/InternalLink';

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

export const BurgerStyled = styled.button`
  position: absolute;
  display: flex;
  width: 46px;
  height: 46px;
  left: 16px;
  top: 4px;

  background: transparent;
  border: none;
  box-shadow: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:focus {
    outline: 1px solid red;
  }

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    display: none;
  }
`;

export const LogoLinkStyled = styled.a`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  aspect-ratio: 204/234;
  width: 36px;

  &:focus {
    outline-color: ${({ theme }) => theme.colors.linkBlue};
  }

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    width: 56px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const LogoImageStyled = styled(Image).attrs({ src: '/assets/images/logo_piesel.jpeg' })`
  transition: transform 250ms ease-out;
  &:hover {
    transform: rotateZ(360deg);
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
  align-items: center;

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

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    margin-left: 54px;
  }
`;

export const ActionsWrapperStyled = styled.div`
  display: flex;
  margin: 16px 16px 80px;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    margin: 0 16px 0 auto;
    flex-direction: row;
    justify-self: flex-end;
    align-items: center;
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

export const NavListStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    flex-direction: row;
  }
`;

export const StyledInternalLink = styled(InternalLink)`
  padding: 4px 8px;
  text-decoration: none;
  text-transform: capitalize;
  font-family: 'Comic Sans MS', sans-serif;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightBlack};

  &:last-of-type {
    margin-right: 0;
  }
  transition: transform 100ms ease-out;
  &:hover {
    transform: rotateZ(-12deg);
  }
}
  ${({ theme }) => theme.breakpoints.mq.min.md} {
    margin-right: 16px;
  }

`;
