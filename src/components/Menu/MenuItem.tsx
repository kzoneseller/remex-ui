import type { CSSObject } from '@emotion/react';
import type { FC, PropsWithChildren, ReactNode } from 'react';

import { Label, StyledMenuItem } from './Menu.styles';

interface MenuItemProps {
  icon: ReactNode;
  customStyle?: CSSObject;
}

const MenuItem: FC<PropsWithChildren<MenuItemProps>> = ({ icon, children, customStyle }) => {
  return (
    <StyledMenuItem css={customStyle}>
      {icon}
      <Label>{children}</Label>
    </StyledMenuItem>
  );
};

export default MenuItem;
