import type { FC, HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import type { CustomStyle } from 'utils/theme';

import { MenuTitle, StyledMenu } from './menu.styles';

interface MenuProp extends Omit<HTMLAttributes<HTMLUListElement>, 'title'> {
  title?: string | ReactElement;
  customStyle?: CustomStyle;
}

const Menu: FC<PropsWithChildren<MenuProp>> = ({ title, children, customStyle, ...props }) => {
  return (
    <StyledMenu css={customStyle} {...props}>
      {typeof title === 'string' ? <MenuTitle>{title}</MenuTitle> : title}
      {children}
    </StyledMenu>
  );
};

export default Menu;
