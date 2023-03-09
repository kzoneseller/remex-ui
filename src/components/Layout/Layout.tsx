import type { CSSObject } from '@emotion/react';
import type { FC, PropsWithChildren, ReactNode } from 'react';

import { Contents, Main, StyledLayout } from './layout.styles';

interface LayoutProps {
  header?: ReactNode;
  sideNavigation?: ReactNode;
  customStyle?: CSSObject;
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, header, sideNavigation, customStyle }) => {
  return (
    <StyledLayout css={customStyle}>
      <Contents>
        {header}
        <Main>{children}</Main>
      </Contents>
      {sideNavigation}
    </StyledLayout>
  );
};

export default Layout;
