import type { CSSObject } from '@emotion/react';
import { useTheme } from '@emotion/react';
import type { FC, InputHTMLAttributes } from 'react';

import { StyledRadio } from './radio.styles';

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  color?: 'blue' | 'black' | 'grey' | 'red';
  customStyle?: CSSObject;
}

const Radio: FC<RadioProps> = ({ color = 'blue', customStyle, ...props }) => {
  const { colors } = useTheme();

  const COLORS = {
    blue: colors.mainBlue,
    black: colors.mainBlack,
    grey: colors.mainGrey,
    red: colors.error,
  };

  return <StyledRadio type="radio" color={COLORS[color]} css={customStyle} {...props} />;
};

export default Radio;
