import type { CSSObject } from '@emotion/react';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { StyledTableData, StyledTableHeadData } from './table.styles';

interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  component?: 'th' | 'td';
  customStyle?: CSSObject;
}

const TableCell: FC<PropsWithChildren<TableCellProps>> = ({ component = 'td', customStyle, children, ...props }) => {
  return component === 'th' ? (
    <StyledTableHeadData css={customStyle} {...props}>
      {children}
    </StyledTableHeadData>
  ) : (
    <StyledTableData>{children}</StyledTableData>
  );
};

export default TableCell;
