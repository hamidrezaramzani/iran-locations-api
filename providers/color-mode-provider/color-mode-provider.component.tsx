import { createContext, useState } from "react";
import { ColorModeType } from "./color-mode-provider.type";

export const ColorModeContext = createContext({
  state: "light",
  setState: (nextState: ColorModeType) => {},
});

export const ColorModeProvider = ({ children }) => {
  const [state, setState] = useState<ColorModeType>("dark");
  return (
    <ColorModeContext.Provider value={{ state, setState }}>
      {children}
    </ColorModeContext.Provider>
  );
};
