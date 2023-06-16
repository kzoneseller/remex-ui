import { css } from '@emotion/react';
import { IconFileText, IconPhotoX } from '@tabler/icons-react';
import Modal from 'components/Modal';
import Skeleton from 'components/Skeleton';
import { forwardRef, HTMLAttributes, type MouseEvent, useMemo, useState } from 'react';
import { CustomStyle } from 'utils/theme';

import { CloseIcon, HiddenImageLoader, ImageWrapper, NoImage, StyledImg } from './image.styles';

interface ImageProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  coverImageUrl?: string | null;
  url: string;
  alt: string;
  mediaType?: 'IMAGE' | 'VIDEO' | 'PDF';
  width?: number;
  height?: number;
  onRemove?: () => void;
  showShadow?: boolean;
  customStyle?: CustomStyle;
}

const Image = forwardRef<HTMLDivElement, ImageProps>(
  (
    {
      coverImageUrl,
      url,
      alt,
      mediaType = 'IMAGE',
      width = 120,
      height = 120,
      onClick,
      onRemove,
      showShadow = true,
      customStyle,
      ...props
    },
    ref
  ) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const src = coverImageUrl ?? url;

    const noImageIcon = useMemo(() => {
      if (mediaType === 'PDF') {
        return (
          <>
            <IconFileText />
            PDF
          </>
        );
      }

      return <IconPhotoX />;
    }, [mediaType]);

    const handleClickNoImage = (e: MouseEvent<HTMLDivElement>) => {
      if (onClick) {
        onClick(e);
        return;
      }

      window.open(url, '_blank');
    };

    const handleClickImage = (e: MouseEvent<HTMLDivElement>) => {
      if (onClick) {
        onClick(e);
        return;
      }

      if (mediaType === 'VIDEO') {
        window.open(url, '_blank');
        return;
      }

      setOpenModal(true);
    };

    const handleClickRemove = (e: MouseEvent<SVGSVGElement>) => {
      if (onRemove) {
        e.stopPropagation();
        onRemove();
      }
    };

    return (
      <>
        <ImageWrapper
          ref={ref}
          width={width}
          height={height}
          showShadow={showShadow && loaded && !error}
          css={customStyle}
          {...props}
        >
          {!loaded && !error && <Skeleton width={width} height={height} round={10} disableAspectRatio />}
          {!loaded && error && (
            <NoImage
              css={css`
                cursor: default;
              `}
            >
              <IconPhotoX />
            </NoImage>
          )}
          {loaded && (
            <>
              {error ? (
                <NoImage onClick={handleClickNoImage}>{noImageIcon}</NoImage>
              ) : (
                <StyledImg src={src} alt={alt} width={width} height={height} onClick={handleClickImage} />
              )}
              {Boolean(onRemove) && <CloseIcon onClick={handleClickRemove} />}
            </>
          )}
          <HiddenImageLoader
            src={src}
            onLoad={() => {
              setLoaded(true);
            }}
            onError={() => {
              if (mediaType === 'PDF' || mediaType === 'VIDEO') {
                setLoaded(true);
              }

              setError(true);
            }}
          />
        </ImageWrapper>
        <Modal
          open={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
          customStyle={css`
            & > div:last-of-type {
              width: fit-content;
              height: fit-content;
              padding: 0;
              border-radius: 20px;
              overflow: hidden;
            }
          `}
        >
          <img src={src} alt={alt} css={css``} />
          <CloseIcon
            css={css`
              top: 12px;
              right: 12px;
            `}
            onClick={() => {
              setOpenModal(false);
            }}
          />
        </Modal>
      </>
    );
  }
);

export default Image;
