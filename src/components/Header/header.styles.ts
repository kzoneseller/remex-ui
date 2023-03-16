import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  flex-shrink: 0;
  position: fixed;
  z-index: 100;
  top: 0;
  left: auto;
  right: 0;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, 0 1px 2px 0 rgb(0 0 0 / 0.05);
  backdrop-filter: blur(8px);
  border-color: ${({ theme: { colors } }) => colors.border};
  color: ${({ theme: { colors } }) => colors.mainBlack};
`;

export const Wrapper = styled.div`
  height: 104px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 34px 24px;
  min-height: 4rem;
`;

export const Title = styled.div`
  flex: 1 1 0;
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  line-height: 33px;
  color: ${({ theme: { colors } }) => colors.mainBlue};
  user-select: none;
  white-space: nowrap;
`;

export const Contents = styled.div`
  display: inline-flex;
  align-items: center;
  flex: none;
  gap: 2rem;

  svg {
    cursor: pointer;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.mainBlue};
  cursor: pointer;
  user-select: none;
  gap: 2rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const NickName = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 14px;
`;
