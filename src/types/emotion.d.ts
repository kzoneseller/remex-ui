import '@emotion/react';

import { CustomTheme } from 'utils/theme';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
