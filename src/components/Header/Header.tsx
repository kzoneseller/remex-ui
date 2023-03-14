import type { CSSObject } from '@emotion/react';
import { useTheme } from '@emotion/react';
import { IconChevronDown, IconUserCircle } from '@tabler/icons-react';
import type { FC, PropsWithChildren, ReactNode } from 'react';
import { useState } from 'react';

import { Contents, Info, NickName, StyledHeader, Title, Wrapper } from './header.styles';

interface HeaderProps {
  title: ReactNode;
  userName?: string;
  customStyle?: CSSObject;
  onClick?: () => void;
}

const Header: FC<PropsWithChildren<HeaderProps>> = ({ title, userName, customStyle, onClick, children }) => {
  const {
    colors: { iconBlue },
  } = useTheme();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(prevState => !prevState);
    onClick?.();
  };

  return (
    <StyledHeader css={customStyle}>
      <Wrapper>
        {typeof title === 'string' ? <Title>{title}</Title> : title}
        <Contents>
          {children}
          {Boolean(userName) && (
            <Info onClick={handleClick}>
              <div>
                <IconUserCircle width={32} height={32} />
                <NickName>{userName}</NickName>
              </div>
              <IconChevronDown
                width={24}
                height={24}
                style={{
                  color: iconBlue,
                  transition: 'all 0.3s ease 0s',
                  transform: `rotate(${open ? '180' : 0}deg)`,
                }}
              />
            </Info>
          )}
        </Contents>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
