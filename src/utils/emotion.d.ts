import '@emotion/react';

import type { lightColors as Colors } from '../constants/colors';
import type { keyframes } from '../constants/keyframes';

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    keyframes: Record<keyof keyframes, keyframes[keyof keyframes]>;
  }
}
