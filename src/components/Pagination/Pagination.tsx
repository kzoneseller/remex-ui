import { IconChevronLeft, IconChevronRight, IconChevronsLeft, IconChevronsRight } from '@tabler/icons-react';
import type { SyntheticEvent } from 'react';
import { forwardRef } from 'react';
import type { CustomStyle } from 'utils/theme';

import { Icon, PaginationScroller, StyledPagination, StyledPaginationItem } from './pagination.styles';

interface PaginationProps {
  count: number;
  currentPage: number;
  onChange?: (e: SyntheticEvent<HTMLDivElement>, value: number) => void;
  showFirstButton?: boolean;
  showPrevButton?: boolean;
  showLastButton?: boolean;
  showNextButton?: boolean;
  customStyle?: CustomStyle;
}

const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      count,
      currentPage,
      onChange,
      showFirstButton = true,
      showPrevButton = true,
      showLastButton = true,
      showNextButton = true,
      customStyle,
    },
    ref
  ) => {
    const firstNum = Math.trunc((currentPage - 1) / 10) * 10 + 1;
    const prevPage = firstNum - 1;
    const nextFirstNum = firstNum + 10;
    const pageSize = (nextFirstNum <= count ? nextFirstNum : count + 1) - firstNum;

    const isPrevDisabled = prevPage < 1;
    const isNextDisabled = nextFirstNum > count;

    return (
      <StyledPagination ref={ref} css={customStyle}>
        <PaginationScroller>
          {showFirstButton && (
            <Icon
              onClick={e => {
                if (!isPrevDisabled) {
                  onChange?.(e, 1);
                }
              }}
              disabled={isPrevDisabled}
            >
              <IconChevronsLeft />
            </Icon>
          )}
          {showPrevButton && (
            <Icon
              onClick={e => {
                if (!isPrevDisabled) {
                  onChange?.(e, prevPage < 1 ? 1 : prevPage);
                }
              }}
              disabled={isPrevDisabled}
            >
              <IconChevronLeft />
            </Icon>
          )}
          {Array.from({ length: pageSize }, (_, index) => (
            <StyledPaginationItem
              key={`page-${index}`}
              active={currentPage === firstNum + index}
              onClick={e => onChange?.(e, firstNum + index)}
            >
              {firstNum + index}
            </StyledPaginationItem>
          ))}
          {showNextButton && (
            <Icon
              onClick={e => {
                if (!isNextDisabled) {
                  onChange?.(e, nextFirstNum > count ? count : nextFirstNum);
                }
              }}
              disabled={isNextDisabled}
            >
              <IconChevronRight />
            </Icon>
          )}
          {showLastButton && (
            <Icon
              onClick={e => {
                if (!isNextDisabled) {
                  onChange?.(e, count);
                }
              }}
              disabled={isNextDisabled}
            >
              <IconChevronsRight />
            </Icon>
          )}
        </PaginationScroller>
      </StyledPagination>
    );
  }
);

export default Pagination;
