import { styled } from "goober";

// https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/css-reset/src/css-reset.tsx
export const ScopedReset = styled("div")`
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  font-family: ${({ theme }) => theme.fonts.body};
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  touch-action: manipulation;
  font-feature-settings: "kern";
  color: ${({ theme }) => theme.colors.gray[900]};

  & :where(*, *::before, *::after) {
    border-width: 0;
    border-style: solid;
    box-sizing: border-box;
    word-wrap: break-word;
  }

  & main {
    display: block;
  }

  & hr {
    border-top-width: 1px;
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  & :where(pre, code, kbd, samp) {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 1em;
  }

  & a {
    background-color: transparent;
    color: inherit;
    text-decoration: inherit;
  }

  & abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  & :where(b, strong) {
    font-weight: bold;
  }

  & small {
    font-size: 80%;
  }

  & :where(sub, sup) {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  & sub {
    bottom: -0.25em;
  }

  & sup {
    top: -0.5em;
  }

  & img {
    border-style: none;
  }

  & :where(button, input, optgroup, select, textarea) {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  & :where(button, input) {
    overflow: visible;
  }

  & :where(button, select) {
    text-transform: none;
  }

  &
    :where(
      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner
    ) {
    border-style: none;
    padding: 0;
  }

  & fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  & legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  & progress {
    vertical-align: baseline;
  }

  & textarea {
    overflow: auto;
  }

  & :where([type="checkbox"], [type="radio"]) {
    box-sizing: border-box;
    padding: 0;
  }

  & input[type="number"]::-webkit-inner-spin-button,
  & input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none !important;
  }

  & input[type="number"] {
    -moz-appearance: textfield;
  }

  & input[type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  & input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none !important;
  }

  & ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  & details {
    display: block;
  }

  & summary {
    display: list-item;
  }

  & template {
    display: none;
  }

  & [hidden] {
    display: none !important;
  }

  & :where(blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre) {
    margin: 0;
  }

  & button {
    background: transparent;
    padding: 0;
  }

  & fieldset {
    margin: 0;
    padding: 0;
  }

  & :where(ol, ul) {
    margin: 0;
    padding: 0;
  }

  & textarea {
    resize: vertical;
  }

  & :where(button, [role="button"]) {
    cursor: pointer;
  }

  & button::-moz-focus-inner {
    border: 0 !important;
  }

  & table {
    border-collapse: collapse;
  }

  & :where(h1, h2, h3, h4, h5, h6) {
    font-size: inherit;
    font-weight: inherit;
  }

  & :where(button, input, optgroup, select, textarea) {
    padding: 0;
    line-height: inherit;
    color: inherit;
  }

  & :where(img, svg, video, canvas, audio, iframe, embed, object) {
    display: block;
  }

  & :where(img, video) {
    max-width: 100%;
    height: auto;
  }

  & [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
    outline: none;
    box-shadow: none;
  }

  & select::-ms-expand {
    display: none;
  }
`;
