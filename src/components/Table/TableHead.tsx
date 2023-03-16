import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledTableHead } from './table.styles';

interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  customStyle?: CustomStyle;
}

const TableHead: FC<PropsWithChildren<TableHeadProps>> = ({ children, customStyle, ...props }) => {
  return (
    <StyledTableHead css={customStyle} {...props}>
      {children}
    </StyledTableHead>
  );
};

export default TableHead;
