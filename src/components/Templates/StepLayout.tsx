import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { forwardRef } from 'react';
import { CustomStyle } from 'utils/theme';

import { StepLayoutContents, StepLayoutWrapper, StyledStepLayout } from './templates.styles';

interface StepLayoutProps {
  hide?: boolean;
  step: number;
  setStep?: Dispatch<SetStateAction<number>>;
  customStyle?: CustomStyle;
}

const StepLayout = forwardRef<HTMLDivElement, PropsWithChildren<StepLayoutProps>>(
  ({ hide = false, step, setStep, customStyle, children }, ref) => {
    return (
      <StyledStepLayout ref={ref} hide={hide} css={customStyle}>
        <StepLayoutWrapper hide={hide}>
          <h2>Step {step}</h2>
          {hide && <h6 onClick={() => setStep && setStep(step)}>View / Edit</h6>}
        </StepLayoutWrapper>
        <StepLayoutContents hide={hide}>{children}</StepLayoutContents>
      </StyledStepLayout>
    );
  }
);

export default StepLayout;
