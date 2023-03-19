/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { CSSObject, Keyframes, SerializedStyles } from '@emotion/react';
import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import type { ColorKeys, ColorValues } from 'constants/colors';
import { darkColors, lightColors } from 'constants/colors';
import fonts, { FontsKeys, FontsValues } from 'constants/fonts';
import type { KeyframeKeys } from 'constants/keyframes';
import { keyframes } from 'constants/keyframes';
import type { FC, PropsWithChildren } from 'react';

import { getGlobalStyles } from './globalStyles';

export interface ThemeProviderProps {
  themeMode?: 'light' | 'dark';
}

export interface CustomTheme {
  colors: Record<ColorKeys, ColorValues>;
  keyframes: Record<KeyframeKeys, Keyframes>;
  fonts: Record<FontsKeys, FontsValues>;
}

export type CustomStyle = CSSObject | SerializedStyles;

const defaultTheme = {
  keyframes,
};

export const lightTheme = {
  ...defaultTheme,
  colors: lightColors,
  fonts,
};

export const darkTheme = {
  ...defaultTheme,
  colors: darkColors,
  fonts,
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
