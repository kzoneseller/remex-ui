import type { FC } from 'react';
import ReactSelect, { type Props as ReactSelectProps } from 'react-select';
import type { CustomStyle } from 'utils/theme';

interface SelectProps extends ReactSelectProps {
  customStyle?: CustomStyle;
}

const Select: FC<SelectProps> = ({ customStyle, ...props }) => {
  return <ReactSelect css={customStyle} className="react-select-container" {...props} />;
};

export default Select;
