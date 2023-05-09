import type { LiHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { Label, StyledMenuItem } from './menu.styles';

interface MenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
  icon?: ReactNode;
  customStyle?: CustomStyle;
}

const MenuItem = forwardRef<HTMLLIElement, PropsWithChildren<MenuItemProps>>(
  ({ icon, children, customStyle, ...props }, ref) => {
    return (
      <StyledMenuItem ref={ref} css={customStyle} {...props}>
        {icon}
        <Label>{children}</Label>
      </StyledMenuItem>
    );
  }
);

export default MenuItem;
