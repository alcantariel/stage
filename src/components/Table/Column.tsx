import { ReactNode } from 'react';

export interface ColumnProps<T, N> {
  name?: N;
  header?: ReactNode;
  hidden?: boolean;
  width?: string;
  data: (value: T, index: number) => ReactNode;
}

export const Column = <T,>(props: ColumnProps<T, keyof T | ''>) => null;
