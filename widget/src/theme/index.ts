import { colors } from "./colors";
import { radius } from "./radius";
import { shadows } from "./shadows";
import { sizes } from "./sizes";
import { spacing } from "./spacing";
import { transition } from "./transition";
import { typography } from "./typography";

export const theme = {
  colors,
  radius,
  shadows,
  sizes,
  spacing,
  transition,
  ...typography,
};

export type WidgetTheme = typeof theme;
