import styled from '@emotion/styled';

import DividerStyle from './Divider.styles';

const DividerHorizontal = styled.div`
  ${DividerStyle};

  margin: 0 1rem;
  height: auto;
  width: 1rem;
  flex-direction: column;
  color: ${({ theme: { colors } }) => colors.textGrey};

  :before,
  :after {
    background-color: ${({ theme: { colors } }) => colors.border};
  }

  :before,
  :after {
    content: '';
    flex-grow: 1;
    height: 100%;
    width: 0.125rem;
  }
`;

export default DividerHorizontal;
