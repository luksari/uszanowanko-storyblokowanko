import { MenuItem } from 'components/navigation/Navigation.types';

export type NavItemProps = {
  item: MenuItem;
  isDropdownExpanded: boolean;
  onExpandChange: (value: boolean) => void;
  isDropdownAlignedToRightSection: boolean;
};
