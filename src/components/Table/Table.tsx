import type { CSSObject } from '@emotion/react';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { StyledTable } from './table.styles';

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  customStyle?: CSSObject;
}

const Table: FC<PropsWithChildren<TableProps>> = ({ customStyle, children, ...props }) => {
  return (
    <StyledTable css={customStyle} {...props}>
      {children}
    </StyledTable>
  );
};

export default Table;
