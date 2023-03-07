import { css, Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import normalize from 'emotion-normalize';
import type { FC, PropsWithChildren } from 'react';

import { darkTheme, lightTheme } from './utils/theme';

interface ThemeProviderProps {
  themeMode?: 'light' | 'dark';
}

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({ children, themeMode = 'light' }) => {
  return (
    <EmotionThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
      <Global
        styles={css`
          ${normalize}
          h1, h2, h3, h4, h5, h6 {
            font-size: 1em;
            font-weight: normal;
            margin: 0;
          }
        `}
      />
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
