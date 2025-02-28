import { createContext, useState } from "react";

export const ThemeContext = createContext({
  state: "",
  setState: (nextState: string) => {},
});

const ThemeProvider = ({ children }) => {
  const [state, setState] = useState("dark");
  return (
    <ThemeContext.Provider value={{ state, setState }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
