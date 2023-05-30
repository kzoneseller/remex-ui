import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledTable } from './table.styles';

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  customStyle?: CustomStyle;
}

const Table = forwardRef<HTMLTableElement, PropsWithChildren<TableProps>>(
  ({ customStyle, children, className, ...props }, ref) => {
    return (
      <StyledTable ref={ref} css={customStyle} className={clsx('table', className)} {...props}>
        {children}
      </StyledTable>
    );
  }
);

export default Table;
