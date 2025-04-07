import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledSideNavigation = styled.nav<{ open: boolean }>`
  @media (min-width: 1024px) {
    width: 260px;
    flex-shrink: 0;
    visibility: visible;
  }

  ${({ open }) =>
    open
      ? css`
          width: 260px;
          flex-shrink: 0;
          visibility: visible;
          position: fixed;
          inset: 0;
          z-index: 200;
        `
      : css`
          visibility: hidden;
        `};
`;

export const BackDrop = styled.div<{ open: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
  z-index: 199;

  ${({ open }) =>
    open
      ? css`
          opacity: 1;
          visibility: visible;
          transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        `
      : css`
          opacity: 0;
          visibility: hidden;
          transition: all 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        `};
`;

export const Inner = styled.div<{ open: boolean }>`
  box-sizing: border-box;
  width: 260px;
  color: ${({ theme: { colors } }) => colors.mainBlack};
  background-color: ${({ theme: { colors } }) => colors.white};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 0 auto;
  z-index: 200;
  position: fixed;
  top: 0;
  outline: 0;
  left: 0;
  box-shadow: 4px 10px 25px rgba(0, 0, 0, 0.04);

  @media (min-width: 1024px) {
    transform: none;
    visibility: visible;
  }

  ${({ open }) =>
    open
      ? css`
          transform: none;
          transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        `
      : css`
          transform: translateX(-260px);
          visibility: hidden;
        `};
`;

export const LogoBox = styled.div`
  padding: 1.5rem;
  cursor: pointer;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    height: auto;
    max-width: 100%;
  }
`;

export const Contents = styled.div`
  width: 100%;
`;
