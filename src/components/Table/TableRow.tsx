import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledTableRow } from './table.styles';

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  customStyle?: CustomStyle;
}

const TableRow: FC<PropsWithChildren<TableRowProps>> = ({ children, customStyle, ...props }) => {
  return (
    <StyledTableRow css={customStyle} {...props}>
      {children}
    </StyledTableRow>
  );
};

export default TableRow;
