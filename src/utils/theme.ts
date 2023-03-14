import { darkColors, lightColors } from 'constants/colors';
import { keyframes } from 'constants/keyframes';

const defaultTheme = {
  keyframes,
};

const lightTheme = {
  ...defaultTheme,
  colors: lightColors,
};

const darkTheme = {
  ...defaultTheme,
  colors: darkColors,
};

export { darkTheme, lightTheme };
