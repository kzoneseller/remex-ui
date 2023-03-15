/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Keyframes } from '@emotion/react';
import { Global, ThemeProvider as EmotionThemeProvider, useTheme as EmotionUseTheme } from '@emotion/react';
import type { ColorKeys, ColorValues } from 'constants/colors';
import type { KeyframeKeys } from 'constants/keyframes';
import type { FC, PropsWithChildren } from 'react';

import { getGlobalStyles } from './globalStyles';
import { darkTheme, lightTheme } from './theme';

interface ThemeProviderProps {
  themeMode?: 'light' | 'dark';
}

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({ children, themeMode = 'light' }) => {
  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  return (
    // @ts-ignore
    <EmotionThemeProvider theme={theme}>
      <Global styles={getGlobalStyles(theme)} />
      {children}
    </EmotionThemeProvider>
  );
};

interface UseTheme {
  colors: Record<ColorKeys, ColorValues>;
  keyframes: Record<KeyframeKeys, Keyframes>;
}

export const useTheme = () => EmotionUseTheme() as unknown as UseTheme;
