import React, { useMemo } from 'react';

import { DropdownProps } from 'components/navigation/navItem/dropdown/Dropdown.types';
import { MenuSection } from 'components/navigation/navItem/dropdown/menuSection/MenuSection';
import { WrapperStyled } from 'components/navigation/navItem/dropdown/dropdownMobile/DropdownMobile.styles';

export const DropdownMobile = ({ sections, isVisible }: DropdownProps) => {
  const flattenSections = useMemo(() => sections.reduce((prev, curr) => prev.concat(curr)), [sections]);
  return (
    <WrapperStyled $isVisible={isVisible} aria-expanded={isVisible}>
      <MenuSection items={flattenSections} />
    </WrapperStyled>
  );
};
