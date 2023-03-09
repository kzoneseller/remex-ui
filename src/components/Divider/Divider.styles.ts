import { css } from '@emotion/react';

const DividerStyle = css`
  display: flex;
  align-items: center;
  align-self: stretch;
  white-space: nowrap;
  user-select: none;

  :not(:empty) {
    gap: 1rem;
  }
`;

export default DividerStyle;
