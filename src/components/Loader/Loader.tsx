import styled from '@emotion/styled';

export const Loader = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
  position: relative;
  background: ${({ theme: { colors } }) => colors.lightGray};
  box-shadow: -24px 0 ${({ theme: { colors } }) => colors.lightGray},
    24px 0 ${({ theme: { colors } }) => colors.lightGray};
  box-sizing: border-box;
  animation: shadowPulse 2s linear infinite;

  @keyframes shadowPulse {
    33% {
      background: ${({ theme: { colors } }) => colors.lightGray};
      box-shadow: -24px 0 ${({ theme: { colors } }) => colors.ghostBlue},
        24px 0 ${({ theme: { colors } }) => colors.lightGray};
    }
    66% {
      background: ${({ theme: { colors } }) => colors.ghostBlue};
      box-shadow: -24px 0 ${({ theme: { colors } }) => colors.lightGray},
        24px 0 ${({ theme: { colors } }) => colors.lightGray};
    }
    100% {
      background: ${({ theme: { colors } }) => colors.lightGray};
      box-shadow: -24px 0 ${({ theme: { colors } }) => colors.lightGray},
        24px 0 ${({ theme: { colors } }) => colors.ghostBlue};
    }
  }
`;

export default Loader;
