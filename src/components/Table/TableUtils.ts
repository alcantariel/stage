import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Direction, Sort } from 'types';

export const getInitialSort = <N>(): Sort<N> => ({
  name: '' as any,
  direction: 'sort'
});

export const icons: Record<Direction, IconProp> = {
  sort: 'sort',
  asc: 'sort-up',
  desc: 'sort-down'
};

export const nextDirection: Record<Direction, Direction> = {
  sort: 'asc',
  asc: 'desc',
  desc: 'asc'
};

export const getNextDirection = <N>(prevSort: Sort<N>, name: N): Direction => {
  return prevSort.name === name ? nextDirection[prevSort.direction] : 'asc';
};
