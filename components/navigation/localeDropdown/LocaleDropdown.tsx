import React, { useCallback, useMemo, useRef, useState } from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { i18nConfig } from 'i18n/i18n.config';

import { WrapperStyled, ButtonStyled, DropdownStyled } from './LocaleDropdown.styles';

// const localeComponentMap: Record<SbLanguage, FC> = {
//   [SbLanguage.Pl]: FlagPL,
//   [SbLanguage.En]: FlagGB,
//   [SbLanguage.Es]: FlagDE,
// };

export const LocaleDropdown = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  // const { loc } = useLocale();
  // const inactiveLocales = useMemo(
  //   () => i18nConfig.locales.filter((locale) => locale !== currentLocale),
  //   [currentLocale],
  // );
  // const ActiveFlag = useMemo(() => localeComponentMap[currentLocale], [currentLocale]);
  const refWrapper = useRef<HTMLDivElement>(null);

  const toggleIsExpanded = useCallback(() => setIsExpanded((state) => !state), []);

  return (
    <WrapperStyled ref={refWrapper}>
      <ButtonStyled onClick={toggleIsExpanded}>{/*<ActiveFlag />*/}</ButtonStyled>
      <DropdownStyled aria-expanded={isExpanded} $isExpanded={isExpanded}>
        {/*{inactiveLocales.map((locale) => {*/}
        {/*  const InactiveFlag = localeComponentMap[locale];*/}
        {/*  return (*/}
        {/*    <InactiveFlagItemStyled key={locale}>*/}
        {/*      <InactiveFlagLinkStyled*/}
        {/*        to={alternativeSlugs?.[locale] ?? '/'}*/}
        {/*        hrefLang={locale}*/}
        {/*        aria-label={locale}*/}
        {/*        onClick={toggleIsExpanded}*/}
        {/*      >*/}
        {/*        <InactiveFlag />*/}
        {/*      </InactiveFlagLinkStyled>*/}
        {/*    </InactiveFlagItemStyled>*/}
        {/*  );*/}
        {/*})}*/}
      </DropdownStyled>
    </WrapperStyled>
  );
};
