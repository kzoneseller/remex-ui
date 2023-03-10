import type { CSSObject } from '@emotion/react';
import type { FC, ReactNode } from 'react';
import { useMemo } from 'react';

import { Actions, Body, InnerBorder, StyledCard, Title } from './card.styles';

interface CardProps {
  title?: string;
  actions?: ReactNode;
  showBorder?: boolean;
  customStyle?: CSSObject;
  children?: ReactNode;
}

const Card: FC<CardProps> = ({ title, actions, showBorder = false, customStyle, children }) => {
  const contents = useMemo(
    () => (
      <>
        {children}
        {Boolean(actions) && <Actions>{actions}</Actions>}
      </>
    ),
    [actions, children]
  );

  return (
    <StyledCard css={customStyle}>
      <Body>
        {Boolean(title) && <Title>{title}</Title>}
        {showBorder ? <InnerBorder>{contents}</InnerBorder> : contents}
      </Body>
    </StyledCard>
  );
};

export default Card;
