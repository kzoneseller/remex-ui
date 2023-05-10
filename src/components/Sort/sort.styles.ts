import styled from '@emotion/styled';

export const StyledSort = styled.div<{ isDesc?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  svg {
    transform: rotate(${({ isDesc }) => (isDesc ? 180 : 0)}deg);
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;
