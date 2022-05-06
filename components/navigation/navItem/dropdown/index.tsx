import React from 'react';
import { useTheme } from 'styled-components';

import { useMediaQuery } from 'hooks/useMediaQuery/useMediaQuery';
import { DropdownDesktop } from 'components/navigation/navItem/dropdown/dropdownDesktop/DropdownDestktop';
import { DropdownMobile } from 'components/navigation/navItem/dropdown/dropdownMobile/DropdownMobile';
import { DropdownProps } from 'components/navigation/navItem/dropdown/Dropdown.types';

export const Dropdown = (props: DropdownProps) => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery({ minWidth: breakpoints.values.min.md });
  return <>{isDesktop ? <DropdownDesktop {...props} /> : <DropdownMobile {...props} />}</>;
};
