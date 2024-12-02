import clsx from 'clsx';
import { TableSkeleton } from 'components/Skeleton';
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledTableBody } from './table.styles';

type TableBodyLoadingType = { isLoading?: false } | { isLoading: true; column: number };

type TableBodyProps = HTMLAttributes<HTMLTableSectionElement> & {
  customStyle?: CustomStyle;
  row?: number;
} & TableBodyLoadingType;

const TableBody = forwardRef<HTMLTableSectionElement, PropsWithChildren<TableBodyProps>>(
  ({ children, isLoading = false, row, customStyle, className, ...props }, ref) => {
    return (
      <StyledTableBody ref={ref} css={customStyle} className={clsx('tbody', className)} {...props}>
        {isLoading ? <TableSkeleton column={(props as { column: number }).column} row={row} /> : children}
      </StyledTableBody>
    );
  }
);

export default TableBody;
