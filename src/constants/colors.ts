const white = '#ffffff';
const black = '#000000';

const lightColors = {
  /* blue */
  mainBlue: '#002F87',
  lightBlue: '#005CB9',
  darkBlue: '#111C4E',
  /* black */
  mainBlack: '#191919',
  lightBlack: '#222222',
  darkBlack: black,
  /* grey */
  mainGrey: '#D9D8D6',
  lightGray: '#9C9C9C',
  darkGray: '#5C5C5C',
  /* common */
  white,
  bgBlue: '#F9FAFB',
};

const darkColors = {
  ...lightColors,
};

export { darkColors, lightColors };
