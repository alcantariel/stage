import { ReactNode } from 'react';

interface AnyObject {
  [key: string]: any;
}

export interface ColumnProps<T> {
  name?: string;
  header?: ReactNode;
  hidden?: boolean;
  data: (value: T, index: number) => ReactNode;
}

export const Column = <T extends AnyObject>(props: ColumnProps<T>) => null;
