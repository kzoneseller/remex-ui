import { forwardRef, PropsWithChildren } from 'react';
import { CustomStyle } from 'utils/theme';

import { HeroLayoutContents, StyledHeroLayout } from './templates.styles';

interface HeroLayoutProps {
  customStyle?: CustomStyle;
  isSignUp?: boolean;
}

const HeroLayout = forwardRef<HTMLDivElement, PropsWithChildren<HeroLayoutProps>>(
  ({ customStyle, children, isSignUp = false }, ref) => {
    return (
      <StyledHeroLayout ref={ref} css={customStyle} isSignUp={isSignUp}>
        <HeroLayoutContents>{children}</HeroLayoutContents>
      </StyledHeroLayout>
    );
  }
);

export default HeroLayout;
