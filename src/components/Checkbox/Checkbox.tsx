import { useTheme } from '@emotion/react';
import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledCheckbox } from './checkbox.styles';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  color?: 'blue' | 'black' | 'grey' | 'red';
  customStyle?: CustomStyle;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ color = 'blue', customStyle, ...props }, ref) => {
  const { colors } = useTheme();

  const COLORS = {
    blue: colors.mainBlue,
    black: colors.mainBlack,
    grey: colors.mainGrey,
    red: colors.error,
  };

  return <StyledCheckbox ref={ref} type="checkbox" color={COLORS[color]} css={{ customStyle }} {...props} />;
});

export default Checkbox;
