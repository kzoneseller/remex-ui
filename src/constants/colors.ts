const white = '#ffffff';
const black = '#000000';
const error = '#EF4E3A';

const lightColors = {
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
  /* common */
  white,
  bgBlue: '#F9FAFB',
  iconBlue: '#A1A0BD',
  border: '#E0DFF0',
  error,
};

const darkColors = {
  ...lightColors,
};

export type Colors = keyof typeof lightColors;

export { darkColors, lightColors };
