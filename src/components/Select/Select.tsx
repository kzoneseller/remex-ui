import type { FC } from 'react';
import ReactSelect, { Props as ReactSelectProps } from 'react-select';

const Select: FC<ReactSelectProps> = props => {
  return <ReactSelect className="react-select-container" {...props} />;
};

export default Select;
