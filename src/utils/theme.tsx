/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Keyframes } from '@emotion/react';
import { Global, ThemeProvider as EmotionThemeProvider, useTheme as EmotionUseTheme } from '@emotion/react';
import type { ColorKeys, ColorValues } from 'constants/colors';
import { darkColors, lightColors } from 'constants/colors';
import type { KeyframeKeys } from 'constants/keyframes';
import { keyframes } from 'constants/keyframes';
import type { FC, PropsWithChildren } from 'react';

import { getGlobalStyles } from './globalStyles';

interface ThemeProviderProps {
  themeMode?: 'light' | 'dark';
}

export interface CustomTheme {
  colors: Record<ColorKeys, ColorValues>;
  keyframes: Record<KeyframeKeys, Keyframes>;
}

const defaultTheme = {
  keyframes,
};

export const lightTheme = {
  ...defaultTheme,
  colors: lightColors,
};

export const darkTheme = {
  ...defaultTheme,
  colors: darkColors,
};

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

export const useTheme = () => EmotionUseTheme() as unknown as CustomTheme;
