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

const properties: Property[] = [];

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

  const remove = (index: number) => {
    setTodos(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const handleSort = (name: keyof TodoItem, direction: Direction): void => {
    if (direction === 'asc') {
      setTodos(prev =>
        prev.sort((a, b) =>
          a[name].toString().localeCompare(b[name].toString())
        )
      );
    }

    if (direction === 'desc') {
      setTodos(prev =>
        prev.sort((a, b) =>
          b[name].toString().localeCompare(a[name].toString())
        )
      );
    }
  };

  return (
    <ComponentPage title="Table" description="Show your items with grace.">
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
