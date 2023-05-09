import type { PropsWithChildren, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { Contents, StyledHeader, Title, Wrapper } from './header.styles';

interface HeaderProps {
  title: ReactNode;

  customStyle?: CustomStyle;
}

const Header = forwardRef<HTMLElement, PropsWithChildren<HeaderProps>>(({ title, customStyle, children }, ref) => {
  return (
    <StyledHeader ref={ref} css={customStyle}>
      <Wrapper>
        {typeof title === 'string' ? <Title>{title}</Title> : title}
        <Contents>{children}</Contents>
      </Wrapper>
    </StyledHeader>
  );
});

export default Header;
