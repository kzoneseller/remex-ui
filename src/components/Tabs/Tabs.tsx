/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { FC, ReactNode, SyntheticEvent } from 'react';
import { useEffect, useRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { StyledTabs, TabsScroller } from './tabs.styles';

interface TabsProps {
  value: number;
  onChange: (e: SyntheticEvent, newValue: number) => void;
  children: ReactNode;
  customStyle?: CustomStyle;
}

const Tabs: FC<TabsProps> = ({ value, onChange, children, customStyle }) => {
  const tabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabRef.current) {
      const tabItems = tabRef.current.children[0].children;

      Array.from({ length: tabItems.length }, (_, index) => {
        if (index === value) {
          tabItems.item(index)?.setAttribute?.('aria-selected', 'true');
          tabItems.item(index)?.classList.add('selected');
        } else {
          tabItems.item(index)?.setAttribute?.('aria-selected', 'false');
          tabItems.item(index)?.classList.remove('selected');
        }
      });
    }
  }, [value]);

  return (
    <StyledTabs
      ref={tabRef}
      css={customStyle}
      role="tablist"
      onClick={e => onChange(e, Number((e.target as Element).getAttribute('data-index')))}
    >
      <TabsScroller>{children}</TabsScroller>
    </StyledTabs>
  );
};

export default Tabs;
