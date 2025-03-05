import { IconType } from 'react-icons';

export type SCFacilityItem = {
  isDark: boolean;
};

export type FacilityItemProps = {
  title: string;
  description: string;
  icon: IconType;
};
