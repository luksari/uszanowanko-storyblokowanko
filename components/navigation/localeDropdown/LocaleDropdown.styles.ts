import styled, { css } from 'styled-components';
import Image from 'next/image';

import { InternalLink } from '@/components/internalLink/InternalLink';

const localeDropdownShadow = '0 3px 3px 0 rgba(3, 3, 3, 0.15)';

const flagSizeMobile = 36;
const flagSizeDesktop = 18;

export const WrapperStyled = styled.div`
  position: relative;

  display: flex;
`;

export const ButtonStyled = styled.button`
  position: relative;

  display: flex;
  overflow: visible;
  align-items: center;
  margin: 4px 12px;
  width: ${flagSizeMobile}px;
  height: ${flagSizeMobile}px;
  border: 2px solid ${({ theme }) => theme.colors.darkGreen};
  z-index: 1;
  cursor: not-allowed;

  &:focus {
    outline: none;
  }

  &:focus::before {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;

    width: ${flagSizeMobile + 6}px;
    height: ${flagSizeMobile + 6}px;

    border: 1px solid ${({ theme }) => theme.colors.green};
    transform: translate(-50%, -50%);
  }

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    width: ${flagSizeDesktop}px;
    height: ${flagSizeDesktop}px;
    margin: 4px;
    border: 2px solid ${({ theme }) => theme.colors.bluishGray};
    cursor: pointer;

    &:focus::before {
      width: ${flagSizeDesktop + 16}px;
      height: ${flagSizeDesktop + 16}px;
    }

    &::after {
      content: '';

      margin-left: 24px;

      width: 0;
      height: 0;

      border-top: 5px solid ${({ theme }) => theme.colors.lightBlack};
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;

      transform: translateY(25%);
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

    height: 80px;
    width: 26px;
    opacity: 0;

    flex-direction: column;

    box-shadow: ${localeDropdownShadow};
    transform: scaleY(0);
    transform-origin: 0 0;

    transition: transform 250ms ease-out;

    ${({ $isExpanded }) =>
      $isExpanded &&
      css`
        transform: scaleY(1);
        opacity: 1;
      `}
  }
`;

export const StyledFlagImage = styled(Image)`
  z-index: ${({ theme }) => theme.zIndexes.localeFlag};
`;

export const InactiveFlagLinkStyled = styled(InternalLink)`
  position: relative;
  width: ${flagSizeMobile}px;
  height: ${flagSizeMobile}px;
  margin: 4px 12px;
  display: flex;

  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.bluishGray};

  transition: transform 150ms ease-out;
  &:hover {
    transform: scale(1.2);
  }

  &:focus::before {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;

    width: ${flagSizeMobile + 6}px;
    height: ${flagSizeMobile + 6}px;

    border: 1px solid ${({ theme }) => theme.colors.green};
    transform: translate(-50%, -50%);
  }
  ${({ theme }) => theme.breakpoints.mq.min.md} {
    width: ${flagSizeDesktop}px;
    height: ${flagSizeDesktop}px;
    margin: 4px;

    &:hover {
      transform: scale(1);
    }

    &:focus::before {
      width: ${flagSizeDesktop + 6}px;
      height: ${flagSizeDesktop + 6}px;
    }
  }
`;
