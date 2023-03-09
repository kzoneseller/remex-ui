import type { CSSObject } from '@emotion/react';
import type { FC, InputHTMLAttributes } from 'react';
import { useTheme } from 'utils/theme';

import { StyledCheckbox } from './checkbox.styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: 'blue' | 'black' | 'grey' | 'red';
  customStyle?: CSSObject;
}

const Checkbox: FC<CheckboxProps> = ({ color = 'blue', checked = false, customStyle, ...props }) => {
  const { colors } = useTheme();

  const COLORS = {
    blue: colors.mainBlue,
    black: colors.mainBlack,
    grey: colors.mainGrey,
    red: colors.red,
  };

  return <StyledCheckbox type="checkbox" color={COLORS[color]} checked={checked} css={customStyle} {...props} />;
};

export default Checkbox;
