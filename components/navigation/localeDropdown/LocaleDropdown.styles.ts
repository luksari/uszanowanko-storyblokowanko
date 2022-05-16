import styled, { css } from 'styled-components';
import { FC } from 'react';

import ES from 'assets/svg/flags/flag-es.svg';
import PL from 'assets/svg/flags/flag-pl.svg';
import EN from 'assets/svg/flags/flag-gb.svg';
import { InternalLink } from '@/components/internalLink/InternalLink';

const localeDropdownShadow = '0 3px 3px 0 rgba(3, 3, 3, 0.15)';

export const WrapperStyled = styled.div`
  position: relative;

  display: flex;
`;

export const ButtonStyled = styled.button`
  position: relative;

  display: flex;

  height: 100%;

  align-items: center;

  background: none;
  border: none;
  cursor: pointer;

  & > svg {
    margin: 4px;
  }

  &:focus {
    outline: none;
  }

  &:focus::before {
    content: '';

    position: absolute;
    left: 23px;
    top: 10px;

    width: 20px;
    height: 20px;

    outline: 1px solid ${({ theme }) => theme.colors.black};
  }

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    padding: 0;

    &::after {
      content: '';

      margin-left: 5px;

      width: 0;
      height: 0;

      border-top: 5px solid ${({ theme }) => theme.colors.lightBlack};
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

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    position: absolute;
    top: 0;
    left: 0;

    padding: 26px 0 0;

    height: 75px;
    width: 26px;
    opacity: 0;

    flex-direction: column;

    box-shadow: ${localeDropdownShadow};
    overflow: hidden;
    transform: scaleY(0);
    transform-origin: 0 0;

    visibility: hidden;
    transition: transform 250ms ease-out;

    ${({ $isExpanded }) =>
      $isExpanded &&
      css`
        transform: scaleY(1);

        opacity: 1;
        visibility: visible;
      `}
  }
`;

const getStyledFlag = (flag: FC) => styled(flag)`
  width: 18px;
  height: 18px;

  margin-left: 4px;
  z-index: ${({ theme }) => theme.zIndexes.localeFlag};
`;

export const FlagPL = getStyledFlag(PL);
export const FlagEN = getStyledFlag(EN);
export const FlagES = getStyledFlag(ES);

export const InactiveFlagItemStyled = styled.li``;

export const InactiveFlagLinkStyled = styled(InternalLink)`
  position: relative;

  display: flex;

  outline: none;

  &:focus::after {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;

    width: 20px;
    height: 20px;

    border: 1px solid ${({ theme }) => theme.colors.linkBlue};
    transform: translate(-50%, -50%);
  }
`;
