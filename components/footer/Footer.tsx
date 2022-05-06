import React, { useMemo } from 'react';

import { useTranslations } from 'hooks/useTranslations/useTranslations';

import {
  CopyTextStyled,
  WrapperStyled,
  LogoLinkStyled,
  SectionStyled,
  ContainerStyled,
  SocialSection,
} from './Footer.styles';

export const Footer = () => {
  const { t } = useTranslations();
  return (
    <WrapperStyled>
      <ContainerStyled>
        <SectionStyled>
          <h2>
            <LogoLinkStyled href={'/'}>
            </LogoLinkStyled>
          </h2>
          <CopyTextStyled>Uszanowanko Programowanko &copy; {new Date().getFullYear()}</CopyTextStyled>
        </SectionStyled>
        <SocialSection>
        </SocialSection>
      </ContainerStyled>
    </WrapperStyled>
  );
};
