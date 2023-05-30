import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledTableHead } from './table.styles';

interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  customStyle?: CustomStyle;
}

const TableHead = forwardRef<HTMLTableSectionElement, PropsWithChildren<TableHeadProps>>(
  ({ children, customStyle, className, ...props }, ref) => {
    return (
      <StyledTableHead ref={ref} css={customStyle} className={clsx('thead', className)} {...props}>
        {children}
      </StyledTableHead>
    );
  }
);

export default TableHead;
