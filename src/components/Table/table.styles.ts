import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledTableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`;

export const StyledTable = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  position: relative;
  text-align: left;
  max-height: 650px;
`;

export const StyledTableHead = styled.div`
  display: table-header-group;
  border-radius: 8px;
  user-select: none;

  .th {
    background: ${({ theme: { colors } }) => colors.line};
    border: none;
    padding: 14px 24px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.004em;
    position: sticky;
    top: 0;
  }

  .th:first-of-type {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .th:last-of-type {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const StyledTableBody = styled.div`
  display: table-row-group;
`;

export const StyledTableRow = styled.div<{ hideLine: boolean }>`
  color: inherit;
  display: table-row;
  vertical-align: middle;
  outline: 0;

  .td,
  .th {
    border-bottom-width: ${({ hideLine }) => hideLine && 0};
  }
`;

const BaseTableData = css`
  display: table-cell;
  vertical-align: inherit;
  padding: 16px 20px;
`;

export const StyledTableHeadData = styled.div`
  ${BaseTableData};

  border-bottom: 1px solid ${({ theme: { colors } }) => colors.line};
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5rem;
  text-align: center;
  letter-spacing: 0.01071em;
`;

export const StyledTableData = styled.div`
  ${BaseTableData};

  border-bottom: 1px solid ${({ theme: { colors } }) => colors.line};
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.004em;
`;
