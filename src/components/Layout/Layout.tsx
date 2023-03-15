import type { FC, PropsWithChildren, ReactNode } from 'react';
import type { CustomStyle } from 'utils/theme';

import { Main, StyledLayout } from './layout.styles';

interface LayoutProps {
  header?: ReactNode;
  sideNavigation?: ReactNode;
  customStyle?: CustomStyle;
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, header, sideNavigation, customStyle }) => {
  return (
    <StyledLayout css={customStyle} hasSideNavigation={Boolean(sideNavigation)}>
      {header}
      {sideNavigation}
      <Main>{children}</Main>
    </StyledLayout>
  );
};

export default Layout;
