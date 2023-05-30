import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledTableRow } from './table.styles';

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  customStyle?: CustomStyle;
}

const TableRow = forwardRef<HTMLTableRowElement, PropsWithChildren<TableRowProps>>(
  ({ children, customStyle, className, ...props }, ref) => {
    return (
      <StyledTableRow ref={ref} css={customStyle} className={clsx('tr', className)} {...props}>
        {children}
      </StyledTableRow>
    );
  }
);

export default TableRow;
