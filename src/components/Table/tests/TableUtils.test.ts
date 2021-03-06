import { Sort } from 'types';

import { getNextDirection } from '../TableUtils';

describe('TableUtils.test.tsx', () => {
  it('should return asc as default', () => {
    const incorrectSort: Sort<'name'> = {
      name: 'name',
      direction: 'desc'
    };

    expect(getNextDirection(incorrectSort, 'name2')).toEqual('asc');
  });

  it('should return desc as next direction', () => {
    const asc: Sort<'name'> = {
      name: 'name',
      direction: 'asc'
    };

    expect(getNextDirection(asc, 'name')).toEqual('desc');
  });

  it('should return asc as next direction', () => {
    const sort: Sort<'name'> = {
      name: 'name',
      direction: 'sort'
    };

    expect(getNextDirection(sort, 'name')).toEqual('asc');
  });
});
