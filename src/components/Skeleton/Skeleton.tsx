import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { SkeletonInner, SkeletonWrapper, StyledSkeleton } from './skeleton.styles';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  ratio?: '1:1' | '1:2' | '2:1' | '4:3' | '5:6' | '16:9';
  width?: number;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;
  minWidth?: number;
  minHeight?: number;
  round?: number;
  animation?: 'pulse' | 'wave';
  disableAspectRatio?: boolean;
  disableAnimation?: boolean;
  customStyle?: CustomStyle;
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      ratio = '1:1',
      width,
      height,
      maxWidth,
      maxHeight,
      minWidth,
      minHeight,
      round,
      animation = 'wave',
      disableAspectRatio,
      disableAnimation,
      customStyle,
      ...props
    },
    ref
  ) => {
    if (disableAspectRatio) {
      return (
        <StyledSkeleton
          ref={ref}
          dataWidth={width}
          dataHeight={height}
          maxWidth={maxWidth}
          maxHeight={maxHeight}
          minWidth={minWidth}
          minHeight={minHeight}
          animation={animation}
          disableAspectRatio={disableAspectRatio}
          disableAnimation={disableAnimation}
          round={round}
          {...props}
          css={customStyle}
        />
      );
    }

    return (
      <SkeletonWrapper ratio={ratio} round={round}>
        <SkeletonInner round={round}>
          <StyledSkeleton
            ref={ref}
            animation={animation}
            disableAspectRatio={disableAspectRatio}
            disableAnimation={disableAnimation}
            round={round}
            {...props}
            css={customStyle}
          />
        </SkeletonInner>
      </SkeletonWrapper>
    );
  }
);

export default Skeleton;
