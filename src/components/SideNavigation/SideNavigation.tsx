import { Logo } from 'assets/svg';
import type { PropsWithChildren } from 'react';
import { forwardRef, useEffect } from 'react';
import { disableScroll, enableScroll } from 'utils/scroll';
import type { CustomStyle } from 'utils/theme';

import { BackDrop, Contents, Inner, LogoBox, StyledSideNavigation } from './sideNavigation.styles';

interface SideNavigationProps {
  open?: boolean;
  onClose?: () => void;
  customStyle?: CustomStyle;
}

const SideNavigation = forwardRef<HTMLElement, PropsWithChildren<SideNavigationProps>>(
  ({ open = true, onClose, children, customStyle }, ref) => {
    useEffect(() => {
      if (open) {
        disableScroll();
      } else {
        enableScroll();
      }
    }, [open]);

    return (
      <>
        <BackDrop onClick={onClose} open={open} />
        <StyledSideNavigation ref={ref} css={customStyle} open={open}>
          <Inner open={open}>
            <LogoBox>
              <a href="/" aria-current="page" aria-label="Homepage">
                <Logo />
              </a>
            </LogoBox>
            <Contents>{children}</Contents>
          </Inner>
        </StyledSideNavigation>
      </>
    );
  }
);

export default SideNavigation;
