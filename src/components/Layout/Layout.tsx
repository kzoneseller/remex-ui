import type { CSSObject } from '@emotion/react';
import type { PropsWithChildren, ReactNode } from 'react';

import { Contents, Main, StyledLayout } from './Layout.styles';

interface LayoutProps {
  header?: ReactNode;
  sideNavigation?: ReactNode;
  customStyle?: CSSObject;
}

const Layout = ({ children, header, sideNavigation, customStyle }: PropsWithChildren<LayoutProps>) => {
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
