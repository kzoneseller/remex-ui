'use client';

import { Skeleton } from 'components/index';
import { TableCell, TableRow } from 'components/Table';

interface TableSkeletonProps {
  column: number;
  row?: number;
  height?: number;
  round?: number;
}

const TableSkeleton = ({ column, row = 10, height = 40, round = 4 }: TableSkeletonProps) => {
  return (
    <>
      {Array.from({ length: row }, (_, i) => (
        <TableRow key={`table-skeleton-row-${i}`}>
          {Array.from({ length: column }, (_, j) => (
            <TableCell key={`table-skeleton-cell-${j}`}>
              <Skeleton height={height} round={round} disableAspectRatio />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export default TableSkeleton;
