import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledButton = styled.button<{
  variant?: 'contained' | 'outlined';
  color: string;
  size: 'small' | 'medium' | 'large';
  fullWidth: boolean;
}>`
  display: inline-flex;
  gap: 10px;
  flex-wrap: wrap;
  user-select: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};

  ${({ variant, color, theme: { colors } }) => {
    switch (variant) {
      case 'outlined':
        return css`
          background-color: ${colors.white};
          color: ${color};
          box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.04);
        `;
      default:
        return css`
          background-color: ${color};
          color: ${colors.white};
        `;
    }
  }};

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          height: 32px;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.004em;
          padding: 10px 16px;
        `;
      case 'large':
        return css`
          height: 56px;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          padding: 18px 36px;
        `;
      default:
        return css`
          height: 40px;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          padding: 6px 25px;
        `;
    }
  }};
`;
