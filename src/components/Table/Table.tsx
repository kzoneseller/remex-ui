import type { HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledTable } from './table.styles';

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  customStyle?: CustomStyle;
}

const Table = forwardRef<HTMLTableElement, PropsWithChildren<TableProps>>(({ customStyle, children, ...props }) => {
  return (
    <StyledTable css={customStyle} {...props}>
      {children}
    </StyledTable>
  );
});

export default Table;
