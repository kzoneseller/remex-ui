import type { CSSObject } from '@emotion/react';
import { Logo } from 'assets/svg';
import type { FC, PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { disableScroll, enableScroll } from 'utils/scroll';

import { BackDrop, Contents, Inner, LogoBox, StyledSideNavigation } from './sideNavigation.styles';

interface SideNavigationProps {
  open?: boolean;
  onClose?: () => void;
  customStyle?: CSSObject;
}

const SideNavigation: FC<PropsWithChildren<SideNavigationProps>> = ({
  open = true,
  onClose,
  children,
  customStyle,
}) => {
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
      <StyledSideNavigation css={customStyle} open={open}>
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
};

export default SideNavigation;
