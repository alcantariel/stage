import { Container, Pagination, Table } from 'components';
import { useState } from 'react';
import { PageRequest, Page, Property } from 'types';

const initialPage: Page = {
  first: true,
  last: false,
  number: 1,
  numberOfElements: 20,
  size: 20,
  totalElements: 40,
  totalPages: 25
};

const properties: Property[] = [
  {
    name: 'page',
    description: 'Interface that have all information about the page.',
    type: '{ first: boolean, last: boolean, number: number, numberOfElements: number, size: number, totalElements: number, totalPages: number }',
    defaultValue: '',
    required: true
  },
  {
    name: 'onPageChange',
    description: 'Called when page number or size is changed.',
    type: '(pageRequest: { number: number, size: number }) => void',
    defaultValue: '',
    required: true
  }
];

const PaginationPage = () => {
  const [page, setPage] = useState(initialPage);

  const handlePage = (page: PageRequest) => {
    setPage(prev => {
      return {
        ...prev,
        size: page.size,
        number: page.number,
        first: page.number === 1,
        last: page.number === prev.totalPages
      };
    });
  };

  return (
    <Container>
      <h1>Pagination</h1>
      <p>
        Used to split a large list into several pages, and consequently load
        only one at time.
      </p>
      <h2>When to use</h2>
      <ul>
        <li>
          When the list is very large and will take a long time to load all
          items.
        </li>
      </ul>
      <h2>Examples</h2>
      <Pagination page={page} onPageChange={handlePage} />
      <h2>Usage</h2>
      <code>{'<Pagination page={page} onPageChange={handlePage} />'}</code>
      <h2>Properties</h2>
      <Table values={properties} keyExtractor={property => property.name}>
        <Table.Column
          header="Name"
          data={(property: Property) => property.name}
        />
        <Table.Column
          header="Description"
          data={(property: Property) => property.description}
        />
        <Table.Column
          header="Type"
          data={(property: Property) => property.type}
        />
        <Table.Column
          header="Default"
          data={(property: Property) => property.defaultValue}
        />
        <Table.Column
          header="Required"
          data={(property: Property) => property.required.toString()}
        />
      </Table>
    </Container>
  );
};

export { PaginationPage, PaginationPage as default };
