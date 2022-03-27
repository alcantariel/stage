import { ComponentPage, Table } from 'components';
import { Property } from 'types';

interface TableItem {
  id: string;
  name: string;
  surname: string;
}

const items: TableItem[] = [
  {
    id: '1',
    name: 'Travis',
    surname: 'Scott'
  }
];

const properties: Property[] = [];

const TablePage = () => {
  return (
    <ComponentPage title="Table" description="Show your items with grace.">
      <ComponentPage.Section subtitle="Examples">
        <Table
          values={items}
          onSort={() => {}}
          keyExtractor={(item: TableItem) => item.id}
          defaultSort={{ direction: 'asc', name: 'id' }}
        >
          <Table.Column
            name="id"
            header="ID"
            data={(item: TableItem) => item.id}
          />
          <Table.Column
            name="name"
            header="Name"
            data={(item: TableItem) => item.name}
          />
          <Table.Column
            name="surname"
            header="Surname"
            data={(item: TableItem) => item.surname}
          />
        </Table>
      </ComponentPage.Section>
      <ComponentPage.TableProperties properties={properties} />
    </ComponentPage>
  );
};

export default TablePage;
