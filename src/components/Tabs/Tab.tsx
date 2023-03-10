import type { CSSObject } from '@emotion/react';
import type { FC, ReactNode } from 'react';

import { StyledTab } from './tabs.styles';

interface TabProps {
  index: number;
  label: ReactNode;
  customStyle?: CSSObject;
}

const Tab: FC<TabProps> = ({ index, label, customStyle }) => {
  return (
    <StyledTab css={customStyle} type="button" role="tab" data-index={index}>
      {label}
    </StyledTab>
  );
};

export default Tab;
