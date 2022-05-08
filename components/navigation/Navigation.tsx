import React, { useCallback, useState } from 'react';

import { LocaleDropdown } from 'components/navigation/localeDropdown/LocaleDropdown';
import { useTranslations } from 'hooks/useTranslations/useTranslations';
import { useBodyClass } from '@/hooks/useBodyClass/useBodyClass';

import {
  WrapperStyled,
  ContainerStyled,
  LogoLinkStyled,
  LogoStyled,
  ListStyled,
  LocaleItemStyled,
  BurgerStyled,
  BurgerIconStyled,
  ActionsWrapperStyled,
  ListWrapperStyled,
} from './Navigation.styles';

export const Navigation = () => {
  const { t } = useTranslations();

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = useCallback(() => setIsExpanded((prev) => !prev), []);

  useBodyClass({ condition: isExpanded, className: 'overflow-hidden' });

  return (
    <WrapperStyled $isExpanded={isExpanded}>
      <ContainerStyled>
        <BurgerStyled aria-label={isExpanded ? 'Zwiń' : 'Rozwiń'} onClick={toggleIsExpanded}>
          <BurgerIconStyled />
        </BurgerStyled>
        <LogoLinkStyled href={'/'} aria-label={'Uszanowanko Storyblokowanko logo'}>
          <LogoStyled />
        </LogoLinkStyled>
        <ListWrapperStyled $isExpanded={isExpanded}>
          <ListStyled aria-expanded={isExpanded}>
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
