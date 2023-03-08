import styled from '@emotion/styled';

export const StyledSideNavigation = styled.nav`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  min-width: 16.25rem;
  max-height: 100vh;
  overflow-x: hidden;
  scroll-behavior: smooth;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: 1024px) {
    overflow-y: auto;
  }
`;

export const LogoWrapper = styled.div`
  padding: 1.5rem;
  cursor: pointer;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Contents = styled.div`
  flex: 1 1 0;
`;
