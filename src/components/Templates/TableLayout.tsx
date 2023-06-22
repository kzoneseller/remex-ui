import { css } from '@emotion/react';
import Card from 'components/Card';
import Pagination from 'components/Pagination';
import { forwardRef, PropsWithChildren, ReactNode, SyntheticEvent } from 'react';
import { CustomStyle } from 'utils/theme';

import {
  StyledTableLayout,
  TableLayoutActions,
  TableLayoutContents,
  TableLayoutTitle,
  Total,
} from './templates.styles';

interface TableLayoutProps {
  actions?: ReactNode;
  showEmpty?: boolean;
  pageTitle: string;
  totalPages: number;
  currentPage: number;
  totalItems?: number;
  onChangePagination: (e: SyntheticEvent<HTMLDivElement, Event>, value: number) => void;
  customStyle?: CustomStyle;
}

const TableLayout = forwardRef<HTMLDivElement, PropsWithChildren<TableLayoutProps>>(
  (
    {
      actions,
      showEmpty,
      pageTitle,
      children,
      totalPages,
      totalItems = 0,
      currentPage,
      onChangePagination,
      customStyle,
    },
    ref
  ) => {
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
            <Pagination
              count={totalPages}
              currentPage={currentPage}
              onChange={onChangePagination}
              customStyle={css`
                width: 100%;
                align-items: center;

                & > div {
                  justify-content: center;
                }
              `}
            />
          </>
        )}
      </StyledTableLayout>
    );
  }
);

export default TableLayout;
