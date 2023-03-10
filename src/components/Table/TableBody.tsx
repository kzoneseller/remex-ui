import type { CSSObject } from '@emotion/react';
import type { FC, PropsWithChildren } from 'react';

import { StyledTableBody } from './table.styles';

interface TableBodyProps {
  customStyle?: CSSObject;
}

const TableBody: FC<PropsWithChildren<TableBodyProps>> = ({ children, customStyle, ...props }) => {
  return (
    <StyledTableBody css={customStyle} {...props}>
      {children}
    </StyledTableBody>
  );
};

export default TableBody;
