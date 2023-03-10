import type { CSSObject } from '@emotion/react';
import type { FC, ReactNode, SyntheticEvent } from 'react';
import { useEffect, useRef } from 'react';

import { StyledTabs } from './tabs.styles';

interface TabsProps {
  value: number;
  onChange: (e: SyntheticEvent, newValue: number) => void;
  children: ReactNode;
  customStyle?: CSSObject;
}

const Tabs: FC<TabsProps> = ({ value, onChange, children, customStyle }) => {
  const tabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabRef.current) {
      console.log(value);

      [...tabRef.current.children].map((child, index) => {
        console.log(child);
        if (index === value) {
          tabRef.current?.children.item(index)?.setAttribute?.('aria-selected', 'true');
          tabRef.current?.children.item(index)?.classList.add('selected');
        } else {
          tabRef.current?.children.item(index)?.setAttribute?.('aria-selected', 'false');
          tabRef.current?.children.item(index)?.classList.remove('selected');
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
      {children}
    </StyledTabs>
  );
};

export default Tabs;
