import styled from 'styled-components';

export const WrapperStyled = styled.li`
  display: flex;

  margin: 6px 0 16px;
  padding-left: 15px;

  width: 100%;
`;

export const LinkStyled = styled.a`
  display: flex;

  width: 100%;
  height: 100%;

  color: inherit;

  text-decoration: none;
  outline: none;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.linkBlue};
  }
`;

export const ThumbnailWrapperStyled = styled.div`
  min-width: 48px;
  width: 48px;
  height: 48px;
`;

export const ThumbnailStyled = styled.img`
  width: 100%;
  height: 100%;
`;

export const TitleStyled = styled.p`
  display: block;

  margin: 0 0 0 15px;

  flex-grow: 1;

  height: 100%;

  font-size: 1.4rem;
  line-height: 1.36;

  white-space: normal;
`;
