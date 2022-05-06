import React from 'react';

import {
  ArrowStyled,
  ArrowWrapperStyled,
  WrapperStyled,
} from 'components/navigation/navItem/dropdown/dropdownDesktop/DropdownDesktop.styles';
import { DropdownProps } from 'components/navigation/navItem/dropdown/Dropdown.types';
import { MenuSection } from 'components/navigation/navItem/dropdown/menuSection/MenuSection';

export const DropdownDesktop = ({ sections, isVisible, isAlignedToRightSection }: DropdownProps) => {
  return (
    <WrapperStyled $isAlignedToRightSection={isAlignedToRightSection} $isVisible={isVisible} aria-expanded={isVisible}>
      <ArrowWrapperStyled $isAlignedToRightSection={isAlignedToRightSection}>
        <ArrowStyled />
      </ArrowWrapperStyled>
      {sections.map((items, index) => (
        <MenuSection items={items} key={index} />
      ))}
    </WrapperStyled>
  );
};
