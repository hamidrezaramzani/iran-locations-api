import { type ReactNode } from 'react';

export type ColorModeType = 'dark' | 'light';

export type ColorModeProviderProps = {
  children: ReactNode;
};
export type ColorModeContextType = {
  state: ColorModeType;
  setState: (_nextState: ColorModeType) => void;
};
