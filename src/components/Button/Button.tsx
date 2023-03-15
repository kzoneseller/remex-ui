import { useTheme } from '@emotion/react';
import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledButton } from './button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'ghost';
  color?: 'blue' | 'black' | 'grey' | 'red';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  customStyle?: CustomStyle;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  variant = 'contained',
  color = 'blue',
  size = 'medium',
  fullWidth = false,
  customStyle,
  children,
  ...props
}) => {
  const { colors } = useTheme();

  const COLORS = {
    blue: colors.mainBlue,
    black: colors.mainBlack,
    grey: colors.mainGrey,
    red: colors.error,
  };

  return (
    <StyledButton
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
};

export default Button;
