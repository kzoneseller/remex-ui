import type { InputHTMLAttributes, ReactElement } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { InnerInput, Input, Label, StyledTextInput } from './textInput.styles';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  labelText: string;
  startIcon?: ReactElement;
  customStyle?: CustomStyle;
}

const TextInput = forwardRef<HTMLDivElement, TextInputProps>(
  ({ fullWidth = false, id, labelText, startIcon, customStyle, ...props }, ref) => {
    return (
      <StyledTextInput ref={ref} fullWidth={fullWidth} css={customStyle}>
        <Label htmlFor={id}>{labelText}</Label>
        <InnerInput fullWidth={fullWidth}>
          {Boolean(startIcon) && startIcon}
          <Input id={id} {...props} />
        </InnerInput>
      </StyledTextInput>
    );
  }
);

export default TextInput;
