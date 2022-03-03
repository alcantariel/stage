import { Pagination, SectionTitle } from 'components';
import { useState } from 'react';
import { Pageable } from 'types';

const page: Pageable = {
  first: true,
  last: false,
  number: 1,
  numberOfElements: 20,
  size: 20,
  totalElements: 40,
  totalPages: 25
};

const PaginationPage = () => {
  const [pagination, setPagination] = useState(page);

  const handlePagination = (page: any) => {
    setPagination(prev => {
      return {
        ...prev,
        size: page.size,
        number: page.number,
        first: page.number === 1,
        last: page.number === page.totalPages
      };
    });
  };

  return (
    <>
      <SectionTitle>Pagination</SectionTitle>
      <Pagination page={pagination} onPageChange={handlePagination} />
    </>
  );
};

export { PaginationPage, PaginationPage as default };
