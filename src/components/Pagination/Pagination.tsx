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
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const firstNum = Math.floor((currentPage - 1) / 10) * 10 + 1;
    const lastNum = firstNum + 10;
    const pageSize = (lastNum < count ? lastNum : count) - firstNum + (currentPage + 10 > count ? 1 : 0);

    return (
      <StyledPagination ref={ref} css={customStyle}>
        <PaginationScroller>
          {showFirstButton && (
            <Icon onClick={e => onChange?.(e, 1)} disabled={currentPage === 1}>
              <IconChevronsLeft />
            </Icon>
          )}
          {showPrevButton && (
            <Icon onClick={e => onChange?.(e, prevPage < 1 ? 1 : prevPage)} disabled={prevPage < 1}>
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
            <Icon onClick={e => onChange?.(e, nextPage > count ? count : nextPage)} disabled={nextPage > count}>
              <IconChevronRight />
            </Icon>
          )}
          {showLastButton && (
            <Icon onClick={e => onChange?.(e, count)} disabled={currentPage === count || count === 0}>
              <IconChevronsRight />
            </Icon>
          )}
        </PaginationScroller>
      </StyledPagination>
    );
  }
);

export default Pagination;
