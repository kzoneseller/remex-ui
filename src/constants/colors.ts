const white = '#ffffff';
const black = '#000000';
const error = '#EF4E3A';
const success = '#07BC0C';

export const lightColors = {
  /* blue */
  mainBlue: '#002F87',
  lightBlue: '#005CB9',
  darkBlue: '#111C4E',
  ghostBlue: '#3876BA',
  /* black */
  mainBlack: '#222222',
  lightBlack: '#333333',
  darkBlack: black,
  ghostBlack: '#858585',
  /* grey */
  mainGrey: '#DCD8D7',
  lightGray: '#EAE9E7',
  darkGray: '#5C5C5C',
  ghostGray: '#F5F6F8',
  textGrey: '#9C9C9C',
  borderGrey: '#D9D8D6',
  grey3: '#ECECEC',
  /* common */
  white,
  bgBlue: '#F9FAFB',
  iconBlue: '#A1A0BD',
  border: '#E0DFF0',
  line: '#F6F7FB',
  amazon: '#008296',
  error,
  success,
  managementOrange: '#ff7a00',
} as const;

export const darkColors = {
  ...lightColors,
} as const;

export type ColorKeys = keyof typeof lightColors;

export type ColorValues = (typeof lightColors)[ColorKeys];
