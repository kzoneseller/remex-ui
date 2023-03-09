import type { CSSObject } from '@emotion/react';
import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { useTheme } from 'utils/theme';

import { StyledButton } from './Button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined';
  color?: 'blue' | 'black' | 'grey' | 'red';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  customStyle?: CSSObject;
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
    red: colors.red,
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
