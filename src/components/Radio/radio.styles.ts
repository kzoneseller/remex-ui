import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';

export const StyledRadio = styled.input<{ color: string } & InputHTMLAttributes<HTMLInputElement>>`
  flex-shrink: 0;
  --chkbg: var(--bc);
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 9999px;
  border-width: 1px;
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-border-opacity: 0.2;
  transition: background, box-shadow var(--animation-input, 0.2s) ease-in-out;

  :checked {
    background-color: ${({ color }) => color};
    animation: radiomark 0.2s ease-in-out;
    box-shadow: ${({ theme: { colors } }) => `0 0 0 4px ${colors.white} inset, 0 0 0 4px ${colors.white} inset`};
  }

  :disabled {
    cursor: default;
    border: none;
    color: ${({ theme: { colors } }) => colors.lightGray};
    background-color: ${({ theme: { colors } }) => colors.lightGray};
  }
`;
