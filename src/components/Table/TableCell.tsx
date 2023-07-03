import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledTableData, StyledTableHeadData } from './table.styles';

interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  component?: 'th' | 'td';
  hideLine?: boolean;
  customStyle?: CustomStyle;
}

const TableCell = forwardRef<HTMLTableCellElement, PropsWithChildren<TableCellProps>>(
  ({ component = 'td', hideLine = false, customStyle, children, className, ...props }, ref) => {
    return component === 'th' ? (
      <StyledTableHeadData
        ref={ref}
        css={customStyle}
        className={clsx(component, className)}
        hideLine={hideLine}
        {...props}
      >
        {children}
      </StyledTableHeadData>
    ) : (
      <StyledTableData
        ref={ref}
        css={customStyle}
        className={clsx(component, className)}
        hideLine={hideLine}
        {...props}
      >
        {children}
      </StyledTableData>
    );
  }
);

export default TableCell;
