import type { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { MenuTitle, StyledMenu } from './menu.styles';

interface MenuProp extends Omit<HTMLAttributes<HTMLUListElement>, 'title'> {
  title?: string | ReactElement;
  customStyle?: CustomStyle;
}

const Menu = forwardRef<HTMLUListElement, PropsWithChildren<MenuProp>>(
  ({ title, children, customStyle, ...props }, ref) => {
    return (
      <StyledMenu ref={ref} css={customStyle} {...props}>
        <MenuTitle>{title}</MenuTitle>
        {children}
      </StyledMenu>
    );
  }
);

export default Menu;
