import styled from 'styled-components';

export const WrapperStyled = styled.footer`
  display: flex;
  width: 100vw;
  align-items: center;
  background: ${({ theme }) => theme.colors.green};
  margin-top: auto;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    justify-content: center;
  }
`;

export const ContainerStyled = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 20px;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    flex-direction: row;
    justify-content: center;
  }

  ${({ theme }) => theme.breakpoints.mq.min.lg} {
    padding: 53px 20px;
  }
`;

export const SectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    margin-right: auto;
  }
`;

export const CopyTextStyled = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 11px;
  padding-top: 11px;
  margin: 0;
`;
