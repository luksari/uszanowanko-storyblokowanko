import React, { FC, useCallback, useMemo, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { useLocale } from 'hooks/useLocale/useLocale';
import { i18nConfig } from 'i18n/i18n.config';
import { I18nLanguage } from '@/context/localeContext/LocaleContext.types';

import {
  WrapperStyled,
  ButtonStyled,
  DropdownStyled,
  FlagPL,
  FlagEN,
  FlagES,
  InactiveFlagItemStyled,
  InactiveFlagLinkStyled,
} from './LocaleDropdown.styles';

const localeComponentMap: Record<I18nLanguage, FC> = {
  [I18nLanguage.Pl]: FlagPL,
  [I18nLanguage.En]: FlagEN,
  [I18nLanguage.Es]: FlagES,
};

export const LocaleDropdown = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { locale: currentLocale, alternativeSlugs } = useLocale();
  const inactiveLocales = useMemo(
    () => i18nConfig.locales.filter((locale) => locale !== currentLocale),
    [currentLocale],
  );
  const ActiveFlag = useMemo(() => localeComponentMap[currentLocale], [currentLocale]);
  const refWrapper = useRef<HTMLDivElement>(null);

  const toggleIsExpanded = useCallback(() => setIsExpanded((state) => !state), []);

  useOnClickOutside(refWrapper, () => setIsExpanded(false));

  return (
    <WrapperStyled ref={refWrapper}>
      <ButtonStyled onClick={toggleIsExpanded}>
        <ActiveFlag />
      </ButtonStyled>
      <DropdownStyled aria-expanded={isExpanded} $isExpanded={isExpanded}>
        {inactiveLocales.map((locale) => {
          const InactiveFlag = localeComponentMap[locale];
          return (
            <InactiveFlagItemStyled key={locale} onClick={toggleIsExpanded}>
              <InactiveFlagLinkStyled href={alternativeSlugs?.[locale] ?? '/'} locale={locale} aria-label={locale}>
                <InactiveFlag />
              </InactiveFlagLinkStyled>
            </InactiveFlagItemStyled>
          );
        })}
      </DropdownStyled>
    </WrapperStyled>
  );
};
