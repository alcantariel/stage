export type Direction = 'asc' | 'desc' | 'sort';

export interface Sort {
  name: string; // table column name
  direction: Direction;
}
