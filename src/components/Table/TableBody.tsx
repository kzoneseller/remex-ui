import clsx from 'clsx';
import { TableSkeleton } from 'components/Skeleton';
import { Children, ComponentType, forwardRef, HTMLAttributes, isValidElement, PropsWithChildren, useMemo } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledTableBody } from './table.styles';

interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  customStyle?: CustomStyle;
  isLoading?: boolean;
  column?: number;
  row?: number;
}

const TableBody = forwardRef<HTMLTableSectionElement, PropsWithChildren<TableBodyProps>>(
  ({ children, isLoading = false, column, row, customStyle, className, ...props }, ref) => {
    const columnsByChildren = useMemo(() => {
      const tableRowComp = Children.toArray(children).find(
        child => isValidElement(child) && (child.type as ComponentType).displayName === 'TableRow'
      );

      return isValidElement(tableRowComp) ? Children.count(tableRowComp.props.children) : 1;
    }, [children]);

    return (
      <StyledTableBody ref={ref} css={customStyle} className={clsx('tbody', className)} {...props}>
        {isLoading ? <TableSkeleton column={column ?? columnsByChildren} row={row} /> : children}
      </StyledTableBody>
    );
  }
);

export default TableBody;
