import { screen } from '@testing-library/react';
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
    expect(screen.getByTestId('page_input')).toBeInTheDocument();
    expect(screen.getByTestId('angle_right')).toBeInTheDocument();
  });
});
