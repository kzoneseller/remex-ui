import styled from '@emotion/styled';

import DividerStyle from './divider.styles';

const DividerHorizontal = styled.div`
  ${DividerStyle};

  height: 0;
  flex-direction: row;
  color: ${({ theme: { colors } }) => colors.textGrey};
  padding: 0 20px;

  :before,
  :after {
    background-color: ${({ theme: { colors } }) => colors.textGrey};
  }

  :before,
  :after {
    content: '';
    flex-grow: 1;
    height: 1px;
    width: 100%;
  }
`;

export default DividerHorizontal;
