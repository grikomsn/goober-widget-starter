import { css } from "goober";
import { useEffect, useState } from "preact/hooks";

import { Widget } from "./ui/widget";

export const App = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleClose = (ev: KeyboardEvent) => {
      if (ev.key === "Escape" && ev.shiftKey) setVisible(false);
    };
    const handleOpen = (ev: KeyboardEvent) => {
      if (ev.key === "Escape" && !ev.shiftKey) setVisible(true);
    };
    window.addEventListener("keydown", handleClose);
    window.addEventListener("keydown", handleOpen);
    return () => {
      window.removeEventListener("keydown", handleClose);
      window.removeEventListener("keydown", handleOpen);
    };
  });

  return (
    <Widget data-visible={visible}>
      <h1 className={css({ fontWeight: "bold" })}>Hello, world!</h1>
      <p>
        This is an example widget, you can close it by clicking the button below or press <kbd>Shift+Esc</kbd>. To
        reopen it, press <kbd>Esc</kbd>.
      </p>
      <button
        className={css({ color: "red", "&:hover": { textDecoration: "underline" } })}
        onClick={() => setVisible(false)}
        type="button"
      >
        Close Widget
      </button>
    </Widget>
  );
};
