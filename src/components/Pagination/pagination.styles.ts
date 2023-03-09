import styled from '@emotion/styled';

export const StyledPagination = styled.div`
  display: inline-flex;
  gap: 12px;
  align-items: center;
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
