import { Selector } from 'assets/svg';
import { forwardRef, type HTMLAttributes } from 'react';
import { CustomStyle } from 'utils/theme';

import { StyledSort } from './sort.styles';

interface SortProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  isDesc?: boolean;
  showIcon?: boolean;
  customStyle?: CustomStyle;
}

const Sort = forwardRef<HTMLDivElement, SortProps>(({ label, customStyle, ...props }, ref) => {
  return (
    <StyledSort ref={ref} css={customStyle} {...props}>
      <p>{label}</p>
      <Selector />
    </StyledSort>
  );
});

export default Sort;
