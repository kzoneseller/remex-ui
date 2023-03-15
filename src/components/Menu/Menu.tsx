import type { FC, PropsWithChildren } from 'react';
import type { CustomStyle } from 'utils/theme';

import { MenuTitle, StyledMenu } from './menu.styles';

interface MenuProp {
  title?: string;
  customStyle?: CustomStyle;
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
