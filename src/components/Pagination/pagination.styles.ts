import styled from '@emotion/styled';

export const StyledPagination = styled.div`
  overflow: hidden;
  display: inline-flex;
  align-items: flex-end;
  user-select: none;
`;

export const PaginationScroller = styled.div`
  overflow-x: scroll;
  margin-bottom: 0;
  position: relative;
  display: flex;
  gap: 12px;
  flex: 1 1 auto;
  white-space: nowrap;
  width: 100%;
`;

export const StyledPaginationItem = styled.div<{ active: boolean }>`
  background-color: ${({ active, theme: { colors } }) => (active ? colors.mainBlue : colors.white)};
  color: ${({ active, theme: { colors } }) => (active ? colors.white : colors.mainBlue)};
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.004em;
  cursor: pointer;
  transition-duration: 0.3s;
`;

export const Icon = styled.div<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  svg {
    color: ${({ disabled, theme: { colors } }) => (disabled ? colors.mainGrey : colors.textGrey)};
  }
`;
