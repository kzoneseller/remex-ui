import styled from '@emotion/styled';

import DividerStyle from './divider.styles';

const DividerVertical = styled.div`
  ${DividerStyle};

  margin: 0 1rem;
  height: auto;
  width: 1rem;
  flex-direction: column;
  color: ${({ theme: { colors } }) => colors.lightGray};

  :before,
  :after {
    background-color: ${({ theme: { colors } }) => colors.lightGray};
  }

  :before,
  :after {
    content: '';
    flex-grow: 1;
    height: 100%;
    width: 1px;
  }
`;

export default DividerVertical;
