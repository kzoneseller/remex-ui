import type { PropsWithChildren, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { Main, StyledLayout } from './layout.styles';

interface LayoutProps {
  header?: ReactNode;
  sideNavigation?: ReactNode;
  customStyle?: CustomStyle;
}

const Layout = forwardRef<HTMLDivElement, PropsWithChildren<LayoutProps>>(
  ({ children, header, sideNavigation, customStyle }, ref) => {
    return (
      <StyledLayout ref={ref} css={customStyle} hasSideNavigation={Boolean(sideNavigation)}>
        {header}
        {sideNavigation}
        <Main>{children}</Main>
      </StyledLayout>
    );
  }
);

export default Layout;
