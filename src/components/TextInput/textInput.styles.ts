import styled from '@emotion/styled';

export const StyledTextInput = styled.div<{ fullWidth: boolean }>`
  display: flex;
  align-items: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  height: 40px;
  max-height: 40px;
  background: ${({ theme: { colors } }) => colors.white};
  border-radius: 10px;
`;

export const Label = styled.label`
  display: none;
`;

export const InnerInput = styled.div<{ fullWidth: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 16px 10px;
  height: 40px;
  border-radius: 8px;
  transition: 0.2s;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};

  svg {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    color: ${({ theme: { colors } }) => colors.darkBlue};
  }
`;

export const Input = styled.input`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.004em;
  color: ${({ theme: { colors } }) => colors.mainBlack};

  :read-only {
    outline: 0;
  }

  :focus {
    outline: 0;
  }

  :disabled {
    cursor: pointer;
    background-color: ${({ theme: { colors } }) => colors.white};
  }

  ::placeholder {
    color: ${({ theme: { colors } }) => colors.iconBlue};
  }
`;
