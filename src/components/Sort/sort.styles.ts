import styled from '@emotion/styled';

export const StyledSort = styled.div<{ isDesc?: boolean; showIcon?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  svg {
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    path {
      color: ${({ theme: { colors } }) => colors.mainGrey};
    }
    path:nth-of-type(3) {
      color: ${({ showIcon, isDesc, theme: { colors } }) => showIcon && !isDesc && colors.mainBlue};
    }
    path:nth-of-type(2) {
      color: ${({ showIcon, isDesc, theme: { colors } }) => showIcon && isDesc && colors.mainBlue};
    }
  }
`;
