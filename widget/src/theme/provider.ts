import type { DefaultTheme } from "goober";
import { createContext } from "preact";
import { useContext } from "preact/hooks";

import { theme } from ".";

export const ThemeContext = createContext<DefaultTheme>(theme);

export const useTheme = () => useContext(ThemeContext);
