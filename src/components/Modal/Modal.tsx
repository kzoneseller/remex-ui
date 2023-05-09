import type { PropsWithChildren } from 'react';
import { forwardRef, useEffect } from 'react';
import { disableScroll, enableScroll } from 'utils/scroll';
import type { CustomStyle } from 'utils/theme';

import { Backdrop, Contents, StyledModal } from './modal.styles';

interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  customStyle?: CustomStyle;
}

const Modal = forwardRef<HTMLDivElement, PropsWithChildren<ModalProps>>(
  ({ open = false, onClose, customStyle, children }, ref) => {
    useEffect(() => {
      if (open) {
        disableScroll();
      } else {
        enableScroll();
      }
    }, [open]);

    return open ? (
      <StyledModal ref={ref} css={customStyle}>
        <Backdrop onClick={onClose} />
        <Contents>{children}</Contents>
      </StyledModal>
    ) : null;
  }
);

export default Modal;
