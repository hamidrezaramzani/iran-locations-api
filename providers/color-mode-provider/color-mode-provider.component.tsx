import { type ReactNode } from 'react';

import { createContext, useMemo, useState } from 'react';

import {
  type ColorModeContextType,
  type ColorModeType,
} from './color-mode-provider.type';

export const ColorModeContext = createContext<ColorModeContextType | null>(
  null,
);

interface ColorModeProviderProps {
  children: ReactNode;
}

export const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  const [state, setState] = useState<ColorModeType>('dark');

  const value = useMemo(() => ({ state, setState }), [state]);

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
};
