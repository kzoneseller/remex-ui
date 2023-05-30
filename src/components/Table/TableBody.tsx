import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledTableBody } from './table.styles';

interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  customStyle?: CustomStyle;
}

const TableBody = forwardRef<HTMLTableSectionElement, PropsWithChildren<TableBodyProps>>(
  ({ children, customStyle, className, ...props }, ref) => {
    return (
      <StyledTableBody ref={ref} css={customStyle} className={clsx('tbody', className)} {...props}>
        {children}
      </StyledTableBody>
    );
  }
);

export default TableBody;
