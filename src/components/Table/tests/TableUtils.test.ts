import { getNextDirection } from 'components';
import { Sort } from 'types';

describe('TableUtils.test.tsx', () => {
  it('should return asc as default', () => {
    const incorrectSort: Sort = {
      name: 'name',
      direction: 'desc'
    };

    expect(getNextDirection(incorrectSort, 'name2')).toEqual('asc');
  });

  it('should return desc as next direction', () => {
    const asc: Sort = {
      name: 'name',
      direction: 'asc'
    };

    expect(getNextDirection(asc, 'name')).toEqual('desc');
  });

  it('should return asc as next direction', () => {
    const sort: Sort = {
      name: 'name',
      direction: 'sort'
    };

    expect(getNextDirection(sort, 'name')).toEqual('asc');
  });
});
