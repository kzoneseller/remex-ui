import { css } from '@emotion/react';
import Card from 'components/Card';
import Pagination from 'components/Pagination';
import { FC, PropsWithChildren, ReactNode, SyntheticEvent } from 'react';
import { CustomStyle } from 'utils/theme';

import { StyledTableLayout, TableLayoutActions, TableLayoutContents, TableLayoutTitle } from './templates.styles';

interface TableLayoutProps {
  actions?: ReactNode;
  showEmpty?: boolean;
  pageTitle: string;

  count: number;
  currentPage: number;
  onChangePagination: (e: SyntheticEvent<HTMLDivElement, Event>, value: number) => void;
  customStyle: CustomStyle;
}

const TableLayout: FC<PropsWithChildren<TableLayoutProps>> = ({
  actions,
  showEmpty,
  pageTitle,
  children,
  count,
  currentPage,
  onChangePagination,
  customStyle,
}) => {
  return (
    <StyledTableLayout css={customStyle}>
      {actions && <TableLayoutActions>{actions}</TableLayoutActions>}
      {showEmpty ? (
        <Card>
          <TableLayoutTitle>{`${pageTitle} is Empty`}</TableLayoutTitle>
        </Card>
      ) : (
        <>
          <TableLayoutContents>
            <Card
              customStyle={css`
                @media only screen and (max-width: 820px) {
                  & > div {
                    padding: 0;
                    background-color: transparent;
                  }
                }
              `}
            >
              {children}
            </Card>
          </TableLayoutContents>
          <Pagination
            count={count}
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
};

export default TableLayout;
