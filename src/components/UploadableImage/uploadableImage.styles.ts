import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IconX } from '@tabler/icons-react';

export const ImageWrapper = styled.div<{ hasImage: boolean; width: number; height: number }>`
  position: relative;
  overflow: hidden;
  width: ${({ width }) => width}px !important;
  height: ${({ height }) => height}px !important;

  ${({ hasImage }) =>
    hasImage &&
    css`
      border-radius: 10px;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.04);
    `}
`;

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const NoImage = styled.div`
  position: relative;
  background-color: ${({ theme: { colors } }) => colors.ghostGray};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;

  svg {
    color: ${({ theme: { colors } }) => colors.darkGray};
  }
`;

export const StyledImg = styled.img<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;

export const HiddenImageLoader = styled.img`
  display: none;
`;

export const CloseIcon = styled(IconX)`
  position: absolute;
  top: 2px;
  right: 2px;
  color: ${({ theme: { colors } }) => colors.mainBlack};
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;
