import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  width: 100%;
  height: 6.5rem;
  display: flex;
  z-index: 100;
  top: 0;
  position: sticky;
  backdrop-filter: blur(8px);
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, 0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.1s;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2.5rem 2rem 3.25rem;
  min-height: 4rem;
`;

export const Title = styled.div`
  flex: 1 1 0;
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  line-height: 33px;
  color: ${({ theme }) => theme.colors.mainBlue};
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
  color: ${({ theme }) => theme.colors.mainBlue};
  cursor: pointer;
  user-select: none;
  gap: 2rem;

  div {
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
