import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledTableData, StyledTableHeadData } from './table.styles';

interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  component?: 'th' | 'td';
  customStyle?: CustomStyle;
}

const TableCell = forwardRef<HTMLTableCellElement, PropsWithChildren<TableCellProps>>(
  ({ component = 'td', customStyle, children, className, ...props }, ref) => {
    return component === 'th' ? (
      <StyledTableHeadData ref={ref} css={customStyle} className={clsx(component, className)} {...props}>
        {children}
      </StyledTableHeadData>
    ) : (
      <StyledTableData ref={ref} css={customStyle} className={clsx(component, className)} {...props}>
        {children}
      </StyledTableData>
    );
  }
);

export default TableCell;
