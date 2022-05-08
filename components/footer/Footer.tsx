import React from 'react';

import { useTranslations } from 'hooks/useTranslations/useTranslations';

import {
  WrapperStyled,
  SectionStyled,
  ContainerStyled,
  SocialSection,
    CopyTextStyled
} from './Footer.styles';

export const Footer = () => {
  const { t } = useTranslations();
  return (
    <WrapperStyled>
      <ContainerStyled>
        <SectionStyled>
          <CopyTextStyled>Uszanowanko Programowanko &copy; {new Date().getFullYear()}</CopyTextStyled>
        </SectionStyled>
        <SocialSection>
        </SocialSection>
      </ContainerStyled>
    </WrapperStyled>
  );
};
