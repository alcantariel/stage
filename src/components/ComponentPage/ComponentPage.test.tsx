import { screen } from '@testing-library/react';
import { Code } from 'components';
import { Property } from 'types';
import { render } from 'utils/testing';

import { ComponentPage } from '../ComponentPage';

describe('ComponentPage.test.tsx', () => {
  it('render correctly', () => {
    const properties: Property[] = [
      {
        name: 'isTable',
        type: 'boolean',
        required: 'true',
        defaultValue: 'true',
        description: 'should pass a table as children if isTable = true'
      }
    ];

    render(
      <ComponentPage title="Example title" description="Example description">
        <ComponentPage.Section subtitle="Usage">
          <Code>{'<Example />'}</Code>
        </ComponentPage.Section>
        <ComponentPage.TableProperties properties={properties} />
      </ComponentPage>
    );

    expect(screen.getByText('Example title')).toBeInTheDocument();
    expect(screen.getByText('Example description')).toBeInTheDocument();
    expect(screen.getByText('Usage')).toBeInTheDocument();
    expect(screen.getByText('<Example />')).toBeInTheDocument();
    expect(screen.getByText('Properties')).toBeInTheDocument();
    expect(screen.getByTestId('Name_0')).toHaveTextContent('Name');
    expect(screen.getByTestId('Description_1')).toHaveTextContent(
      'Description'
    );
    expect(screen.getByTestId('Type_2')).toHaveTextContent('Type');
    expect(screen.getByTestId('Default_3')).toHaveTextContent('Default');
    expect(screen.getByTestId('Required_4')).toHaveTextContent('Required');
    expect(screen.getByTestId('isTable_0')).toHaveTextContent('isTable');
    expect(screen.getByTestId('isTable_1')).toHaveTextContent(
      'should pass a table as children if isTable = true'
    );
    expect(screen.getByTestId('isTable_2')).toHaveTextContent('boolean');
    expect(screen.getByTestId('isTable_3')).toHaveTextContent('true');
    expect(screen.getByTestId('isTable_4')).toHaveTextContent('true');
  });

  it('render correctly without defaultValue', () => {
    const properties: Property[] = [
      {
        name: 'isTable',
        type: 'boolean',
        required: 'true',
        defaultValue: '',
        description: 'should pass a table as children if isTable = true'
      }
    ];

    render(
      <ComponentPage title="Example title" description="Example description">
        <ComponentPage.Section subtitle="Usage">
          <Code>{'<Example />'}</Code>
        </ComponentPage.Section>
        <ComponentPage.TableProperties properties={properties} />
      </ComponentPage>
    );

    expect(screen.getByTestId('isTable_3')).toHaveTextContent('-');
  });
});
