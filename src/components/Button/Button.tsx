import type { CSSObject } from '@emotion/react';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { Colors } from '../../constants/colors';
import { StyledButton } from './button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'ghost';
  color?: 'blue' | 'black' | 'grey' | 'red';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  customStyle?: CSSObject;
}

const Button = ({
  variant = 'contained',
  color = 'blue',
  size = 'medium',
  fullWidth = false,
  customStyle,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const COLORS: Record<'blue' | 'black' | 'grey' | 'red', Colors> = {
    blue: 'mainBlue',
    black: 'mainBlack',
    grey: 'mainGrey',
    red: 'error',
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
