import { FC, PropsWithChildren } from 'react';
import { CustomStyle } from 'utils/theme';

import { HeroLayoutContents, StyledHeroLayout } from './templates.styles';

interface HeroLayoutProps {
  customStyle: CustomStyle;
}

const HeroLayout: FC<PropsWithChildren<HeroLayoutProps>> = ({ customStyle, children }) => {
  return (
    <StyledHeroLayout css={customStyle}>
      <HeroLayoutContents>{children}</HeroLayoutContents>
    </StyledHeroLayout>
  );
};

export default HeroLayout;
