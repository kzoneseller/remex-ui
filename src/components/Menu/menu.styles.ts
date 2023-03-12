import styled from '@emotion/styled';

export const StyledMenu = styled.ul`
  user-select: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MenuTitle = styled.div`
  padding: 8px 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  color: ${({ theme: { colors } }) => colors.darkGray};
`;

export const StyledMenuItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 14px 16px;
  gap: 8px;
  cursor: pointer;

  svg {
    color: ${({ theme: { colors } }) => colors.textGrey};
  }
`;

export const Label = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.textGrey};
`;
