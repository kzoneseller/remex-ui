import type { HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledTableData, StyledTableHeadData } from './table.styles';

interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  component?: 'th' | 'td';
  customStyle?: CustomStyle;
}

const TableCell = forwardRef<HTMLTableCellElement, PropsWithChildren<TableCellProps>>(
  ({ component = 'td', customStyle, children, ...props }, ref) => {
    return component === 'th' ? (
      <StyledTableHeadData ref={ref} css={customStyle} {...props}>
        {children}
      </StyledTableHeadData>
    ) : (
      <StyledTableData ref={ref} css={customStyle}>
        {children}
      </StyledTableData>
    );
  }
);

export default TableCell;
