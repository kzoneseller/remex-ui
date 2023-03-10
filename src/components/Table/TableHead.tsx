import type { CSSObject } from '@emotion/react';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { StyledTableHead } from './table.styles';

interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  customStyle?: CSSObject;
}

const TableHead: FC<PropsWithChildren<TableHeadProps>> = ({ children, customStyle, ...props }) => {
  return (
    <StyledTableHead css={customStyle} {...props}>
      {children}
    </StyledTableHead>
  );
};

export default TableHead;
