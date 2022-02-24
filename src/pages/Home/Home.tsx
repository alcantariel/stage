import { Pagination } from 'components';
import { useState } from 'react';
import { Page, Pageable } from 'types';

const pageable: Pageable = {
  first: true,
  last: false,
  number: 1,
  numberOfElements: 20,
  size: 20,
  totalElements: 40,
  totalPages: 3
};

const Home = () => {
  const [pagination, setPagination] = useState(pageable);

  const handlePagination = (page: Page) => {
    setPagination(prev => {
      return {
        ...prev,
        size: page.size,
        number: page.number,
        first: page.number === 1,
        last: page.number === pageable.totalPages
      };
    });
  };

  return <Pagination page={pagination} onChangePage={handlePagination} />;
};

export { Home, Home as default };
