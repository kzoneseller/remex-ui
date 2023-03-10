import styled from '@emotion/styled';

export const StyledTabs = styled.div`
  display: flex;
  user-select: none;
  align-items: flex-end;
  color: ${({ theme: { colors } }) => colors.mainGrey};
  gap: 4px;
  overflow-x: scroll;

  .selected {
    transition-duration: 0.3s;
    color: ${({ theme: { colors } }) => colors.mainBlue};
  }
`;

export const StyledTab = styled.button`
  background: ${({ theme: { colors } }) => colors.white};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 1rem 4rem;
  position: relative;
  display: inline-flex;
  cursor: pointer;
  user-select: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.004em;
  white-space: nowrap;
`;
