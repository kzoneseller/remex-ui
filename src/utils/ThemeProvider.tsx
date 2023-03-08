import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import type { FC, PropsWithChildren } from 'react';

import { getGlobalStyles } from './globalStyles';
import { darkTheme, lightTheme } from './theme';

interface ThemeProviderProps {
  themeMode?: 'light' | 'dark';
}

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({ children, themeMode = 'light' }) => {
  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  return (
    <EmotionThemeProvider theme={theme}>
      <Global styles={getGlobalStyles(theme)} />
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
