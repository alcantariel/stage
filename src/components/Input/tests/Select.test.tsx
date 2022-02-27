import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from '../Select';

describe('Select.test.tsx', () => {
  describe('tests with strings', () => {
    const stringOptions = ['Dawn FM', 'ASTROWORLD'];

    it('should render correctly', () => {
      const onBlurFn = jest.fn();
      const onChangeFn = jest.fn();

      render(
        <Select
          name="album"
          label="Album"
          onBlur={onBlurFn}
          onChange={onChangeFn}
          options={stringOptions}
        />
      );

      expect(screen.getByTestId('label_select_album')).toHaveTextContent(
        'Album'
      );
      expect(screen.getByTestId('select_album')).toHaveValue('');
      expect(screen.queryByTestId('error_test_album')).not.toBeInTheDocument();
    });

    it('should render correctly without label', () => {
      const onBlurFn = jest.fn();
      const onChangeFn = jest.fn();

      render(
        <Select
          name="album"
          onBlur={onBlurFn}
          onChange={onChangeFn}
          options={stringOptions}
        />
      );

      expect(
        screen.queryByTestId('label_select_album')
      ).not.toBeInTheDocument();
      expect(screen.getByTestId('select_album')).toHaveValue('');
      expect(screen.queryByTestId('error_test_album')).not.toBeInTheDocument();
    });

    it('should render with default value', () => {
      const onBlurFn = jest.fn();
      const onChangeFn = jest.fn();

      render(
        <Select
          name="album"
          label="Album"
          value="ASTROWORLD"
          onBlur={onBlurFn}
          onChange={onChangeFn}
          options={stringOptions}
        />
      );

      expect(screen.getByTestId('select_album')).toHaveValue('ASTROWORLD');
    });

    it('should change select value', () => {
      const onBlurFn = jest.fn();
      const onChangeFn = jest.fn();

      render(
        <Select
          name="album"
          label="Album"
          onBlur={onBlurFn}
          onChange={onChangeFn}
          options={stringOptions}
        />
      );

      expect(screen.getByTestId('select_album')).toHaveValue('');

      act(() => {
        userEvent.selectOptions(
          screen.getByTestId('select_album'),
          'ASTROWORLD'
        );
      });

      expect(screen.getByTestId('select_album')).toHaveValue('ASTROWORLD');
      expect(onChangeFn).toHaveBeenCalled();
    });

    it('should not show error text because blur has not been dispatched', () => {
      const onBlurFn = jest.fn();
      const onChangeFn = jest.fn();

      render(
        <Select
          name="album"
          label="Album"
          onBlur={onBlurFn}
          onChange={onChangeFn}
          options={stringOptions}
          error="album is required"
        />
      );

      expect(screen.getByTestId('select_album')).toHaveValue('');
      expect(screen.queryByTestId('error_test_album')).not.toBeInTheDocument();
      expect(onBlurFn).not.toHaveBeenCalled();
    });

    it('should show error text because album is required and blur has been dispatched', () => {
      const onBlurFn = jest.fn();
      const onChangeFn = jest.fn();

      render(
        <Select
          name="album"
          label="Album"
          onBlur={onBlurFn}
          onChange={onChangeFn}
          options={stringOptions}
          error="album is required"
        />
      );

      expect(screen.getByTestId('select_album')).toHaveValue('');
      expect(screen.queryByTestId('error_test_album')).not.toBeInTheDocument();

      act(() => {
        fireEvent.blur(screen.getByTestId('select_album'));
      });

      expect(screen.getByTestId('select_album')).toHaveValue('');
      expect(screen.queryByText('album is required')).toBeInTheDocument();
    });
  });

  describe('tests with objects', () => {
    const objectOptions = [
      { id: '1', description: 'Dawn FM' },
      { id: '2', description: 'ASTROWORLD' }
    ];

    it('should render correctly', () => {
      const onBlurFn = jest.fn();
      const onChangeFn = jest.fn();

      render(
        <Select
          name="album"
          label="Album"
          onBlur={onBlurFn}
          onChange={onChangeFn}
          options={objectOptions}
          getOptionValue={option => option.id}
          getOptionLabel={option => option.description}
        />
      );

      expect(screen.getByTestId('label_select_album')).toHaveTextContent(
        'Album'
      );
      expect(screen.getByTestId('select_album')).toHaveValue('');
      expect(screen.queryByTestId('error_test_album')).not.toBeInTheDocument();
    });

    it('should render with defaultValue and getting id as value', () => {
      const onBlurFn = jest.fn();
      const onChangeFn = jest.fn();

      render(
        <Select
          value="2"
          name="album"
          label="Album"
          onBlur={onBlurFn}
          onChange={onChangeFn}
          options={objectOptions}
          getOptionValue={option => option.id}
          getOptionLabel={option => option.description}
        />
      );

      expect(screen.getByTestId('select_album')).toHaveValue('2');
    });
  });
});
