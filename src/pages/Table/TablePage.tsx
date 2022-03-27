import {
  ActionButton,
  ActionsGroup,
  Button,
  ComponentPage,
  Input,
  Table
} from 'components';
import { FormEvent, useState } from 'react';
import { Direction, Property } from 'types';

interface TodoItem {
  id: number;
  description: string;
}

const properties: Property[] = [
  {
    name: 'values',
    description: 'Values that will be displayed in the table',
    type: 'T',
    required: 'true',
    defaultValue: '[]'
  },
  {
    name: 'children',
    description: 'Table columns',
    type: 'Table.Column',
    required: 'true',
    defaultValue: ''
  },
  {
    name: 'emtpyMessage',
    description: 'Message that will be displayed if values is empty',
    type: 'string',
    required: 'false',
    defaultValue: 'Table is empty'
  },
  {
    name: 'defaultSort',
    description: 'Initial sort/direction of table',
    type: '{ name: keyof T; direction: asc | desc | sort }',
    required: 'false',
    defaultValue: ''
  },
  {
    name: 'keyExtractor',
    description: 'Function to extract key from rows',
    type: '((value: T, index: number) => string)',
    required: 'true',
    defaultValue: ''
  },
  {
    name: 'onSort',
    description: 'Function that returns new sort',
    type: '((name: keyof T, direction: asc | desc | sort) => void)',
    required: 'false',
    defaultValue: ''
  }
];

const TablePage = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const add = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!todo) {
      return;
    }

    const newTodo: TodoItem = {
      id: todos.length > 0 ? Math.max(...todos.map(t => Number(t.id))) + 1 : 1,
      description: todo
    };

    setTodo('');
    setTodos(prev => [...prev, newTodo]);
  };

  const remove = (index: number): void => {
    setTodos(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const handleSort = (name: keyof TodoItem, direction: Direction): void => {
    const sortFn = (a: TodoItem, b: TodoItem) =>
      direction === 'asc'
        ? a[name].toString().localeCompare(b[name].toString())
        : b[name].toString().localeCompare(a[name].toString());

    if (direction === 'asc') {
      setTodos(prev => prev.sort(sortFn));
    }

    if (direction === 'desc') {
      setTodos(prev => prev.sort(sortFn));
    }
  };

  return (
    <ComponentPage title="Table" description="List all of your items.">
      <ComponentPage.Section subtitle="Examples">
        <form onSubmit={add}>
          <div style={{ display: 'flex' }}>
            <Input
              required
              autoFocus
              value={todo}
              name="description"
              label="Description"
              style={{ width: 300 }}
              onChange={event => setTodo(event.target.value)}
            />
            <Button className="mt-6 ml-4 mb-4" type="submit">
              Add
            </Button>
          </div>
        </form>
        <Table
          values={todos}
          onSort={handleSort}
          defaultSort={{ direction: 'asc', name: 'id' }}
          keyExtractor={(item: TodoItem) => `${item.id}`}
        >
          <Table.Column
            name="id"
            header="ID"
            data={(item: TodoItem) => item.id}
          />
          <Table.Column
            name="description"
            header="Description"
            data={(item: TodoItem) => item.description}
          />
          <Table.Column
            header=""
            data={(_, index: number) => (
              <ActionsGroup>
                <ActionButton icon="trash" onClick={() => remove(index)}>
                  Remove
                </ActionButton>
              </ActionsGroup>
            )}
          />
        </Table>
      </ComponentPage.Section>
      <ComponentPage.TableProperties properties={properties} />
    </ComponentPage>
  );
};

export default TablePage;
