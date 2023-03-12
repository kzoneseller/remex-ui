import type { CSSObject } from '@emotion/react';
import type { FC, PropsWithChildren, ReactNode } from 'react';

import { Main, StyledLayout } from './layout.styles';

interface LayoutProps {
  header?: ReactNode;
  sideNavigation?: ReactNode;
  customStyle?: CSSObject;
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
