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

export const keyframes = {
  fadeInDim,
  pulse,
  wave,
};
