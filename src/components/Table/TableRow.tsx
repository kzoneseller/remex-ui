import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledTableRow } from './table.styles';

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  hideLine?: boolean;
  customStyle?: CustomStyle;
}

const TableRow = forwardRef<HTMLTableRowElement, PropsWithChildren<TableRowProps>>(
  ({ children, hideLine = false, customStyle, className, ...props }, ref) => {
    return (
      <StyledTableRow ref={ref} css={customStyle} className={clsx('tr', className)} hideLine={hideLine} {...props}>
        {children}
      </StyledTableRow>
    );
  }
);

TableRow.displayName = 'TableRow';
export default TableRow;
