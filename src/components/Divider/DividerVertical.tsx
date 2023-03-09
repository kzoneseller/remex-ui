import styled from '@emotion/styled';

import DividerStyle from './Divider.styles';

const DividerVertical = styled.div`
  ${DividerStyle};

  height: 1rem;
  flex-direction: row;
  color: ${({ theme: { colors } }) => colors.textGrey};

  :before,
  :after {
    background-color: ${({ theme: { colors } }) => colors.border};
  }

  :before,
  :after {
    content: '';
    flex-grow: 1;
    height: 0.125rem;
    width: 100%;
  }
`;

export default DividerVertical;
