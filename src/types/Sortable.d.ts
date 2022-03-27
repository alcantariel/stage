export type Direction = 'asc' | 'desc' | 'sort';

export interface Sort<N> {
  name: N;
  direction: Direction;
}
