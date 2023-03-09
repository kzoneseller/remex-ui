import type { CSSObject } from '@emotion/react';
import type { FC, ReactNode } from 'react';

import { Actions, Body, InnerBorder, StyledCard, Title } from './card.styles';

interface CardProps {
  title?: string;
  actions?: ReactNode;
  showBorder?: boolean;
  customStyle?: CSSObject;
  children?: ReactNode;
}

const Card: FC<CardProps> = ({ title, actions, showBorder = false, customStyle, children }) => {
  return (
    <StyledCard css={customStyle}>
      <Body>
        {Boolean(title) && <Title>{title}</Title>}
        <InnerBorder showBorder={showBorder}>
          {children}
          {Boolean(actions) && <Actions>{actions}</Actions>}
        </InnerBorder>
      </Body>
    </StyledCard>
  );
};

export default Card;
