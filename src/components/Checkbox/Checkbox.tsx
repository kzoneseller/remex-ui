import type { CSSObject } from '@emotion/react';
import { useTheme } from '@emotion/react';
import type { FC, InputHTMLAttributes } from 'react';

import { StyledCheckbox } from './checkbox.styles';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  color?: 'blue' | 'black' | 'grey' | 'red';
  customStyle?: CSSObject;
}

const Checkbox: FC<CheckboxProps> = ({ color = 'blue', customStyle, ...props }) => {
  const { colors } = useTheme();

  const COLORS = {
    blue: colors.mainBlue,
    black: colors.mainBlack,
    grey: colors.mainGrey,
    red: colors.error,
  };

  return <StyledCheckbox type="checkbox" color={COLORS[color]} css={{ customStyle }} {...props} />;
};

export default Checkbox;
