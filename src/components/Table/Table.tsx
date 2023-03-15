import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledTable } from './table.styles';

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  customStyle?: CustomStyle;
}

const Table: FC<PropsWithChildren<TableProps>> = ({ customStyle, children, ...props }) => {
  return (
    <StyledTable css={customStyle} {...props}>
      {children}
    </StyledTable>
  );
};

export default Table;
