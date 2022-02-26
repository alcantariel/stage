import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pageable } from 'types';
import { render } from 'utils/testing';

import { Pagination } from '../Pagination';

const pageable: Pageable = {
  first: true,
  last: false,
  number: 1,
  numberOfElements: 20,
  size: 20,
  totalElements: 40,
  totalPages: 25
};

describe('Pagination.test.tsx', () => {
  it('should render pagination correctly', () => {
    const onPageChangeFn = jest.fn();

    render(<Pagination page={pageable} onPageChange={onPageChangeFn} />);

    expect(screen.getByTestId('pageselector_options')).toHaveValue('20');
    expect(screen.getByText('itens')).toBeInTheDocument();
    expect(screen.getByTestId('angle_left')).toBeInTheDocument();
    expect(screen.getByTestId('page_input')).toHaveValue('1');
    expect(screen.getByTestId('angle_right')).toBeInTheDocument();
    expect(onPageChangeFn).toHaveBeenCalledTimes(1);
    expect(onPageChangeFn).toHaveBeenCalledWith({ number: 1, size: 20 });
  });

  it('should not change page when click previous page because its in first page', () => {
    const onPageChangeFn = jest.fn();

    render(<Pagination page={pageable} onPageChange={onPageChangeFn} />);

    expect(screen.getByTestId('page_input')).toHaveValue('1');

    act(() => {
      userEvent.click(screen.getByTestId('angle_left'));
    });

    expect(screen.getByTestId('page_input')).toHaveValue('1');
    expect(onPageChangeFn).toHaveBeenCalledTimes(1);
    expect(onPageChangeFn).toHaveBeenCalledWith({ number: 1, size: 20 });
  });

  it('should not change page when click next page because its in last page', () => {
    const onPageChangeFn = jest.fn();

    render(
      <Pagination
        page={{ ...pageable, number: 25 }}
        onPageChange={onPageChangeFn}
      />
    );

    expect(screen.getByTestId('page_input')).toHaveValue('25');

    act(() => {
      userEvent.click(screen.getByTestId('angle_right'));
    });

    expect(screen.getByTestId('page_input')).toHaveValue('25');
    expect(onPageChangeFn).toHaveBeenCalledTimes(1);
    expect(onPageChangeFn).toHaveBeenCalledWith({ number: 25, size: 20 });
  });

  it('should stay in first page when input is not a number', () => {
    const onPageChangeFn = jest.fn();

    render(<Pagination page={pageable} onPageChange={onPageChangeFn} />);

    act(() => {
      userEvent.type(screen.getByTestId('page_input'), 'a');
    });

    expect(screen.getByTestId('page_input')).toHaveValue('1');
    expect(onPageChangeFn).toHaveBeenCalledTimes(1);
    expect(onPageChangeFn).toHaveBeenCalledWith({ number: 1, size: 20 });
  });

  it('should change page when click next page', () => {
    const onPageChangeFn = jest.fn();

    render(<Pagination page={pageable} onPageChange={onPageChangeFn} />);

    act(() => {
      userEvent.click(screen.getByTestId('angle_right'));
    });

    expect(screen.getByTestId('page_input')).toHaveValue('2');
    expect(onPageChangeFn).toHaveBeenCalledTimes(2);
    expect(onPageChangeFn).toHaveBeenCalledWith({ number: 2, size: 20 });
  });

  it('should change page when click previous page', () => {
    const onPageChangeFn = jest.fn();

    render(
      <Pagination
        page={{ ...pageable, number: 25 }}
        onPageChange={onPageChangeFn}
      />
    );

    expect(screen.getByTestId('page_input')).toHaveValue('25');

    act(() => {
      userEvent.click(screen.getByTestId('angle_left'));
    });

    expect(screen.getByTestId('page_input')).toHaveValue('24');
    expect(onPageChangeFn).toHaveBeenCalledTimes(2);
    expect(onPageChangeFn).toHaveBeenCalledWith({ number: 24, size: 20 });
  });

  it('should not change page when type inside input and not blur', () => {
    const onPageChangeFn = jest.fn();

    render(<Pagination page={pageable} onPageChange={onPageChangeFn} />);

    expect(screen.getByTestId('page_input')).toHaveValue('1');

    act(() => {
      userEvent.type(screen.getByTestId('page_input'), '1');
    });

    expect(screen.getByTestId('page_input')).toHaveValue('11');
    expect(onPageChangeFn).toHaveBeenCalledTimes(1);
    expect(onPageChangeFn).toHaveBeenCalledWith({ number: 1, size: 20 });
  });

  it('should change page when type inside input and blur', async () => {
    const onPageChangeFn = jest.fn();

    render(<Pagination page={pageable} onPageChange={onPageChangeFn} />);

    expect(screen.getByTestId('page_input')).toHaveValue('1');

    act(() => {
      userEvent.type(screen.getByTestId('page_input'), '1');
    });

    fireEvent.blur(screen.getByTestId('page_input'));

    await waitFor(() => expect(onPageChangeFn).toHaveBeenCalled());

    expect(screen.getByTestId('page_input')).toHaveValue('11');
    expect(onPageChangeFn).toHaveBeenCalledTimes(2);
    expect(onPageChangeFn).toHaveBeenCalledWith({ number: 11, size: 20 });
  });

  it('should change page when type inside input and press enter', async () => {
    const onPageChangeFn = jest.fn();

    render(<Pagination page={pageable} onPageChange={onPageChangeFn} />);

    expect(screen.getByTestId('page_input')).toHaveValue('1');

    act(() => {
      userEvent.type(screen.getByTestId('page_input'), '1');
    });

    userEvent.type(screen.getByTestId('page_input'), '{enter}');

    await waitFor(() => expect(onPageChangeFn).toHaveBeenCalled());

    expect(screen.getByTestId('page_input')).toHaveValue('11');
    expect(onPageChangeFn).toHaveBeenCalledTimes(2);
    expect(onPageChangeFn).toHaveBeenCalledWith({ number: 11, size: 20 });
  });

  it('should change number of items per page', async () => {
    const onPageChangeFn = jest.fn();

    render(<Pagination page={pageable} onPageChange={onPageChangeFn} />);

    expect(screen.getByTestId('page_input')).toHaveValue('1');
    expect(screen.getByTestId('pageselector_options')).toHaveValue('20');
    expect(onPageChangeFn).toHaveBeenCalledTimes(1);
    expect(onPageChangeFn).toHaveBeenCalledWith({ number: 1, size: 20 });

    act(() => {
      userEvent.selectOptions(screen.getByTestId('pageselector_options'), '50');
    });

    await waitFor(() => expect(onPageChangeFn).toHaveBeenCalled());

    expect(screen.getByTestId('page_input')).toHaveValue('1');
    expect(screen.getByTestId('pageselector_options')).toHaveValue('50');
    expect(onPageChangeFn).toHaveBeenCalledTimes(2);
    expect(onPageChangeFn).toHaveBeenCalledWith({ number: 1, size: 50 });
  });
});
