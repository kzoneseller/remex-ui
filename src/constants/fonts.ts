import { css } from '@emotion/react';

const fonts = {
  h1: css`
    font-size: 2rem !important;
    font-weight: bold !important;
  `,
  h2: css`
    font-size: 1.5rem !important;
    font-weight: bold !important;
  `,
  h3: css`
    font-size: 1.25rem !important;
    font-weight: bold !important;
  `,
  h4: css`
    font-size: 1.125rem !important;
    font-weight: bold !important;
  `,
  h5: css`
    font-size: 1rem !important;
    font-weight: bold !important;
  `,
  h6: css`
    font-size: 0.875rem !important;
    font-weight: bold !important;
  `,
  h7: css`
    font-size: 0.8125rem !important;
    font-weight: bold !important;
  `,
  p1: css`
    font-size: 1rem !important;
  `,
  p2: css`
    font-size: 0.9375rem !important;
  `,
  p3: css`
    font-size: 0.875rem !important;
  `,
  p3Medium: css`
    font-size: 0.875rem !important;
    font-weight: 500 !important;
  `,
  p4: css`
    font-size: 0.8125rem !important;
  `,
  p5: css`
    font-size: 0.75rem !important;
  `,
};

export type FontsKeys = keyof typeof fonts;

export type FontsValues = (typeof fonts)[FontsKeys];
export default fonts;
