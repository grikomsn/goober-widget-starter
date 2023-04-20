import { setup } from "goober";
import { prefix } from "goober/prefixer";
import { h, render } from "preact";

import { App } from "./app";
import { ScopedReset } from "./scoped-reset";
import { useTheme } from "./theme/provider";

setup(h, prefix, useTheme);

const root = document.createElement("div");
root.id = "goober-widget-root";

// eslint-disable-next-line react/no-children-prop
render(<ScopedReset children={<App />} />, (document.body.appendChild(root), root));
