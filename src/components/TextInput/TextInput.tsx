import { CSSObject } from '@emotion/react/dist/emotion-react.cjs';
import type { FC, InputHTMLAttributes, ReactElement } from 'react';

import { InnerInput, Input, Label, StyledTextInput } from './TextInput.styles';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  labelText: string;
  startIcon?: ReactElement;
  customStyle?: CSSObject;
}

const TextInput: FC<TextInputProps> = ({ fullWidth = false, id, labelText, startIcon, customStyle, ...props }) => {
  return (
    <StyledTextInput fullWidth={fullWidth} css={customStyle}>
      <Label htmlFor={id}>{labelText}</Label>
      <InnerInput fullWidth={fullWidth}>
        {Boolean(startIcon) && startIcon}
        <Input id={id} {...props} />
      </InnerInput>
    </StyledTextInput>
  );
};

export default TextInput;
