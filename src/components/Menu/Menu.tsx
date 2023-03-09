import type { CSSObject } from '@emotion/react';
import type { FC, PropsWithChildren } from 'react';

import { MenuTitle, StyledMenu } from './menu.styles';

interface MenuProp {
  title?: string;
  customStyle?: CSSObject;
}

const Menu: FC<PropsWithChildren<MenuProp>> = ({ title, children, customStyle }) => {
  return (
    <StyledMenu css={customStyle}>
      <MenuTitle>{title}</MenuTitle>
      {children}
    </StyledMenu>
  );
};

export default Menu;
