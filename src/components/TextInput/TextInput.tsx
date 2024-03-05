import type { InputHTMLAttributes, ReactElement } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { InnerInput, Input, Label, StyledTextInput } from './textInput.styles';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'filled' | 'outlined' | 'standard';
  fullWidth?: boolean;
  labelText: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  customStyle?: CustomStyle;
}

const TextInput = forwardRef<HTMLDivElement, TextInputProps>(
  (
    { variant = 'filled', fullWidth = false, id, labelText, startIcon, endIcon, customStyle, disabled, ...props },
    ref
  ) => {
    return (
      <StyledTextInput ref={ref} fullWidth={fullWidth} disabled={disabled} css={customStyle}>
        <Label htmlFor={id}>{labelText}</Label>
        <InnerInput fullWidth={fullWidth} variant={variant}>
          {Boolean(startIcon) && startIcon}
          <Input id={id} fullWidth={fullWidth} disabled={disabled} {...props} />
          {Boolean(endIcon) && endIcon}
        </InnerInput>
      </StyledTextInput>
    );
  }
);

export default TextInput;
