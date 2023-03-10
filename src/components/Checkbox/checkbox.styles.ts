import styled from '@emotion/styled';
import type { InputHTMLAttributes } from 'react';

export const StyledCheckbox = styled.input<{ color: string } & InputHTMLAttributes<HTMLInputElement>>`
  border-color: ${({ color }) => color};
  background-repeat: no-repeat;
  animation: ${({ theme: { keyframes } }) => keyframes.checkmark} 0.2s ease-in-out;
  flex-shrink: 0;
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  appearance: none;
  border-width: 1px;
  border-radius: 0.5rem;
  transition: all 0.2s;

  :checked {
    ${({ disabled, color, theme: { colors } }) => ({
      transition: 'all 0.2s',
      color: disabled ? colors.lightGray : color,
      backgroundColor: disabled ? colors.lightGray : color,
      backgroundImage: `linear-gradient(-45deg, transparent 65%, ${disabled ? colors.lightGray : color} 65.99%), 
        linear-gradient(45deg, transparent 75%, ${disabled ? colors.lightGray : color} 75.99%),
        linear-gradient(-45deg, ${disabled ? colors.lightGray : color} 40%, transparent 40.99%),
        linear-gradient(45deg, ${disabled ? colors.lightGray : color} 30%, ${colors.white} 30.99%, ${
        colors.white
      } 40%, transparent 40.99%),
        linear-gradient(-45deg, ${colors.white} 50%, ${disabled ? colors.lightGray : color} 50.99%)`,
    })};
  }

  :disabled {
    cursor: default;
    border-color: ${({ theme: { colors } }) => colors.lightGray};
  }
`;
