import React from 'react';

import { Footer } from 'components/footer/Footer';
import { Navigation } from 'components/navigation/Navigation';
import { Helmet } from 'components/helmet/Helmet';
import { LayoutProps } from 'components/layout/Layout.types';

import { ContentStyled, LayoutWrapperStyled } from './Layout.styles';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Helmet />
      <LayoutWrapperStyled>
        <Navigation />
        <ContentStyled>{children}</ContentStyled>
        <Footer />
      </LayoutWrapperStyled>
    </>
  );
};
