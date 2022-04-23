import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from 'utils/testing';

import { Table } from '../Table';

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

describe('Table.test.tsx', () => {
  it('should render empty table', () => {
    render(
      <Table<TableItem>
        values={[]}
        keyExtractor={item => `${item.id}_${item.name}_${item.surname}`}
      >
        <Table.Column<TableItem> header="Name" data={item => item.name} />
        <Table.Column<TableItem> header="Surname" data={item => item.surname} />
      </Table>
    );

    expect(screen.getByText('Table is empty')).toBeInTheDocument();
  });

  it('should render table items', () => {
    render(
      <Table
        values={items}
        keyExtractor={item => `${item.id}_${item.name}_${item.surname}`}
      >
        <Table.Column<TableItem> header="Name" data={item => item.name} />
        <Table.Column<TableItem> header="Surname" data={item => item.surname} />
      </Table>
    );

    expect(screen.getByTestId('Name_0')).toHaveTextContent('Name');
    expect(screen.getByTestId('Surname_1')).toHaveTextContent('Surname');
    expect(screen.getByTestId('1_Travis_Scott_0')).toHaveTextContent('Travis');
    expect(screen.getByTestId('1_Travis_Scott_1')).toHaveTextContent('Scott');
    expect(screen.queryByTestId('Name_1_sort')).not.toBeInTheDocument();
    expect(screen.queryByTestId('Surname_1_sort')).not.toBeInTheDocument();
  });

  it('should render table items with sort', () => {
    const onSortFn = jest.fn();

    render(
      <Table
        values={items}
        onSort={onSortFn}
        keyExtractor={item => `${item.id}_${item.name}_${item.surname}`}
      >
        <Table.Column<TableItem>
          name="name"
          header="Name"
          data={item => item.name}
        />
        <Table.Column<TableItem>
          name="surname"
          header="Surname"
          data={item => item.surname}
        />
      </Table>
    );

    expect(screen.getByTestId('Name_0_sort')).toBeInTheDocument();
    expect(screen.getByTestId('Surname_1_sort')).toBeInTheDocument();
  });

  it('should toggle sort icons on click in column icon', async () => {
    const onSortFn = jest.fn();

    render(
      <Table
        values={items}
        onSort={onSortFn}
        keyExtractor={item => `${item.id}_${item.name}_${item.surname}`}
      >
        <Table.Column<TableItem>
          name="name"
          header="Name"
          data={item => item.name}
        />
        <Table.Column<TableItem>
          name="surname"
          header="Surname"
          data={item => item.surname}
        />
      </Table>
    );

    await waitFor(() => userEvent.click(screen.getByTestId('Name_0_sort')));

    expect(screen.getByTestId('Name_0_asc')).toBeInTheDocument();
    expect(onSortFn).toHaveBeenCalledWith('name', 'asc');

    await waitFor(() => userEvent.click(screen.getByTestId('Name_0_asc')));

    expect(screen.getByTestId('Name_0_desc')).toBeInTheDocument();
    expect(onSortFn).toHaveBeenCalledWith('name', 'desc');
  });

  it('should set previos clicked column icon to sort when click to sort another column', async () => {
    const onSortFn = jest.fn();

    render(
      <Table
        values={items}
        onSort={onSortFn}
        keyExtractor={item => `${item.id}_${item.name}_${item.surname}`}
      >
        <Table.Column<TableItem>
          name="name"
          header="Name"
          data={item => item.name}
        />
        <Table.Column<TableItem>
          name="surname"
          header="Surname"
          data={item => item.surname}
        />
      </Table>
    );

    await waitFor(() => userEvent.click(screen.getByTestId('Name_0_sort')));

    expect(screen.getByTestId('Name_0_asc')).toBeInTheDocument();
    expect(onSortFn).toHaveBeenCalledWith('name', 'asc');

    await waitFor(() => userEvent.click(screen.getByTestId('Surname_1_sort')));

    expect(screen.getByTestId('Name_0_sort')).toBeInTheDocument();
    expect(screen.getByTestId('Surname_1_asc')).toBeInTheDocument();
    expect(onSortFn).toHaveBeenCalledWith('surname', 'asc');
  });

  it('should not render a hidden column', () => {
    render(
      <Table
        values={items}
        keyExtractor={item => `${item.id}_${item.name}_${item.surname}`}
      >
        <Table.Column<TableItem> header="Name" data={item => item.name} />
        <Table.Column<TableItem>
          header="Surname"
          hidden={items.length > 0}
          data={item => item.surname}
        />
      </Table>
    );

    expect(screen.getByTestId('Name_0')).toBeInTheDocument();
    expect(screen.getByTestId('1_Travis_Scott_0')).toBeInTheDocument();
    expect(screen.queryByTestId('Surname_1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('1_Travis_Scott_1')).not.toBeInTheDocument();
  });
});
