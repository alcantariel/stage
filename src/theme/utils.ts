import { lighten } from 'polished';
import { Theme } from 'types';

export const applyHover = (color: Theme[keyof Theme]): string =>
  lighten('.02', color);
