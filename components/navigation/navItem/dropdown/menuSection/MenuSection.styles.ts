import styled from 'styled-components';

export const WrapperStyled = styled.ul`
  position: relative;

  padding: 11px 23px 0;

  list-style-type: none;

  color: ${({ theme }) => theme.colors.lightBlack};

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    padding: 29px 24px 29px 39px;

    width: ${({ theme }) => theme.sizes.menuSectionWidthDesktop}px;
  }

  &:nth-of-type(2) {
    &::after {
      content: '';

      position: absolute;
      left: 0;
      top: 0;

      width: 1px;
      height: 100%;

      background-color: #cfdde8;
    }
  }
`;

export const CategoryStyled = styled.span`
  display: block;

  padding: 12px 14px 5px;

  font-size: 1.6rem;
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    padding: 35px 15px 10px;

    &:first-of-type {
      padding-top: 7px;
    }
  }
`;
