import { useTheme } from '@emotion/react';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledButton } from './button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'ghost' | 'link';
  color?: 'blue' | 'black' | 'grey' | 'red';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  isLoading?: boolean;
  customStyle?: CustomStyle;
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (
    {
      variant = 'contained',
      color = 'blue',
      size = 'medium',
      fullWidth = false,
      isLoading = false,
      customStyle,
      children,
      ...props
    },
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
        isLoading={isLoading}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
