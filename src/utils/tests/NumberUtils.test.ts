import { isNumber } from '../NumberUtils';

describe('NumberUtils.test.ts', () => {
  describe('isNumber', () => {
    it('should return true', () => {
      expect(isNumber(123)).toBeTruthy();
    });

    it('should return true even if value is a numeric string', () => {
      expect(isNumber('123')).toBeTruthy();
    });

    it('should return false', () => {
      expect(isNumber('123a')).toBeFalsy();
    });
  });
});
