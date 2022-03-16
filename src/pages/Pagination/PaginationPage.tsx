import { Code, ComponentPage, Pagination } from 'components';
import { useState } from 'react';
import { PageRequest, Page, Property } from 'types';

const initialPage: Page = {
  first: true,
  last: false,
  number: 1,
  numberOfElements: 20,
  size: 20,
  totalElements: 8200,
  totalPages: 25
};

const properties: Property[] = [
  {
    name: 'page',
    description: 'Interface that have all information about the page.',
    type: '{ first: boolean, last: boolean, number: number, numberOfElements: number, size: number, totalElements: number, totalPages: number }',
    defaultValue: '',
    required: 'true'
  },
  {
    name: 'onPageChange',
    description: 'Called when page number or size is changed.',
    type: '(pageRequest: { number: number, size: number }) => void',
    defaultValue: '',
    required: 'true'
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
    <ComponentPage
      title="Pagination"
      description="Used to split a large list into several pages, and consequently load
    only one at time."
    >
      <ComponentPage.Section subtitle="When to Use">
        When the list is very large and will take a long time to load all items.
      </ComponentPage.Section>
      <ComponentPage.Section subtitle="Examples">
        <Pagination page={page} onPageChange={handlePage} />
      </ComponentPage.Section>
      <ComponentPage.Section subtitle="Usage">
        <Code>{'<Pagination page={page} onPageChange={handlePage} />'}</Code>
      </ComponentPage.Section>
      <ComponentPage.TableProperties properties={properties} />
    </ComponentPage>
  );
};

export { PaginationPage, PaginationPage as default };
