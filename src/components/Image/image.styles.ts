import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IconX } from '@tabler/icons-react';

export const ImageWrapper = styled.div<{ showShadow: boolean; width: number; height: number }>`
  position: relative;
  overflow: hidden;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  ${({ showShadow }) =>
    showShadow &&
    css`
      border-radius: 10px;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.04);
    `}
`;

export const NoImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.ghostGray};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;

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

export default Image;
