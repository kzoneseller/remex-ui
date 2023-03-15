import type { FC, PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { disableScroll, enableScroll } from 'utils/scroll';

import { Backdrop, Contents, StyledModal } from './modal.styles';

interface ModalProps {
  open?: boolean;
  onClose?: () => void;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({ open = false, onClose, children }) => {
  useEffect(() => {
    if (open) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [open]);

  return open ? (
    <StyledModal>
      <Backdrop onClick={onClose} />
      <Contents>{children}</Contents>
    </StyledModal>
  ) : null;
};

export default Modal;
