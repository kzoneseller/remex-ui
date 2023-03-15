import type { FC, PropsWithChildren, ReactNode } from 'react';
import type { CustomStyle } from 'utils/theme';

import { Label, StyledMenuItem } from './menu.styles';

interface MenuItemProps {
  icon?: ReactNode;
  customStyle?: CustomStyle;
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
