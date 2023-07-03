import { keyframes as emotionKeyframes } from '@emotion/react';

const fadeInDim = emotionKeyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
`;

const pulse = emotionKeyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
`;

const wave = emotionKeyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
`;

const checkmark = emotionKeyframes`
  0% {
    background-position-y: 5px;
  }
  50% {
    background-position-y: -2px;
  }
  100% {
    background-position-y: 0;
  }
`;

const spin = emotionKeyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const keyframes = {
  fadeInDim,
  pulse,
  wave,
  checkmark,
  spin,
} as const;

export type KeyframeKeys = keyof typeof keyframes;
