import type { InputHTMLAttributes, ReactElement } from 'react';
import { forwardRef, useCallback } from 'react';
import type { CustomStyle } from 'utils/theme';

import { InnerInput, Input, Label, StyledTextInput } from './textInput.styles';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'filled' | 'outlined' | 'standard';
  fullWidth?: boolean;
  labelText: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  customStyle?: CustomStyle;
  hasError?: boolean;
}

const TextInput = forwardRef<HTMLDivElement, TextInputProps>(
  (
    {
      variant = 'filled',
      fullWidth = false,
      id,
      labelText,
      startIcon,
      endIcon,
      customStyle,
      hasError = false,
      disabled,
      type,
      ...props
    },
    ref
  ) => {
    const handleWheel = useCallback(
      (e: React.WheelEvent<HTMLInputElement>) => {
        if (type === 'number') {
          e.currentTarget.blur();
        }
      },
      [type]
    );

    return (
      <StyledTextInput ref={ref} fullWidth={fullWidth} disabled={disabled} css={customStyle}>
        <Label htmlFor={id}>{labelText}</Label>
        <InnerInput fullWidth={fullWidth} variant={variant} hasError={hasError}>
          {Boolean(startIcon) && startIcon}
          <Input id={id} fullWidth={fullWidth} disabled={disabled} type={type} onWheel={handleWheel} {...props} />
          {Boolean(endIcon) && endIcon}
        </InnerInput>
      </StyledTextInput>
    );
  }
);

export default TextInput;
