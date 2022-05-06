import React, { useCallback } from 'react';
import { useTheme } from 'styled-components';

import { useMediaQuery } from 'hooks/useMediaQuery/useMediaQuery';
import { Dropdown } from 'components/navigation/navItem/dropdown';
import { NavItemProps } from 'components/navigation/navItem/NavItem.types';

import { ExpandMoreIconStyled, ButtonStyled, WrapperStyled, IconStyled } from './NavItem.styles';

export const NavItem = ({
  item,
  isDropdownExpanded,
  onExpandChange,
  isDropdownAlignedToRightSection = false,
}: NavItemProps) => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery({ minWidth: breakpoints.values.min.sm });
  const expandDropdown = useCallback(() => isDesktop && onExpandChange(true), [isDesktop, onExpandChange]);
  const collapseDropdown = useCallback(() => isDesktop && onExpandChange(false), [isDesktop, onExpandChange]);
  const toggleDropdown = useCallback(
    () => (isDropdownExpanded ? onExpandChange(false) : onExpandChange(true)),
    [isDropdownExpanded, onExpandChange],
  );

  return (
    <WrapperStyled $isExpanded={isDropdownExpanded} onMouseEnter={expandDropdown} onMouseLeave={collapseDropdown}>
      <ButtonStyled onClick={toggleDropdown}>
        <span>{item.content}</span>
        <IconStyled $isExpanded={isDropdownExpanded}>
          <ExpandMoreIconStyled />
        </IconStyled>
      </ButtonStyled>
      <Dropdown
        isAlignedToRightSection={isDropdownAlignedToRightSection}
        isVisible={isDropdownExpanded}
        sections={item.sections}
      />
    </WrapperStyled>
  );
};
