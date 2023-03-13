import '@emotion/react';

import { lightColors as colors } from 'constants/colors';
import { keyframes } from 'constants/keyframes';

declare module '@emotion/react' {
  export interface Theme {
    colors: Record<keyof typeof colors, colors>;
    keyframes: Record<keyof keyframes, keyframes>;
  }
}
