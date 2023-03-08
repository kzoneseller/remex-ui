import styled from '@emotion/styled';

export const StyledLayout = styled.div`
  display: grid;
  width: 100%;
  overflow: hidden;
  height: 100dvh;

  @media (min-width: 1024px) {
    grid-auto-columns: max-content auto;
  }
`;

export const Contents = styled.div`
  grid-row-start: 1;
  overflow-y: auto;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  scroll-behavior: smooth;
  background-color: ${({ theme }) => theme.colors.bgBlue};

  @media (min-width: 1024px) {
    grid-column-start: 2;
    height: auto;
  }
`;

export const Main = styled.div`
  padding: 2rem 1.5rem 4rem;
`;
