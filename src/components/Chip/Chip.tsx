import { useTheme } from '@emotion/react';
import { DeleteIcon, StyledChip } from 'components/Chip/chip.styles';
import { forwardRef } from 'react';
import { type CustomStyle } from 'utils/theme';

interface ChipProps {
  variant?: 'contained' | 'outlined';
  color?: 'blue' | 'black' | 'grey' | 'red';
  label: string;
  onDelete?: () => void;
  customStyle?: CustomStyle;
}

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ variant = 'contained', color = 'blue', label, onDelete, customStyle }, ref) => {
    const { colors } = useTheme();

    const COLORS = {
      blue: colors.lightBlue,
      black: colors.lightBlack,
      grey: colors.lightGray,
      red: colors.error,
    };

    return (
      <StyledChip ref={ref} css={customStyle} variant={variant} color={COLORS[color]}>
        <span>{label}</span>
        {onDelete && <DeleteIcon width={18} height={18} onClick={onDelete} />}
      </StyledChip>
    );
  }
);

export default Chip;
