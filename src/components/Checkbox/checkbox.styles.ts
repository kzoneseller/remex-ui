import styled from '@emotion/styled';

export const StyledCheckbox = styled.input<{ color: string; checked: boolean }>`
  border-color: ${({ color }) => color};
  background-repeat: no-repeat;
  animation: checkmark 0.2s ease-in-out;
  flex-shrink: 0;
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  appearance: none;
  border-width: 1px;
  border-radius: 0.5rem;

  ${({ checked, color, theme: { colors } }) =>
    checked && {
      color: color,
      backgroundColor: color,
      backgroundImage: `linear-gradient(-45deg, transparent 65%, ${color} 65.99%), 
        linear-gradient(45deg, transparent 75%, ${color} 75.99%),
        linear-gradient(-45deg, ${color} 40%, transparent 40.99%),
        linear-gradient(45deg, ${color} 30%, ${colors.white} 30.99%, ${colors.white} 40%, transparent 40.99%),
        linear-gradient(-45deg, ${colors.white} 50%, ${color} 50.99%)`,
    }};
`;
