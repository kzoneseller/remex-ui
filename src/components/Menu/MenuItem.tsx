import type { FC, LiHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import type { CustomStyle } from 'utils/theme';

import { Label, StyledMenuItem } from './menu.styles';

interface MenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
  icon?: ReactNode;
  customStyle?: CustomStyle;
}

const MenuItem: FC<PropsWithChildren<MenuItemProps>> = ({ icon, children, customStyle, ...props }) => {
  return (
    <StyledMenuItem css={customStyle} {...props}>
      {icon}
      <Label>{children}</Label>
    </StyledMenuItem>
  );
};

export default MenuItem;
