import styled from '@emotion/styled';

export const StyledTabs = styled.div`
  overflow: hidden;
  width: fit-content;
  min-height: 56px;
  display: flex;
  user-select: none;
  align-items: flex-end;
  color: ${({ theme: { colors } }) => colors.mainGrey};

  .selected {
    transition-duration: 0.3s;
    color: ${({ theme: { colors } }) => colors.mainBlue};
  }
`;

export const TabsScroller = styled.div`
  overflow-x: scroll;
  margin-bottom: 0;
  position: relative;
  display: flex;
  gap: 8px;
  flex: 1 1 auto;
  white-space: nowrap;
  width: 100%;
`;

export const StyledTab = styled.button`
  background: ${({ theme: { colors } }) => colors.white};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  outline: 0;
  border: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  text-transform: capitalize;
  max-width: 360px;
  min-width: 90px;
  position: relative;
  min-height: 48px;
  flex-shrink: 0;
  padding: 18px 32px;
  overflow: hidden;
  white-space: normal;
  text-align: center;
  flex-direction: column;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.004em;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
