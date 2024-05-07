import { css } from '@emotion/react';
import { lightColors } from 'constants/colors';
import fonts from 'constants/fonts';
import normalize from 'emotion-normalize';

import type { darkTheme, lightTheme } from './theme';

export const getGlobalStyles = (theme: typeof lightTheme | typeof darkTheme) => css`
  ${normalize};
  ${fonts};

  @font-face {
    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/Poppins-Black.ttf') format('truetype');
  }
  @font-face {
    font-family: Poppins;
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/Poppins-ExtraBold.ttf') format('truetype');
  }
  @font-face {
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/Poppins-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/Poppins-SemiBold.ttf') format('truetype');
  }
  @font-face {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/Poppins-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/Poppins-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/NotoSans-Black.ttf') format('truetype');
  }
  @font-face {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/NotoSans-ExtraBold.ttf') format('truetype');
  }
  @font-face {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/NotoSans-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/NotoSans-SemiBold.ttf') format('truetype');
  }
  @font-face {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/NotoSans-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/NotoSans-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/NotoSans-Light.ttf') format('truetype');
  }
  @font-face {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/NotoSans-ExtraLight.ttf') format('truetype');
  }
  @font-face {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/NotoSans-Thin.ttf') format('truetype');
  }

  @font-face {
    font-family: Noto Sans CJK;
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/NotoSansCJKkr-Black.otf') format('truetype');
  }
  @font-face {
    font-family: Noto Sans CJK;
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/NotoSansCJKkr-Bold.otf') format('truetype');
  }
  @font-face {
    font-family: Noto Sans CJK;
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/NotoSansKR-SemiBold.ttf') format('truetype');
  }
  @font-face {
    font-family: Noto Sans CJK;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://d2ydppcem070q4.cloudfront.net/fonts/NotoSansCJKkr-Regular.otf.ttf') format('truetype');
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
    font-family: Noto Sans, Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }

  body,
  html {
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    line-height: inherit;
    background-color: ${lightColors.bgBlue};
  }

  body,
  button,
  input,
  textarea {
    font-family: Noto Sans, Poppins, Roboto, Noto Sans KR, Noto Sans JP, sans-serif;
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
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    -webkit-appearance: none;
    margin: 0;
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
