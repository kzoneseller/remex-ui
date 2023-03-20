import styled from '@emotion/styled';

export const StyledTooltip = styled.div`
  cursor: default;

  .react-tooltip {
    background: ${({ theme: { colors } }) => colors.white};
    box-shadow: -4px 4px 4px rgba(151, 143, 175, 0.07);
    border-radius: 12px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.004em;
    padding: 20px 18px;
  }
`;
