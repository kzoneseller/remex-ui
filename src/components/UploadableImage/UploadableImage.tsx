import { css } from '@emotion/react';
import { IconFileText, IconPhotoX, IconPlayerPlay, IconPlus } from '@tabler/icons-react';
import { Skeleton } from 'components/Skeleton';
import { type ChangeEvent, forwardRef, type HTMLAttributes, type MouseEvent, useRef, useState } from 'react';
import { CustomStyle } from 'utils/theme';

import {
  CloseIcon,
  FileInput,
  HiddenImageLoader,
  ImageBox,
  ImageWrapper,
  NoImage,
  StyledImg,
} from './uploadableImage.styles';

interface UploadableImageProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onRemove?: () => void;
  reuploadable?: boolean;
  customStyle?: CustomStyle;
  mediaType?: 'image' | 'video' | 'all';
}

const UploadableImage = forwardRef<HTMLDivElement, UploadableImageProps>(
  (
    {
      src,
      alt,
      width = 120,
      height = 120,
      onChange,
      onClick,
      onRemove,
      reuploadable = false,
      customStyle,
      mediaType = 'all',
      ...props
    },
    ref
  ) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    const inputFileRef = useRef<HTMLInputElement>(null);

    const handleClickUpload = () => {
      inputFileRef.current?.click();
    };

    const handleClickRemove = (e: MouseEvent<SVGSVGElement>) => {
      if (onRemove) {
        e.stopPropagation();
        onRemove();
      }
    };

    return (
      <ImageWrapper
        ref={ref}
        width={width}
        height={height}
        hasImage={Boolean(src) && loaded && !error}
        css={customStyle}
        {...props}
      >
        {!src && (
          <NoImage
            css={css`
              cursor: pointer;
            `}
            onClick={() => inputFileRef.current?.click()}
          >
            <IconPlus />
          </NoImage>
        )}
        {Boolean(src) && !loaded && !error && <Skeleton width={width} height={height} round={10} disableAspectRatio />}
        {Boolean(src) && !loaded && error && (
          <NoImage onClick={handleClickUpload}>
            <IconPhotoX />
          </NoImage>
        )}
        {Boolean(src) && loaded && (
          <ImageBox onClick={reuploadable ? handleClickUpload : onClick}>
            {error ? (
              <NoImage>
                {src?.includes('data:application/pdf') && (
                  <>
                    <IconFileText />
                    PDF
                  </>
                )}
                {src?.includes('data:video/') && (
                  <>
                    <video src={src} muted preload="auto" />
                    <IconPlayerPlay
                      css={css`
                        position: absolute;
                      `}
                    />
                  </>
                )}
              </NoImage>
            ) : (
              <StyledImg src={src} alt={alt} width={width} height={height} />
            )}
            {Boolean(onRemove) && <CloseIcon onClick={handleClickRemove} />}
          </ImageBox>
        )}
        <HiddenImageLoader
          src={src}
          onLoad={() => {
            setLoaded(true);
          }}
          onError={() => {
            if (Boolean(src?.includes('data:application/pdf')) || Boolean(src?.includes('data:video/'))) {
              setLoaded(true);
            }

            setError(true);
          }}
        />
        {Boolean(onChange) && (
          <FileInput
            ref={inputFileRef}
            type="file"
            multiple
            accept={mediaType === 'image' ? 'image/*' : mediaType === 'video' ? 'video/*' : 'image/*, .pdf, video/*'}
            onChange={onChange}
          />
        )}
      </ImageWrapper>
    );
  }
);

export default UploadableImage;
