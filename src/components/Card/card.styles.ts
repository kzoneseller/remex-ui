import styled from '@emotion/styled';

export const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  background: ${({ theme: { colors } }) => colors.white};
  box-shadow: 0 10px 25px rgba(151, 143, 175, 0.04);
  border-radius: 10px;
  padding: 32px 28px;
`;

export const Title = styled.div`
  color: ${({ theme: { colors } }) => colors.mainBlue};
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 42px;
  user-select: none;
`;

export const InnerBorder = styled.div<{ showBorder: boolean }>`
  border: ${({ showBorder, theme: { colors } }) => showBorder && `2px solid ${colors.mainBlue}`};
  border-radius: 4px;
  padding: 25px 36px;
  gap: 0.5rem;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 0.5rem;
  justify-content: flex-end;
`;
