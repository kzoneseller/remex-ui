import type { CSSProperties, FC } from 'react';
import type {
  ChildrenType,
  EventsType,
  IPosition,
  Middleware,
  PlacesType,
  PositionStrategy,
  VariantType,
  WrapperType,
} from 'react-tooltip';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import { StyledTooltip } from './tooltip.styles';

interface TooltipProps {
  className?: string;
  classNameArrow?: string;
  content?: string;
  html?: string;
  render?: (render: { content: string | null; activeAnchor: HTMLElement | null }) => ChildrenType;
  place?: PlacesType;
  offset?: number;
  id?: string;
  variant?: VariantType;
  anchorId?: string;
  anchorSelect?: string;
  wrapper?: WrapperType;
  children?: ChildrenType;
  events?: EventsType[];
  openOnClick?: boolean;
  positionStrategy?: PositionStrategy;
  middlewares?: Middleware[];
  delayShow?: number;
  delayHide?: number;
  float?: boolean;
  noArrow?: boolean;
  clickable?: boolean;
  closeOnEsc?: boolean;
  style?: CSSProperties;
  position?: IPosition;
  isOpen?: boolean;
  setIsOpen?: (value: boolean) => void;
  afterShow?: () => void;
  afterHide?: () => void;
}

const Tooltip: FC<TooltipProps> = ({ children, ...props }) => {
  return (
    <StyledTooltip>
      <>
        {children}
        <ReactTooltip noArrow variant="light" {...props} />
      </>
    </StyledTooltip>
  );
};

export default Tooltip;
