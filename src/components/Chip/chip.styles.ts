import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { IconX } from '@tabler/icons-react';

export const StyledChip = styled.div<{
  variant: 'contained' | 'outlined';
  color: string;
}>`
  width: fit-content;
  border-radius: 10px;
  padding: 6px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;

  & > span {
    padding: 0 12px;
  }

  ${({ variant, color, theme: { colors } }) => VARIANT[variant]({ color, backgroundColor: colors.white })};
`;

interface Variant {
  color: string;
  backgroundColor: string;
}

export const VARIANT: Record<'contained' | 'outlined', ({ color, backgroundColor }: Variant) => SerializedStyles> = {
  contained: ({ color, backgroundColor }: Variant) => css`
    background-color: ${color};
    color: ${backgroundColor};
  `,
  outlined: ({ color, backgroundColor }: Variant) => css`
    background-color: ${backgroundColor};
    color: ${color};
    border: 1px solid ${color};
  `,
};

export const DeleteIcon = styled(IconX)`
  cursor: pointer;
  margin-left: -4px;
  margin-right: 10px;
`;
