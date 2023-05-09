import type { HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledTableBody } from './table.styles';

interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  customStyle?: CustomStyle;
}

const TableBody = forwardRef<HTMLTableSectionElement, PropsWithChildren<TableBodyProps>>(
  ({ children, customStyle, ...props }, ref) => {
    return (
      <StyledTableBody ref={ref} css={customStyle} {...props}>
        {children}
      </StyledTableBody>
    );
  }
);

export default TableBody;
