import { defaultLocale, getLocale } from '../LocaleUtils';

const languageGetter = jest.spyOn(window.navigator, 'language', 'get');

describe('LocaleUtils.test.ts', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should return default locale', () => {
    languageGetter.mockReturnValue('');
    expect(getLocale()).toEqual(defaultLocale);
  });

  it('should return navigator locale', () => {
    languageGetter.mockReturnValue('en-US');
    expect(getLocale()).toEqual('en-US');
  });
});
