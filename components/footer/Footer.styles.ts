import styled from 'styled-components';

export const WrapperStyled = styled.footer`
  display: flex;
  width: 100vw;
  align-items: center;
  background: ${({ theme }) => theme.colors.furgonetkaBlue};
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

export const SocialSection = styled(SectionStyled)`
  ${({ theme }) => theme.breakpoints.mq.min.md} {
    margin-right: 0;
  }
`;

export const LinksSectionStyled = styled(SectionStyled)`
  ${({ theme }) => theme.breakpoints.mq.min.md} {
    margin-left: 24px;
    flex-direction: row;
  }
`;

export const CopyTextStyled = styled.p`
  color: ${({ theme }) => theme.colors.mrWhite};
  font-size: 11px;
  padding-top: 11px;
  margin: 0;
`;

export const LogoLinkStyled = styled.a`
  text-decoration: none;
  display: flex;

  svg {
    width: 132px;
    height: 47px;

    * {
      fill: ${({ theme }) => theme.colors.mrWhite};
    }
  }
`;

export const SectionHeaderStyled = styled.h2`
  color: ${({ theme }) => theme.colors.mrWhite};
  margin-top: 24px;
  margin-bottom: 8px;

  font-size: 1.4rem;
  font-weight: 600;
  text-align: left;
  text-transform: uppercase;

  ${({ theme }) => theme.breakpoints.mq.min.md} {
    margin-top: 0;
  }
`;

export const SectionHeaderLightText = styled.span`
  color: inherit;
  text-transform: lowercase;
  font-weight: 400;
`;

export const LinkSectionStyled = styled.section`
  margin-right: 52px;
`;

export const SubsectionItemStyled = styled.li`
  padding-bottom: 10px;
  list-style: none;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.mrWhite};
  padding-right: 16px;

  a {
    color: inherit;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;
