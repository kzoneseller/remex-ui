import { css } from '@emotion/react';

const fonts = {
  h1: css`
    font-size: 2rem;
    font-weight: bold;
  `,
  h2: css`
    font-size: 1.5rem;
    font-weight: bold;
  `,
  h3: css`
    font-size: 1.25rem;
    font-weight: bold;
  `,
  h4: css`
    font-size: 1.125rem;
    font-weight: bold;
  `,
  h5: css`
    font-size: 1rem;
    font-weight: bold;
  `,
  h6: css`
    font-size: 0.875rem;
    font-weight: bold;
  `,
  h7: css`
    font-size: 0.8125rem;
    font-weight: bold;
  `,
  p1: css`
    font-size: 1rem;
  `,
  p2: css`
    font-size: 0.9375rem;
  `,
  p3: css`
    font-size: 0.875rem;
  `,
  p3Medium: css`
    font-size: 0.875rem;
    font-weight: 500;
  `,
  p4: css`
    font-size: 0.8125rem;
  `,
  p5: css`
    font-size: 0.75rem;
  `,
};

export type FontsKeys = keyof typeof fonts;

export type FontsValues = (typeof fonts)[FontsKeys];
export default fonts;
