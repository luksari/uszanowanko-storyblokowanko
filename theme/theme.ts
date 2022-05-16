import { headerContainer, headerMask, headerOverlay, localeFlag, navigation } from 'theme/zIndexes';

const xsMinWidth = 360;
const smMinWidth = 768;
const mdMinWidth = 992;
const lgMinWidth = 1200;

export const theme = {
  fontFamily: {
    azo: 'azo-sans-web, Open Sans, Sans-Serif',
  },
  breakpoints: {
    values: {
      min: {
        xs: xsMinWidth,
        sm: smMinWidth,
        md: mdMinWidth,
        lg: lgMinWidth,
      },
      max: {
        xs: xsMinWidth - 1,
        sm: smMinWidth - 1,
        md: mdMinWidth - 1,
        lg: lgMinWidth - 1,
      },
    },
    mq: {
      min: {
        xs: `@media (min-width: ${xsMinWidth}px)`,
        sm: `@media (min-width: ${smMinWidth}px)`,
        md: `@media (min-width: ${mdMinWidth}px)`,
        lg: `@media (min-width: ${lgMinWidth}px)`,
      },
    },
  },
  colors: {
    white: '#ffffff',
    blue: '#3772FF',
    darkGray: '#444545',
    linkBlue: '#76E5FC',
    lightBlack: '#2a2a2a',
    borderGrey: '#C9C9C9',
    black: '#000000',
    redAlert: '#ED6A5A',
    bluishGray: '#c6ccd8',
    green: '#92BA92',
    darkGreen: '#78938A',
  },
  sizes: {
    menuHeightMobile: 60,
    menuHeightDesktop: 86,
    menuSectionWidthDesktop: 338,
    headerContentMaxWidth: 518,
  },
  zIndexes: {
    navigation,
    localeFlag,
    headerMask,
    headerOverlay,
    headerContainer,
  },
};

export type Theme = typeof theme;
