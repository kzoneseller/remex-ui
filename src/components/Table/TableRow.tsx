import type { CSSObject } from '@emotion/react';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { StyledTableRow } from './table.styles';

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  customStyle?: CSSObject;
}

const TableRow: FC<PropsWithChildren<TableRowProps>> = ({ children, customStyle, ...props }) => {
  return (
    <StyledTableRow css={customStyle} {...props}>
      {children}
    </StyledTableRow>
  );
};

export default TableRow;
