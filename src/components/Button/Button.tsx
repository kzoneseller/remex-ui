import type { CSSObject } from '@emotion/react';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import { useTheme } from 'utils/theme';

import { StyledButton } from './button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'ghost';
  color?: 'blue' | 'black' | 'grey' | 'red';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  customStyle?: CSSObject;
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (
    { variant = 'contained', color = 'blue', size = 'medium', fullWidth = false, customStyle, children, ...props },
    ref
  ) => {
    const { colors } = useTheme();

    const COLORS = {
      blue: colors.mainBlue,
      black: colors.mainBlack,
      grey: colors.mainGrey,
      red: colors.error,
    };

    return (
      <StyledButton
        ref={ref}
        css={customStyle}
        variant={variant}
        color={COLORS[color]}
        size={size}
        fullWidth={fullWidth}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
