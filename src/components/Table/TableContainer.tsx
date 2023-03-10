import type { CSSObject } from '@emotion/react';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

import { StyledTableContainer } from './table.styles';

interface TableContainerProps extends HTMLAttributes<HTMLDivElement> {
  customStyle?: CSSObject;
}

const TableContainer = forwardRef<HTMLDivElement, PropsWithChildren<TableContainerProps>>(
  ({ customStyle, children, ...props }, ref) => {
    return (
      <StyledTableContainer ref={ref} css={customStyle} {...props}>
        {children}
      </StyledTableContainer>
    );
  }
);

export default TableContainer;
