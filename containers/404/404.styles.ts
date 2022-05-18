import styled from 'styled-components';

import { InternalLink } from '@/components/internalLink/InternalLink';

export const Styled404 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;

  width: 100vw;
  height: 100vh;
`;

export const StyledLink = styled(InternalLink)`
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 16px;
  font-size: 2rem;
  border-radius: 10px;
  height: 45px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 150ms ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledTitle = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.lightBlack};

  & > span {
    font-size: 12rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.bluishGray};
  }
`;
