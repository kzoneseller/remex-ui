import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledLayout = styled.div<{ hasSideNavigation: boolean }>`
  display: flex;

  ${({ hasSideNavigation }) =>
    hasSideNavigation &&
    css`
      & > header {
        svg {
          display: block;
        }

        @media (min-width: 1024px) {
          width: calc(100% - 260px);

          svg {
            display: none;
          }
        }
      }

      & > main {
        @media (min-width: 1024px) {
          width: calc(100vw - 260px);
          margin-left: auto;
          flex-grow: 0;
        }
      }
    `};
`;

export const Main = styled.main`
  -webkit-box-flex: 1;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.bgBlue};
  padding: 142px 24px 64px;
`;
