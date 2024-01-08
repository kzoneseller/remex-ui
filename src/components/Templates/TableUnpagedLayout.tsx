import { css } from '@emotion/react';
import Card from 'components/Card';
import { forwardRef, PropsWithChildren, ReactNode } from 'react';
import { CustomStyle } from 'utils/theme';

import {
  StyledTableLayout,
  TableLayoutActions,
  TableLayoutContents,
  TableLayoutTitle,
  Total,
} from './templates.styles';

interface TableUnpagedLayoutProps {
  actions?: ReactNode;
  showEmpty?: boolean;
  pageTitle: string;
  totalItems?: number;
  customStyle?: CustomStyle;
}

const TableUnpagedLayout = forwardRef<HTMLDivElement, PropsWithChildren<TableUnpagedLayoutProps>>(
  ({ actions, showEmpty, pageTitle, children, totalItems = 0, customStyle }, ref) => {
    return (
      <StyledTableLayout ref={ref} css={customStyle}>
        {actions && <TableLayoutActions>{actions}</TableLayoutActions>}
        {showEmpty ? (
          <Card>
            <TableLayoutTitle>{`${pageTitle} is Empty`}</TableLayoutTitle>
          </Card>
        ) : (
          <>
            <TableLayoutContents>
              <Card
                customBodyStyle={css`
                  @media only screen and (max-width: 820px) {
                    padding: 0;
                    background-color: transparent;
                  }
                `}
              >
                {totalItems > 0 && (
                  <Total>
                    Total<span>{totalItems.toLocaleString()}</span>items
                  </Total>
                )}
                {children}
              </Card>
            </TableLayoutContents>
          </>
        )}
      </StyledTableLayout>
    );
  }
);

export default TableUnpagedLayout;
