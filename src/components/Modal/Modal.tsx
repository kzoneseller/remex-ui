import type { FC, PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { disableScroll, enableScroll } from 'utils/scroll';
import type { CustomStyle } from 'utils/theme';

import { Backdrop, Contents, StyledModal } from './modal.styles';

interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  customStyle?: CustomStyle;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({ open = false, onClose, customStyle, children }) => {
  useEffect(() => {
    if (open) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [open]);

  return open ? (
    <StyledModal css={customStyle}>
      <Backdrop onClick={onClose} />
      <Contents>{children}</Contents>
    </StyledModal>
  ) : null;
};

export default Modal;
