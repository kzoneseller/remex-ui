import { forwardRef, PropsWithChildren } from 'react';
import { CustomStyle } from 'utils/theme';

import { HeroLayoutContents, StyledHeroLayout, StyledHeroLayoutContainer } from './templates.styles';

interface HeroLayoutProps {
  customStyle?: CustomStyle;
}

const HeroLayout = forwardRef<HTMLDivElement, PropsWithChildren<HeroLayoutProps>>(({ customStyle, children }, ref) => {
  return (
    <StyledHeroLayoutContainer>
      <StyledHeroLayout ref={ref} css={customStyle}>
        <HeroLayoutContents>{children}</HeroLayoutContents>
      </StyledHeroLayout>
    </StyledHeroLayoutContainer>
  );
});

export default HeroLayout;
