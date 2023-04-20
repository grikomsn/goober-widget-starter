import "goober";

import type { WidgetTheme } from "./src/theme";

declare module "goober" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends WidgetTheme {
    //
  }
}
