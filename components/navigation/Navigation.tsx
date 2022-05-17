import React, { useCallback, useState } from 'react';
import Image from 'next/image';

import { LocaleDropdown } from 'components/navigation/localeDropdown/LocaleDropdown';
import { useBodyClass } from '@/hooks/useBodyClass/useBodyClass';
import { useStoryblokContext } from '@/hooks/useStoryblokContext/useStoryblokContext';
import { useLocale } from '@/hooks/useLocale/useLocale';
import { I18nLanguage } from '@/context/localeContext/LocaleContext.types';

import {
  ActionsWrapperStyled,
  BurgerStyled,
  ContainerStyled,
  ListStyled,
  ListWrapperStyled,
  LocaleItemStyled,
  LogoImageStyled,
  LogoLinkStyled,
  NavListStyled,
  StyledInternalLink,
  WrapperStyled,
} from './Navigation.styles';

export const Navigation = () => {
  const { links } = useStoryblokContext();
  const { locale } = useLocale();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = useCallback(() => setIsExpanded((prev) => !prev), []);
  const homeHref = locale === I18nLanguage.Pl ? '/' : `/${locale}`;

  useBodyClass({ condition: isExpanded, className: 'overflow-hidden' });

  return (
    <WrapperStyled $isExpanded={isExpanded}>
      <ContainerStyled>
        <BurgerStyled aria-label={isExpanded ? 'Zwiń' : 'Rozwiń'} onClick={toggleIsExpanded}>
          <Image
            alt={'burger icon to expand menu'}
            src={'/assets/svg/borgir.svg'}
            layout={'fill'}
            objectFit={'cover'}
          />
        </BurgerStyled>
        <LogoLinkStyled href={homeHref}>
          <LogoImageStyled objectFit={'cover'} layout={'fill'} aria-label={'Uszanowanko Storyblokowanko logo'} />
        </LogoLinkStyled>
        <ListWrapperStyled $isExpanded={isExpanded}>
          <ListStyled aria-expanded={isExpanded}>
            <NavListStyled>
              {links?.map((link) => (
                <StyledInternalLink key={link.uuid} href={link.slug}>
                  {link.name}
                </StyledInternalLink>
              ))}
            </NavListStyled>
            <ActionsWrapperStyled>
              <LocaleItemStyled>
                <LocaleDropdown />
              </LocaleItemStyled>
            </ActionsWrapperStyled>
          </ListStyled>
        </ListWrapperStyled>
      </ContainerStyled>
    </WrapperStyled>
  );
};
