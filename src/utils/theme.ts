import { darkColors, lightColors } from 'constants/colors';
import { keyframes } from 'constants/keyframes';

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
