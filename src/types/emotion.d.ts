import '@emotion/react';

import type { Keyframes } from '@emotion/react';
import type { ColorKeys, ColorValues } from 'constants/colors';
import type { KeyframeKeys } from 'constants/keyframes';

declare module '@emotion/react' {
  export interface Theme {
    colors: Record<ColorKeys, ColorValues>;
    keyframes: Record<KeyframeKeys, Keyframes>;
  }
}
