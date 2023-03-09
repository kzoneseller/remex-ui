import type { CSSObject } from '@emotion/react';
import { Logo } from 'assets/svg';
import type { FC, PropsWithChildren } from 'react';

import { Contents, LogoWrapper, StyledSideNavigation } from './SideNavigation.styles';

interface SideNavigationProps {
  customStyle?: CSSObject;
}

const SideNavigation: FC<PropsWithChildren<SideNavigationProps>> = ({ children, customStyle }) => {
  return (
    <StyledSideNavigation css={customStyle}>
      <LogoWrapper>
        <a href="/" aria-current="page" aria-label="Homepage">
          <Logo />
        </a>
      </LogoWrapper>
      <Contents>{children}</Contents>
    </StyledSideNavigation>
  );
};

export default SideNavigation;
