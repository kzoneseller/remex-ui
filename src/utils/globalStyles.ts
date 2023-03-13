import { css } from '@emotion/react';
import normalize from 'emotion-normalize';

import type { darkTheme, lightTheme } from './theme';

export const getGlobalStyles = (theme: typeof lightTheme | typeof darkTheme) => css`
  ${normalize};

  @font-face {
    font-family: Min Sans;
    src: url(https://cdn.jsdelivr.net/gh/poposnail61/min-sans@main/web/css/minsans-dynamic-subset.css);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1em;
    font-weight: normal;
    margin: 0;
  }

  * {
    ::-webkit-scrollbar {
      display: none;
    }

    ::-webkit-scrollbar-track {
      display: none;
    }

    ::-webkit-scrollbar-thumb {
      display: none;
    }

    &:focus {
      outline: none !important;
      box-shadow: none;
    }
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
  }

  ::before,
  ::after {
    --tw-content: '';
  }

  html {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    tab-size: 4;
    font-family: Min Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
  }

  body,
  html {
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    line-height: inherit;
  }

  body,
  button,
  input,
  textarea {
    font-family: Min Sans, Roboto, Noto Sans KR, Noto Sans JP, sans-serif;
    font-size: 12px;
    line-height: 18px;
    -webkit-appearance: none;
  }

  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }

  abbr:where([title]) {
    text-decoration: underline dotted;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
  }

  :-moz-focusring {
    outline: auto;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  summary {
    display: list-item;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  legend {
    padding: 0;
  }

  ol,
  ul,
  menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 1;
  }

  button,
  [role='button'] {
    cursor: pointer;
  }

  :disabled {
    cursor: default;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  [hidden] {
    display: none;
  }

  :root {
    --mainBlue: ${theme.colors.mainBlue};
    --lightBlue: ${theme.colors.lightBlue};
    --darkBlue: ${theme.colors.darkBlue};
    --mainGrey: ${theme.colors.mainGrey};
    --lightGray: ${theme.colors.lightGray};
    --darkGray: ${theme.colors.darkGray};
    --mainBlack: ${theme.colors.mainBlack};
    --lightBlack: ${theme.colors.lightBlack};
    --darkBlack: ${theme.colors.darkBlack};
  }

  input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  .react-select-container {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.004em;
  }

  .react-select-container > div:first-of-type {
    border: 1px solid var(--mainGrey);
    color: var(--darkGrey);
  }

  #react-select-3-placeholder {
    color: var(--mainGrey);
  }
`;
