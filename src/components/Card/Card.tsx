import type { ReactNode } from 'react';
import { forwardRef, useMemo } from 'react';
import type { CustomStyle } from 'utils/theme';

import { Actions, Body, InnerBorder, StyledCard, Title } from './card.styles';

interface CardProps {
  title?: string;
  actions?: ReactNode;
  showBorder?: boolean;
  customStyle?: CustomStyle;
  customBodyStyle?: CustomStyle;
  children?: ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, actions, showBorder = false, customStyle, customBodyStyle, children }, ref) => {
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
      <StyledCard ref={ref} css={customStyle}>
        <Body css={customBodyStyle}>
          {Boolean(title) && <Title>{title}</Title>}
          {showBorder ? <InnerBorder>{contents}</InnerBorder> : contents}
        </Body>
      </StyledCard>
    );
  }
);

export default Card;
