import type { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import { CustomStyle } from 'utils/theme';

import { StepLayoutContents, StepLayoutWrapper, StyledStepLayout } from './templates.styles';

interface StepLayoutProps {
  hide?: boolean;
  step: number;
  setStep?: Dispatch<SetStateAction<number>>;
  customStyle?: CustomStyle;
}

const StepLayout: FC<PropsWithChildren<StepLayoutProps>> = ({ hide = false, step, setStep, customStyle, children }) => {
  return (
    <StyledStepLayout hide={hide} css={customStyle}>
      <StepLayoutWrapper hide={hide}>
        <h2>Step {step}</h2>
        {hide && <h6 onClick={() => setStep && setStep(step)}>View / Edit</h6>}
      </StepLayoutWrapper>
      <StepLayoutContents hide={hide}>{children}</StepLayoutContents>
    </StyledStepLayout>
  );
};

export default StepLayout;
