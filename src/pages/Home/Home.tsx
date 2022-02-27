import { Input, Pagination, Select } from 'components';
import { useState } from 'react';

const pageable = {
  first: true,
  last: false,
  number: 1,
  numberOfElements: 20,
  size: 20,
  totalElements: 40,
  totalPages: 25
};

const Home = () => {
  const [pagination, setPagination] = useState(pageable);

  const handlePagination = (page: any) => {
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

  return (
    <>
      <Select
        name="name"
        label="Name"
        options={['1', '2']}
        error="name is required"
      />
      <Input name="name" label="Name" error="name is required" />
      <Pagination page={pagination} onPageChange={handlePagination} />
    </>
  );
};

export { Home, Home as default };
