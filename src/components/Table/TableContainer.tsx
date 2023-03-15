import type { HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledTableContainer } from './table.styles';

interface TableContainerProps extends HTMLAttributes<HTMLDivElement> {
  customStyle?: CustomStyle;
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
