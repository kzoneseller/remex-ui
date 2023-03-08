import '@emotion/react';

import type { lightColors as colors } from 'constants/colors';
import type { keyframes } from 'constants/keyframes';

declare module '@emotion/react' {
  export interface Theme {
    colors: Record<keyof typeof colors, string>;
    keyframes: Record<keyof typeof keyframes, string>;
  }
}
