import styled, { CSSObject } from '@emotion/styled';

import type { SkeletonProps } from './Skeleton';

export const SkeletonWrapper = styled.div<Pick<SkeletonProps, 'ratio' | 'round'>>`
  position: relative;
  overflow: hidden;

  ${({ ratio }): CSSObject => {
    const splitRatio = String(ratio).split(':');

    return {
      paddingTop: `calc(100% / ${splitRatio[0]!} * ${splitRatio[1]!})`,
    };
  }};
  ${({ round }) => round && { borderRadius: `${round}px` }};
`;

export const SkeletonInner = styled.div<Pick<SkeletonProps, 'round'>>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translate(50%, 50%);

  ${({ round }) => round && { borderRadius: `${round}px` }};
`;

export const StyledSkeleton = styled.div<
  Pick<
    SkeletonProps,
    | 'maxWidth'
    | 'maxHeight'
    | 'minWidth'
    | 'minHeight'
    | 'round'
    | 'animation'
    | 'disableAspectRatio'
    | 'disableAnimation'
  > & {
    dataWidth?: number;
    dataHeight?: number;
  }
>`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme: { colors } }) => colors.white};
  width: ${({ dataWidth }) => dataWidth && ` ${dataWidth}px`};
  height: ${({ dataHeight }) => dataHeight && `${dataHeight}px`};
  max-width: ${({ maxWidth }) => maxWidth && `${maxWidth}px`};
  max-height: ${({ maxHeight }) => maxHeight && `${maxHeight}px`};
  min-width: ${({ minWidth }) => minWidth && `${minWidth}px`};
  min-height: ${({ minHeight }) => minHeight && `${minHeight}px`};

  ${({ round }) => round && { borderRadius: `${round}px` }};

  ${({ disableAspectRatio }) =>
    !disableAspectRatio && {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      transform: 'translate(-50%, -50%)',
    }};

  ${({ theme: { colors }, animation, disableAnimation }) => {
    if (disableAnimation) {
      return {};
    }

    if (animation === 'wave') {
      return {
        '&:after': {
          content: '""',
          top: 0,
          left: 0,
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `linear-gradient(-45deg, ${colors.lightGray} 30%,transparent 50%, ${colors.lightGray} 70%)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '350% 350%',
          animation: 'wave 1.2s ease-in-out infinite',
          animationDelay: '-0.2s',
          opacity: 0.6,
        },
      };
    }

    return {
      animation: 'pulse 0.8s linear 0s infinite alternate',
    };
  }};

  @keyframes pulse {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.2;
    }
  }
  @keyframes wave {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 100%;
    }
  }
`;
