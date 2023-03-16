import type { FC, PropsWithChildren } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledTableBody } from './table.styles';

interface TableBodyProps {
  customStyle?: CustomStyle;
}

const TableBody: FC<PropsWithChildren<TableBodyProps>> = ({ children, customStyle, ...props }) => {
  return (
    <StyledTableBody css={customStyle} {...props}>
      {children}
    </StyledTableBody>
  );
};

export default TableBody;
